import express from 'express';
import * as cheerio from 'cheerio';
import { GoogleGenAI } from '@google/genai';
import { generateWebsiteRoast } from '../services/geminiRoasterService.js';

export function createWebsiteRoasterRouter(options: {
  vertexClient: GoogleGenAI;
  vertexModel: string;
}) {
  const router = express.Router();
  
  // Need to parse JSON body
  router.use(express.json());

  router.post('/', async (req, res, next) => {
    try {
      let { url } = req.body;
      
      if (!url) {
        res.status(400).json({
          error: {
            code: 'VALIDATION_FAILED',
            message: 'A URL is required.',
          },
        });
        return;
      }

      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
      }

      // 1. Fetch the website HTML
      let html = '';
      try {
        const fetchController = new AbortController();
        const timeoutId = setTimeout(() => fetchController.abort(), 10000); // 10s timeout
        
        const response = await fetch(url, {
          signal: fetchController.signal,
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
          }
        });
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        html = await response.text();
      } catch (err: any) {
        res.status(400).json({
          error: {
            code: 'FETCH_FAILED',
            message: 'Could not fetch the provided URL. Make sure it is a valid, publicly accessible website.',
            details: err.message
          },
        });
        return;
      }

      // 2. Parse HTML and extract visible text using Cheerio
      const $ = cheerio.load(html);
      
      // Remove scripts, styles, noscript, iframes, etc. to clean up text
      $('script, style, noscript, iframe, img, svg').remove();
      
      // Extract text and clean up whitespace
      const websiteText = $('body').text().replace(/\\s+/g, ' ').trim();
      
      if (!websiteText || websiteText.length < 50) {
        res.status(400).json({
          error: {
            code: 'NOT_ENOUGH_CONTENT',
            message: 'Could not find enough readable text on this website.',
          },
        });
        return;
      }

      // 3. Generate Roast
      const roastData = await generateWebsiteRoast({
        client: options.vertexClient,
        model: options.vertexModel,
        websiteText: websiteText,
        url: url
      });

      res.status(200).json(roastData);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
