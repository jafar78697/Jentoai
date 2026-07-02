
import { GoogleGenAI, Type } from "@google/genai";

// Standardized chat with agent using gemini-3-flash-preview
export const chatWithAgent = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  // Always create a new GoogleGenAI instance right before the call
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
      ...history,
      { role: 'user', parts: [{ text: message }] }
    ],
    config: {
      systemInstruction: "You are the 'Jento AI Sales Specialist', a technical AI consultant. Your goal is to help businesses automate operations using Jento AI's workflow-driven agents. Emphasize execution and 'autonomous workflows'. Recommend the Professional plan. professional and accessible tone.",
    },
  });

  return response.text || "I'm sorry, I couldn't process that request.";
};

// Standardized industry analysis with JSON response schema
export const getAgentAnalysis = async (industry: string) => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [{ role: 'user', parts: [{ text: `Analyze how Jento AI's autonomous workflows can revolutionize the ${industry} industry. Return in JSON format.` }] }],
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    industry: { type: Type.STRING },
                    efficiency_gain: { type: Type.STRING },
                    top_use_cases: {
                        type: Type.ARRAY,
                        items: { type: Type.STRING }
                    },
                    projected_roi: { type: Type.STRING }
                },
                required: ["industry", "efficiency_gain", "top_use_cases", "projected_roi"]
            }
        }
    });

    try {
        const text = response.text;
        if (!text) return null;
        return JSON.parse(text.trim());
    } catch (e) {
        console.error("Failed to parse AI analysis", e);
        return null;
    }
}
