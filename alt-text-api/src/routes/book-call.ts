import express from 'express';

const BOOKING_WEBHOOK_URL = process.env.BOOKING_WEBHOOK_URL || 'https://script.google.com/macros/s/AKfycbzZeOEK1XReZCR5tldY8PzMqH7hYSP74w0Lun6_slbAFu-ukD4rjHdMoeKnuYM1DGc/exec';

export function createBookCallRouter() {
  const router = express.Router();
  router.use(express.json());

  router.post('/', async (req, res, next) => {
    try {
      const { name, email, industry, source } = req.body;

      if (!name || !email || !industry) {
        res.status(400).json({
          error: {
            code: 'VALIDATION_FAILED',
            message: 'Name, email, and industry are required.',
          },
        });
        return;
      }

      // We forward to Google Apps Script using URLSearchParams just like the frontend did
      const params = new URLSearchParams();
      params.append('name', name);
      params.append('industry', industry);
      params.append('email', email);
      params.append('source', source || 'Website Backend API');

      const response = await fetch(BOOKING_WEBHOOK_URL, {
        method: 'POST',
        body: params
      });

      if (!response.ok) {
        throw new Error(`Google Apps Script responded with status ${response.status}`);
      }

      res.status(200).json({ success: true, message: 'Booking submitted successfully' });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
