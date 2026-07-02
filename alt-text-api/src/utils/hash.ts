import crypto from 'node:crypto';

export function hashDailyIdentifier(ip: string, date: string, salt: string): string {
  return crypto.createHash('sha256').update(`${ip}:${date}:${salt}`).digest('hex');
}

export function getTodayUtcDate(): string {
  return new Date().toISOString().slice(0, 10);
}
