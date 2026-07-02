import { GoogleGenAI, Type } from '@google/genai';
import { altTextResponseSchema, AltTextResponse, RequestBody } from '../schema.js';

const languageLabels: Record<RequestBody['language'], string> = {
  english: 'English',
  roman_urdu: 'Roman Urdu',
  hindi: 'Hindi',
};

function buildPrompt(input: RequestBody): string {
  const keyword = input.keyword || 'none';

  return `You are an expert SEO and accessibility copywriter.

Analyze the provided image and create high-quality alt text variants.

Inputs:
- Target keyword: ${keyword}
- Mode: ${input.mode}
- Language: ${languageLabels[input.language]}

Rules:
1. Describe only visible content.
2. Do not identify private people.
3. Do not infer sensitive attributes including religion, race, health, politics, disability, or age.
4. Use the keyword only if naturally relevant.
5. Do not keyword stuff.
6. Write naturally and precisely. Avoid filler, hype, repetition, and unnecessary adjectives.
7. Prefer one clear sentence or compact phrase, not multiple sentences.
8. Short alt text must be under 125 characters and should capture only the core subject.
9. SEO alt text should be search-friendly but still sound human. Target 90 to 180 characters.
10. Accessibility alt text should be clear for screen reader users. Usually keep it to one sentence and around 90 to 220 characters unless the image truly requires more detail.
11. E-commerce alt text should focus on visible product traits only when the image is actually product-focused.
12. If the image is a chart, graph, infographic, UI screenshot, collage, or mixed visual, do not force a product-style e-commerce description. Instead, return a practical literal description of what is visible.
13. Do not list many small product details unless they are central to the image.
14. For charts or infographics, mention the chart type or subject if clearly visible.
15. If the image is not product-focused, ecommerce_alt_text should still be a short literal fallback description, not a marketing rewrite.
16. Do not write phrases like "suitable for", "ideal for", "perfect for", or similar usage commentary.
17. Notes should be brief and only mention something useful, such as keyword omission or image ambiguity.
18. Return JSON only. No markdown. No explanation outside JSON.

Quality targets by field:
- short_alt_text: concise, plain, literal
- seo_alt_text: natural summary with optional relevant keyword
- accessibility_alt_text: easiest version to understand when read aloud
- ecommerce_alt_text: best for product catalog use, but only if the image truly fits that use case

Bad pattern to avoid:
- long comma-heavy lists
- stuffing brand names or years unless clearly visible and useful
- repeating the same idea across every field with only minor wording changes

Return this exact JSON shape:
{
  "short_alt_text": "",
  "seo_alt_text": "",
  "accessibility_alt_text": "",
  "ecommerce_alt_text": "",
  "notes": ""
}`;
}

function extractJson(text: string): string {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) {
    throw new Error('AI_RESPONSE_INVALID');
  }
  return match[0];
}

function normalizeText(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

function trimToLength(value: string, maxChars: number): string {
  if (value.length <= maxChars) return value;

  const sliced = value.slice(0, maxChars + 1);
  const lastBoundary = Math.max(
    sliced.lastIndexOf('. '),
    sliced.lastIndexOf(', '),
    sliced.lastIndexOf('; '),
    sliced.lastIndexOf(' ')
  );

  return normalizeText((lastBoundary > 40 ? sliced.slice(0, lastBoundary) : sliced.slice(0, maxChars)).replace(/[,\s;:.!-]+$/, ''));
}

function cleanAltTextResult(result: AltTextResponse): AltTextResponse {
  return {
    short_alt_text: trimToLength(normalizeText(result.short_alt_text), 125),
    seo_alt_text: trimToLength(normalizeText(result.seo_alt_text), 220),
    accessibility_alt_text: trimToLength(normalizeText(result.accessibility_alt_text), 260),
    ecommerce_alt_text: trimToLength(normalizeText(result.ecommerce_alt_text), 220),
    notes: trimToLength(normalizeText(result.notes || ''), 240),
  };
}

async function callGemini(
  client: GoogleGenAI,
  model: string,
  prompt: string,
  mimeType: string,
  bytesBase64: string
): Promise<string> {
  const response = await client.models.generateContent({
    model,
    contents: [
      {
        role: 'user',
        parts: [
          { text: prompt },
          {
            inlineData: {
              mimeType,
              data: bytesBase64,
            },
          },
        ],
      },
    ],
    config: {
      temperature: 0.4,
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          short_alt_text: { type: Type.STRING },
          seo_alt_text: { type: Type.STRING },
          accessibility_alt_text: { type: Type.STRING },
          ecommerce_alt_text: { type: Type.STRING },
          notes: { type: Type.STRING },
        },
        required: [
          'short_alt_text',
          'seo_alt_text',
          'accessibility_alt_text',
          'ecommerce_alt_text',
        ],
      },
    },
  });

  const text = response.text || '';

  if (!text) {
    throw new Error('AI_RESPONSE_INVALID');
  }

  return text;
}

export async function generateAltTextWithGemini(options: {
  client: GoogleGenAI;
  model: string;
  input: RequestBody;
  mimeType: string;
  bytes: Buffer;
}): Promise<AltTextResponse> {
  const prompt = buildPrompt(options.input);
  const base64 = options.bytes.toString('base64');

  const first = await callGemini(options.client, options.model, prompt, options.mimeType, base64);

  try {
    return cleanAltTextResult(altTextResponseSchema.parse(JSON.parse(extractJson(first))));
  } catch {
    const repairPrompt = `${prompt}

Your last response was invalid or low quality.
Return only corrected JSON matching the requested schema.
Make each field tighter, clearer, and less verbose.`;

    const second = await callGemini(options.client, options.model, repairPrompt, options.mimeType, base64);
    return cleanAltTextResult(altTextResponseSchema.parse(JSON.parse(extractJson(second))));
  }
}
