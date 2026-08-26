import { GoogleGenAI, Type } from '@google/genai';

export interface CrmData {
  customerName: string;
  company: string;
  budget: string;
  painPoints: string[];
  nextSteps: string[];
}

export async function extractCrmDataFromAudio(options: {
  client: GoogleGenAI;
  model: string;
  mimeType: string;
  bytes: Buffer;
}): Promise<CrmData> {
  const prompt = `Listen to this sales call or meeting audio. Extract the following information into a strict JSON format. 
If an information is not available, leave it as an empty string or empty array.
Fields to extract:
- customerName: The name of the customer or lead.
- company: The company the customer works for.
- budget: Any mention of budget, cost, or pricing expectations.
- painPoints: A list of key pain points or problems the customer is facing.
- nextSteps: A list of action items or next steps agreed upon in the call.
`;

  const base64 = options.bytes.toString('base64');

  const response = await options.client.models.generateContent({
    model: options.model,
    contents: [
      {
        role: 'user',
        parts: [
          { text: prompt },
          {
            inlineData: {
              mimeType: options.mimeType,
              data: base64,
            },
          },
        ],
      },
    ],
    config: {
      temperature: 0.2,
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          customerName: { type: Type.STRING },
          company: { type: Type.STRING },
          budget: { type: Type.STRING },
          painPoints: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING } 
          },
          nextSteps: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING } 
          },
        },
        required: ['customerName', 'company', 'budget', 'painPoints', 'nextSteps'],
      },
    },
  });

  const text = response.text || '';
  if (!text) {
    throw new Error('AI_RESPONSE_INVALID');
  }

  const match = text.match(/\{[\s\S]*\}/);
  if (!match) {
    throw new Error('AI_RESPONSE_INVALID');
  }

  return JSON.parse(match[0]) as CrmData;
}
