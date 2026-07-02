import { Request, Response } from 'express';

export function getClientIp(request: Request): string {
  const forwarded = request.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim();
  }

  if (Array.isArray(forwarded) && forwarded[0]) {
    return forwarded[0];
  }

  return request.ip || 'unknown';
}

export function sendError(
  response: Response,
  status: number,
  code: string,
  message: string
): Response {
  return response.status(status).json({
    error: { code, message },
  });
}
