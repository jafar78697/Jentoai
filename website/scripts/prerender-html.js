import puppeteer from 'puppeteer';
import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All SEO landing pages
const PAGES = [
  '/', // Home
  '/aiagent',
  '/services',
  '/use-cases',
  '/industries',
  '/pricing',
  '/about',
  '/contact',
  '/book-call',
  '/faq',
  '/legal',
  '/case-studies',
  '/agentic-strategy',
  '/resources',
  '/framework-comparison',
  '/agentic-rag',
  '/ai-governance',
  '/ai-sdr-guide',
  '/privacy',
  '/terms',
  '/ai-agents-guide',
  '/reviews',
  '/ai-receptionist-for-small-business',
  '/ai-answering-service',
  '/ai-voice-agent',
  '/ai-virtual-receptionist',
  '/ai-phone-receptionist',
  '/ai-call-answering-service',
  '/tool/image-alt-text-generator',
  '/tool/voice-to-crm-extractor',
  '/tool/voice-resume-builder',
  '/tool/website-roaster',
  '/tools'
];

const distDir = path.resolve(__dirname, '../dist');

async function prerender() {
  const app = express();
  app.use(express.static(distDir));
  
  // Create a fallback so SPA routing works when puppeteer navigates
  app.use((req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });

  const server = app.listen(0, async () => {
    const port = server.address().port;
    console.log(`Express server running on port ${port} for prerendering...`);

    try {
      const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });

      for (const pagePath of PAGES) {
        const url = `http://localhost:${port}${pagePath}`;
        console.log(`Prerendering ${pagePath}...`);
        
        const page = await browser.newPage();
        
        // Wait until there are no more than 0 network connections for at least 500 ms
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
        
        // Give React a small amount of extra time to mount and replace "Initializing Engine..."
        await new Promise(r => setTimeout(r, 1500));

        const html = await page.content();
        
        // Write the HTML back to dist
        let routeDir = path.join(distDir, pagePath);
        if (pagePath === '/') {
          routeDir = distDir;
        }
        
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        
        fs.writeFileSync(path.join(routeDir, 'index.html'), html);
        await page.close();
      }

      await browser.close();
      console.log('HTML Prerendering complete!');
    } catch (error) {
      console.error('Prerendering failed:', error);
      process.exit(1);
    } finally {
      server.close();
    }
  });
}

prerender();
