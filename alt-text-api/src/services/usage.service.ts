import { Firestore, FieldValue } from '@google-cloud/firestore';

interface UsageCheckResult {
  allowed: boolean;
  count: number;
}

interface UsageLogInput {
  date: string;
  ipHash: string;
  mode: string;
  language: string;
  keyword: string;
  imageSize: number;
  imageMime: string;
  status: 'success' | 'error';
  latencyMs: number;
  geminiModel: string;
  errorCode: string | null;
}

export class UsageService {
  private firestore: Firestore | null;
  private memoryCounts = new Map<string, number>();
  private disabled: boolean;

  constructor(projectId?: string, disabled = false) {
    this.disabled = disabled || !projectId;
    this.firestore = this.disabled ? null : new Firestore({ projectId });
  }

  async reserve(ipHash: string, date: string, limit: number): Promise<UsageCheckResult> {
    if (this.disabled || !this.firestore) {
      const key = `${date}_${ipHash}`;
      const next = (this.memoryCounts.get(key) || 0) + 1;
      if (next > limit) {
        return { allowed: false, count: next - 1 };
      }
      this.memoryCounts.set(key, next);
      return { allowed: true, count: next };
    }

    const documentId = `${date}_${ipHash}`;
    const docRef = this.firestore.collection('alt_text_usage_daily').doc(documentId);

    return this.firestore.runTransaction(async (transaction) => {
      const snapshot = await transaction.get(docRef);
      const current = snapshot.exists ? Number(snapshot.get('count') || 0) : 0;

      if (current >= limit) {
        return { allowed: false, count: current };
      }

      const next = current + 1;
      const payload = {
        date,
        ipHash,
        count: next,
        firstUsedAt: snapshot.exists ? snapshot.get('firstUsedAt') : FieldValue.serverTimestamp(),
        lastUsedAt: FieldValue.serverTimestamp(),
      };

      transaction.set(docRef, payload, { merge: true });
      return { allowed: true, count: next };
    });
  }

  async logUsage(input: UsageLogInput): Promise<void> {
    if (this.disabled || !this.firestore) {
      return;
    }

    await this.firestore.collection('alt_text_usage_logs').add({
      timestamp: FieldValue.serverTimestamp(),
      ...input,
    });
  }
}
