import { GoogleGenAI } from '@google/genai';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import pino from 'pino';
import { createAltTextRouter } from './routes/alt-text.js';
import { createVoiceToCrmRouter } from './routes/voice-to-crm.js';
import { createChatRouter } from './routes/chat.js';
import { createBookCallRouter } from './routes/book-call.js';
import { UsageService } from './services/usage.service.js';

const logger = pino({ level: process.env.NODE_ENV === 'production' ? 'info' : 'debug' });

const port = Number(process.env.PORT || 8080);
const googleCloudProject = process.env.GOOGLE_CLOUD_PROJECT || process.env.VERTEX_AI_PROJECT || '';
const googleCloudLocation = process.env.GOOGLE_CLOUD_LOCATION || process.env.VERTEX_AI_LOCATION || 'global';
const vertexModel =
  process.env.VERTEX_MODEL || process.env.VERTEX_ALT_TEXT_MODEL || process.env.VERTEX_AI_MODEL || 'gemini-2.5-flash';
const ipHashSalt = process.env.IP_HASH_SALT || '';
const projectId = googleCloudProject;
const disableFirestore = process.env.DISABLE_FIRESTORE === 'true';
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

if (!googleCloudProject) {
  logger.warn('GOOGLE_CLOUD_PROJECT is missing. Vertex AI requests will fail until it is configured.');
}

if (!ipHashSalt) {
  logger.warn('IP_HASH_SALT is missing. Daily usage protection is not secure until it is configured.');
}

const app = express();
const usageService = new UsageService(projectId, disableFirestore);
const vertexClient = new GoogleGenAI({
  vertexai: true,
  project: googleCloudProject,
  location: googleCloudLocation,
});

app.set('trust proxy', 1);
app.use(helmet());
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error('Origin not allowed by CORS.'));
    },
  })
);
app.use(
  (request, response, next) => {
    const startedAt = Date.now();

    response.on('finish', () => {
      logger.info({
        method: request.method,
        path: request.path,
        statusCode: response.statusCode,
        durationMs: Date.now() - startedAt,
      });
    });

    next();
  }
);
app.use(
  '/api/alt-text',
  rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 20,
    standardHeaders: true,
    legacyHeaders: false,
  })
);
app.use(
  '/api/extract-crm-data',
  rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
  })
);
app.use(
  '/api/chat',
  rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 50,
    standardHeaders: true,
    legacyHeaders: false,
  })
);
app.use(
  '/api/book-call',
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limit each IP to 5 booking requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
  })
);

app.get('/health', (_request, response) => {
  response.status(200).json({ ok: true });
});

app.use(
  '/api/alt-text',
  createAltTextRouter({
    usageService,
    vertexClient,
    vertexModel,
    ipHashSalt,
  })
);

app.use(
  '/api/extract-crm-data',
  createVoiceToCrmRouter({
    vertexClient,
    vertexModel,
  })
);

app.use(
  '/api/chat',
  createChatRouter({
    vertexClient,
    vertexModel,
  })
);

app.use('/api/book-call', createBookCallRouter());

app.use((error: Error, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
  if ((error as any)?.code === 'LIMIT_FILE_SIZE') {
    response.status(413).json({
      error: {
        code: 'FILE_TOO_LARGE',
        message: 'Images must be smaller than 5MB.',
      },
    });
    return;
  }

  logger.error({ err: error }, 'Unhandled request error');
  response.status(500).json({
    error: {
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Something went wrong.',
    },
  });
});

app.listen(port, () => {
  logger.info({ port }, 'Alt text API listening');
});
