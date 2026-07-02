import { GoogleGenAI } from '@google/genai';
import { Router } from 'express';
import multer from 'multer';
import { fileTypeFromBuffer } from 'file-type';
import { requestBodySchema } from '../schema.js';
import { generateAltTextWithGemini } from '../services/gemini.service.js';
import { UsageService } from '../services/usage.service.js';
import { getClientIp, sendError } from '../utils/http.js';
import { getTodayUtcDate, hashDailyIdentifier } from '../utils/hash.js';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
    files: 1,
  },
});

const supportedMimeTypes = new Set(['image/jpeg', 'image/png', 'image/webp']);

export function createAltTextRouter(deps: {
  usageService: UsageService;
  vertexClient: GoogleGenAI;
  vertexModel: string;
  ipHashSalt: string;
}) {
  const router = Router();

  router.post('/', upload.single('image'), async (request, response) => {
    const startedAt = Date.now();
    const date = getTodayUtcDate();
    const parsedBody = requestBodySchema.safeParse({
      keyword: request.body.keyword,
      mode: request.body.mode,
      language: request.body.language,
    });

    if (!request.file) {
      return sendError(response, 400, 'IMAGE_REQUIRED', 'Please upload an image.');
    }

    if (!parsedBody.success) {
      return sendError(response, 400, 'INVALID_INPUT', 'Please review your input and try again.');
    }

    if (!supportedMimeTypes.has(request.file.mimetype)) {
      return sendError(
        response,
        415,
        'UNSUPPORTED_IMAGE_TYPE',
        'Only JPG, PNG, and WebP images are supported.'
      );
    }

    const detectedType = await fileTypeFromBuffer(request.file.buffer);
    if (!detectedType || !supportedMimeTypes.has(detectedType.mime)) {
      return sendError(
        response,
        415,
        'UNSUPPORTED_IMAGE_TYPE',
        'Only JPG, PNG, and WebP images are supported.'
      );
    }

    const clientIp = getClientIp(request);
    const ipHash = hashDailyIdentifier(clientIp, date, deps.ipHashSalt);
    const usage = await deps.usageService.reserve(ipHash, date, 5);

    if (!usage.allowed) {
      return sendError(
        response,
        429,
        'DAILY_LIMIT_REACHED',
        'You have used your 5 free generations for today.'
      );
    }

    try {
      const result = await generateAltTextWithGemini({
        client: deps.vertexClient,
        model: deps.vertexModel,
        input: parsedBody.data,
        mimeType: detectedType.mime,
        bytes: request.file.buffer,
      });

      await deps.usageService.logUsage({
        date,
        ipHash,
        mode: parsedBody.data.mode,
        language: parsedBody.data.language,
        keyword: parsedBody.data.keyword,
        imageSize: request.file.size,
        imageMime: detectedType.mime,
        status: 'success',
        latencyMs: Date.now() - startedAt,
        geminiModel: deps.vertexModel,
        errorCode: null,
      });

      return response.status(200).json(result);
    } catch (error) {
      const errorCode = error instanceof Error ? error.message : 'AI_GENERATION_FAILED';

      await deps.usageService.logUsage({
        date,
        ipHash,
        mode: parsedBody.data.mode,
        language: parsedBody.data.language,
        keyword: parsedBody.data.keyword,
        imageSize: request.file.size,
        imageMime: detectedType.mime,
        status: 'error',
        latencyMs: Date.now() - startedAt,
        geminiModel: deps.vertexModel,
        errorCode,
      });

      return sendError(
        response,
        502,
        errorCode === 'AI_RESPONSE_INVALID' ? 'AI_RESPONSE_INVALID' : 'AI_GENERATION_FAILED',
        'The AI could not generate alt text right now. Please try again.'
      );
    }
  });

  return router;
}
