import { GoogleGenAI } from '@google/genai';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface HandleChatOptions {
  client: GoogleGenAI;
  model: string;
  history: ChatMessage[];
  message: string;
}

const SYSTEM_INSTRUCTION = `You are Jento Architect, an expert AI assistant for Jento AI.
Jento AI specializes in custom autonomous AI agent development and enterprise n8n automation.
Keep your answers concise, helpful, and professional. 
Focus on explaining how AI agents can save time, generate leads, and automate support.
Encourage users to book a strategy call if they want a custom build.`;

export async function handleChat({ client, model, history, message }: HandleChatOptions): Promise<string> {
  const contents = history.map(msg => ({
    role: msg.role,
    parts: [{ text: msg.text }]
  }));

  const chat = client.chats.create({
    model,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
    history: contents
  });

  const response = await chat.sendMessage({ message });
  return response.text || '';
}
