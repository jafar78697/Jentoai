import { GoogleGenAI } from '@google/genai';

export async function generateWebsiteRoast({
  client,
  model,
  websiteText,
  url
}: {
  client: GoogleGenAI;
  model: string;
  websiteText: string;
  url: string;
}) {
  const prompt = `You are a world-class, brutally honest, and slightly sarcastic marketing copywriter and conversion rate optimization (CRO) expert.
A user has submitted the text content of their website landing page (${url}) for you to review.

Your task is to ROAST their marketing copy and highlight exactly why their website will struggle to convert visitors into customers.
Don't hold back—be witty, direct, and insightful.

After the roast, provide 3 highly specific, actionable ways they can improve the copy, layout, or value proposition.

Analyze this website content:
"""
${websiteText.substring(0, 50000)} // truncate to avoid massive payloads just in case
"""

Output ONLY a JSON object with this exact structure:
{
  "score": <number between 1 and 100 representing how good the original copy is>,
  "roast": "A 2-3 paragraph brutal, funny, but accurate roast of their landing page.",
  "flaws": [
    "Flaw 1: <description>",
    "Flaw 2: <description>",
    "Flaw 3: <description>"
  ],
  "improvements": [
    "Fix 1: <actionable advice>",
    "Fix 2: <actionable advice>",
    "Fix 3: <actionable advice>"
  ]
}

Do not include markdown tags like \`\`\`json. Just return raw JSON.`;

  const response = await client.models.generateContent({
    model: model,
    contents: prompt,
    config: {
      temperature: 0.7,
      responseMimeType: 'application/json'
    }
  });

  const text = response.text;
  try {
    return JSON.parse(text || '{}');
  } catch (e) {
    console.error('Failed to parse Gemini JSON output', text);
    throw new Error('Failed to parse roast data from AI.');
  }
}
