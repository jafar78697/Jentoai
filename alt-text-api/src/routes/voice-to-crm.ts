import express from 'express';
import multer from 'multer';
import { GoogleGenAI } from '@google/genai';
import { extractCrmDataFromAudio } from '../services/geminiAudioService.js';

export function createVoiceToCrmRouter(options: {
  vertexClient: GoogleGenAI;
  vertexModel: string;
}) {
  const router = express.Router();
  const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  });

  router.post('/', upload.single('audio'), async (req, res, next) => {
    try {
      if (!req.file) {
        res.status(400).json({
          error: {
            code: 'VALIDATION_FAILED',
            message: 'An audio file is required.',
          },
        });
        return;
      }

      // We allow standard audio formats
      const allowedMimes = ['audio/mpeg', 'audio/wav', 'audio/x-m4a', 'audio/m4a', 'audio/mp3', 'audio/webm', 'video/webm'];
      if (!allowedMimes.includes(req.file.mimetype)) {
        res.status(400).json({
          error: {
            code: 'VALIDATION_FAILED',
            message: 'Invalid audio format. Please upload MP3, WAV, WebM, or M4A.',
          },
        });
        return;
      }

      const crmData = await extractCrmDataFromAudio({
        client: options.vertexClient,
        model: options.vertexModel,
        mimeType: req.file.mimetype,
        bytes: req.file.buffer,
      });

      res.status(200).json(crmData);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
