import { GoogleGenAI, Part } from '@google/genai';

export async function generateResume({
  client,
  model,
  audioMimeType,
  audioBytes,
  docMimeType,
  docBytes,
  jobTitle
}: {
  client: GoogleGenAI;
  model: string;
  audioMimeType?: string;
  audioBytes?: Buffer;
  docMimeType?: string;
  docBytes?: Buffer;
  jobTitle?: string;
}) {
  const parts: Part[] = [];

  parts.push({
    text: `You are an expert executive resume writer and career coach. Your task is to generate a highly professional resume based on the provided inputs.
${jobTitle ? `The user is specifically targeting the following role: "${jobTitle}". Tailor the resume to this role.` : ''}

Inputs you may receive:
1. An audio transcript (from an audio file) where the user explains their skills.
2. A document (PDF/Image) of their old resume.

Instructions:
- Merge the information from the audio and the document.
- Improve the phrasing to be professional, action-oriented, and impactful.
- Output ONLY a JSON object with the following schema:
{
  "name": "Full Name",
  "contact": {
    "email": "Email",
    "phone": "Phone",
    "linkedin": "LinkedIn URL (if any)"
  },
  "summary": "A powerful 2-3 sentence professional summary",
  "experience": [
    {
      "title": "Job Title",
      "company": "Company Name",
      "dates": "Start - End Date",
      "description": ["Bullet 1", "Bullet 2"]
    }
  ],
  "education": [
    {
      "degree": "Degree Name",
      "institution": "School Name",
      "dates": "Dates"
    }
  ],
  "skills": ["Skill 1", "Skill 2"]
}

Do not include markdown blocks like \`\`\`json. Return raw JSON.`
  });

  if (audioBytes && audioMimeType) {
    parts.push({
      inlineData: {
        mimeType: audioMimeType,
        data: audioBytes.toString('base64')
      }
    });
  }

  if (docBytes && docMimeType) {
    parts.push({
      inlineData: {
        mimeType: docMimeType,
        data: docBytes.toString('base64')
      }
    });
  }

  const response = await client.models.generateContent({
    model: model,
    contents: parts,
    config: {
      temperature: 0.2,
      responseMimeType: 'application/json'
    }
  });

  const text = response.text;
  try {
    return JSON.parse(text || '{}');
  } catch (e) {
    console.error('Failed to parse Gemini JSON output', text);
    throw new Error('Failed to parse resume data from AI.');
  }
}
