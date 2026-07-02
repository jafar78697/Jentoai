import { AltTextLanguage, AltTextMode, AltTextResult } from './types';

const API_URL = (import.meta.env.VITE_ALT_TEXT_API_URL || '/api/alt-text').trim();

export class AltTextApiError extends Error {
  constructor(message: string, readonly code?: string) {
    super(message);
    this.name = 'AltTextApiError';
  }
}

interface GenerateAltTextParams {
  file: File;
  keyword: string;
  mode: AltTextMode;
  language: AltTextLanguage;
}

export async function generateAltText({
  file,
  keyword,
  mode,
  language,
}: GenerateAltTextParams): Promise<AltTextResult> {
  const form = new FormData();
  form.append('image', file);
  form.append('keyword', keyword.trim());
  form.append('mode', mode);
  form.append('language', language);

  let response: Response;

  try {
    response = await fetch(API_URL, {
      method: 'POST',
      body: form,
    });
  } catch (error) {
    throw new AltTextApiError(
      'The alt text service is not connected yet. Add your API endpoint and try again.',
      'API_UNREACHABLE'
    );
  }

  const payload = await response.json().catch(() => null);

  if (!response.ok) {
    const message =
      payload?.error?.message ||
      'The AI could not generate alt text right now. Please try again.';
    throw new AltTextApiError(message, payload?.error?.code);
  }

  return payload as AltTextResult;
}
