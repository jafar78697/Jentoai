import express from 'express';
import multer from 'multer';
import { GoogleGenAI } from '@google/genai';
import { generateResume } from '../services/geminiResumeService.js';

export function createResumeBuilderRouter(options: {
  vertexClient: GoogleGenAI;
  vertexModel: string;
}) {
  const router = express.Router();
  const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit for audio + pdf combined
  });

  // Accept up to one audio file and one document file
  router.post('/', upload.fields([{ name: 'audio', maxCount: 1 }, { name: 'document', maxCount: 1 }]), async (req, res, next) => {
    try {
      const files = req.files as { [fieldname: string]: Express.Multer.File[] };
      const audioFile = files?.['audio']?.[0];
      const docFile = files?.['document']?.[0];
      const jobTitle = req.body.jobTitle;

      if (!audioFile && !docFile) {
        res.status(400).json({
          error: {
            code: 'VALIDATION_FAILED',
            message: 'Please provide either an audio recording or an existing resume document.',
          },
        });
        return;
      }

      const resumeData = await generateResume({
        client: options.vertexClient,
        model: options.vertexModel,
        audioMimeType: audioFile?.mimetype,
        audioBytes: audioFile?.buffer,
        docMimeType: docFile?.mimetype,
        docBytes: docFile?.buffer,
        jobTitle: jobTitle
      });

      res.status(200).json(resumeData);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
