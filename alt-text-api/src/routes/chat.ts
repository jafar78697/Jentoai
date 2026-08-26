import express from 'express';
import { GoogleGenAI } from '@google/genai';
import { handleChat, ChatMessage } from '../services/geminiChatService.js';

export function createChatRouter(options: {
  vertexClient: GoogleGenAI;
  vertexModel: string;
}) {
  const router = express.Router();
  router.use(express.json());

  router.post('/', async (req, res, next) => {
    try {
      const { message, history } = req.body;

      if (!message || typeof message !== 'string') {
        res.status(400).json({
          error: {
            code: 'VALIDATION_FAILED',
            message: 'A valid message string is required.',
          },
        });
        return;
      }

      const chatHistory: ChatMessage[] = Array.isArray(history) ? history : [];

      const responseText = await handleChat({
        client: options.vertexClient,
        model: options.vertexModel,
        history: chatHistory,
        message,
      });

      res.status(200).json({ response: responseText });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
