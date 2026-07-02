import { z } from 'zod';

export const modeSchema = z.enum(['general', 'seo', 'accessibility', 'ecommerce']);
export const languageSchema = z.enum(['english', 'roman_urdu', 'hindi']);

export const requestBodySchema = z.object({
  keyword: z.string().trim().max(120).optional().default(''),
  mode: modeSchema.optional().default('general'),
  language: languageSchema.optional().default('english'),
});

export const altTextResponseSchema = z.object({
  short_alt_text: z.string().min(1).max(125),
  seo_alt_text: z.string().min(1).max(300),
  accessibility_alt_text: z.string().min(1).max(500),
  ecommerce_alt_text: z.string().min(1).max(350),
  notes: z.string().max(500).optional().default(''),
});

export type AltTextResponse = z.infer<typeof altTextResponseSchema>;
export type RequestBody = z.infer<typeof requestBodySchema>;
