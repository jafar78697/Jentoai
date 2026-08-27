import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mirrored from App.tsx
const SEO_DATA = {
  'home': {
    title: 'Jento AI | AI Agent Development Company & n8n Automation Experts',
    desc: 'Transform your business with Jento AI. We specialize in custom autonomous AI agent development and enterprise n8n automation. Scale lead generation, sales, and support.'
  },
  'aiagent': {
    title: 'AI Agents | Custom Autonomous Workforce & n8n Workflows | Jento AI',
    desc: 'Deploy custom AI agents for sales, support, and data entry. Jento AI builds high-performance autonomous nodes that work 24/7 without supervision.'
  },
  'services': {
    title: 'AI Automation Services | n8n Workflows | Jento AI',
    desc: 'Expert n8n consulting and workflow automation. We build low-code/no-code operational architectures that connect your entire tech stack.'
  },
  'use-cases': {
    title: 'AI Automation Use Cases | Solve Business Problems | Jento AI',
    desc: 'Discover how AI agents solve real-world problems in Real Estate, SaaS, HR, and Logistics. Automate 80% of manual repetitive work.'
  },
  'industries': {
    title: 'Industry Solutions | AI for Real Estate, SaaS, HR | Jento AI',
    desc: 'Tailored AI automation strategies for your industry. From property management to e-commerce fulfillment, see exactly how we save you time.'
  },
  'pricing': {
    title: 'Pricing | Transparent AI Automation Costs | Jento AI',
    desc: 'Clear, transparent pricing for AI agent development. No hidden monthly fees—you own the architecture we build. One-time setup costs.'
  },
  'about': {
    title: 'About Jento AI | Enterprise AI Automation Experts',
    desc: 'Meet the team building the future of work. Jento AI is a collective of automation architects dedicated to eliminating manual drudgery.'
  },
  'contact': {
    title: 'Contact Us | Get Started with AI Automation | Jento AI',
    desc: 'Ready to automate? Contact Jento AI today. Speak with an automation architect about your project requirements.'
  },
  'book-call': {
    title: 'Book a Free Strategy Call | Jento AI',
    desc: 'Schedule a free 30-minute automation strategy session. Let\'s map out your current workflows and identify where AI can save you money.'
  },
  'faq': {
    title: 'FAQ | AI Automation Questions Answered | Jento AI',
    desc: 'Have questions about AI agents or n8n? Read our FAQ to understand security, pricing, and how our autonomous systems work.'
  },
  'legal': {
    title: 'Legal & Compliance | Privacy Policy | Jento AI',
    desc: 'Read Jento AI\'s terms of service and privacy policy. We are committed to data security and enterprise-grade compliance.'
  },
  'case-studies': {
    title: 'Case Studies | Real AI Automation Results | Jento AI',
    desc: 'See real results. How we saved a Real Estate agency 40 hours/week and helped a SaaS company reduce churn by 15% with AI agents.'
  },
  'agentic-strategy': {
    title: 'Agentic AI Strategy: The Era of Autonomous Revenue | Jento AI',
    desc: 'A deep dive into the shift from Generative to Agentic AI. Learn why Autonomous Revenue is the next frontier for forward-thinking enterprises.'
  },
  'resources': {
    title: 'Resources | AI Automation Guides & Frameworks | Jento AI',
    desc: 'Free guides, whitepapers, and frameworks for implementing AI automation in your business. Learn best practices for n8n.'
  },
  'framework-comparison': {
    title: 'LangGraph vs CrewAI vs AutoGen: 2026 Decision Matrix | Jento AI',
    desc: 'Technical comparison of the top agentic frameworks. We break down when to use LangGraph, CrewAI, or AutoGen for your project.'
  },
  'agentic-rag': {
    title: 'Beyond Vector DBs: Implementing Agentic RAG | Jento AI',
    desc: 'Learn how to build "Agentic RAG" systems that don\'t just retrieve data, but reason about it. Advanced techniques for better AI answers.'
  },
  'ai-governance': {
    title: 'Governance Guide for Enterprise AI Agents | Jento AI',
    desc: 'How to control autonomous agents. A framework for permissions, oversight, and kill-switches in enterprise AI deployments.'
  },
  'ai-sdr-guide': {
    title: 'The 2026 Guide to AI SDRs | Jento AI',
    desc: 'How to replace your outbound sales team with autonomous AI SDRs. Tools, strategies, and ethical considerations for automated prospecting.'
  },
  'privacy': {
    title: 'Privacy Policy | Jento AI',
    desc: 'Jento AI Privacy Policy.'
  },
  'terms': {
    title: 'Terms of Service | Jento AI',
    desc: 'Jento AI Terms of Service.'
  },
  'ai-agents-guide': {
    title: 'The Ultimate Guide to AI Agents (2026) | Meaning, Tools, Examples',
    desc: 'What is an AI Agent? The complete guide to autonomous agents, agentic AI, tools (LangGraph, CrewAI), and use cases for business leaders and developers.',
    keywords: 'ai agents, agentic ai, ai agents explained, ai agents examples, ai agents tools, ai agents course'
  },
  'reviews': {
    title: 'Lab-Tested Reviews | Jento AI Award Winners',
    desc: 'Independent, lab-verified product reviews. We test quality, ROI, and durability to find the 1% worth your investment.'
  },
  'ai-receptionist-for-small-business': {
    title: 'AI Receptionist for Small Business | 24/7 Phone Answering Agent',
    desc: 'Jento AI builds AI receptionists for small businesses that answer calls, qualify leads, book appointments, and follow up with customers 24/7.'
  },
  'ai-answering-service': {
    title: 'AI Answering Service | 24/7 Automated Call Handling | Jento AI',
    desc: 'Jento AI provides a custom AI answering service that handles inbound calls, qualifies leads, and books appointments for your business around the clock.'
  },
  'ai-voice-agent': {
    title: 'AI Voice Agent | Custom AI Voice Agent for Business Calls | Jento AI',
    desc: 'Jento AI builds custom AI voice agents that handle inbound and outbound calls, qualify leads, answer questions, and automate your phone-based workflows.'
  },
  'ai-virtual-receptionist': {
    title: 'AI Virtual Receptionist | Never Miss a Business Call | Jento AI',
    desc: 'Jento AI builds AI virtual receptionists that answer every call, greet customers professionally, collect lead details, and route queries — 24/7.'
  },
  'ai-phone-receptionist': {
    title: 'AI Phone Receptionist | Automated Phone Answering Agent | Jento AI',
    desc: 'Jento AI builds AI phone receptionists that automatically answer your business phone, qualify incoming leads, and connect hot prospects to your team.'
  },
  'ai-call-answering-service': {
    title: 'AI Call Answering Service | Never Miss an Inbound Call | Jento AI',
    desc: 'Jento AI provides an AI call answering service that picks up every inbound call, qualifies the caller, books appointments, and syncs to your CRM automatically.'
  },
  'tool/image-alt-text-generator': {
    title: 'Free AI Image Alt Text Generator | SEO & Accessibility Alt Text',
    desc: 'Generate SEO-friendly and accessibility-friendly image alt text with AI. Upload an image, add an optional keyword, and get short, SEO, accessibility, and e-commerce alt text versions.',
    keywords: 'ai image alt text generator, alt text generator, image seo tool, accessibility alt text'
  },
  'tool/voice-to-crm-extractor': {
    title: 'AI Voice to CRM Data Extractor | Automated Lead Entry',
    desc: 'Extract contact details and meeting notes from voice recordings directly into your CRM. Automate data entry for sales and support teams.'
  },
  'tool/voice-resume-builder': {
    title: 'Free AI Voice-to-Resume Builder | Speak Your CV',
    desc: 'Speak your skills or upload an old resume, and our AI will generate a highly professional, beautifully formatted PDF resume in seconds.',
    keywords: 'ai resume builder, voice to resume, generate resume from audio, ai cv maker, free resume builder'
  },
  'tool/website-roaster': {
    title: 'The Brutal AI Website Roaster | Landing Page Feedback',
    desc: 'Enter your website URL and our brutally honest AI will roast your marketing copy, exposing why you aren\'t getting sales, and how to fix it.',
    keywords: 'ai website roaster, landing page feedback ai, roast my website, cro analyzer, ai conversion optimization'
  },
  'tools': {
    title: 'Free AI Tools | Jento AI',
    desc: 'Explore our suite of free AI automation tools including Image Alt Text Generator and Voice-to-CRM Data Extractor.',
    keywords: 'free ai tools, ai image alt text, voice to crm, jento ai tools'
  }
};

const distDir = path.resolve(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('index.html not found in dist. Run build first.');
  process.exit(1);
}

const template = fs.readFileSync(indexPath, 'utf-8');

function injectMeta(html, data, route) {
  let modified = html;
  
  // Create regexes to target the existing tags accurately across multiple lines if needed
  modified = modified.replace(/<title>.*?<\/title>/is, `<title>${data.title}</title>`);
  
  modified = modified.replace(/<meta\s+name="title"\s+content="[^"]*">/is, `<meta name="title" content="${data.title}">`);
  
  modified = modified.replace(/<meta\s+name="description"\s+content="[^"]*">/is, `<meta name="description" content="${data.desc}">`);
  
  modified = modified.replace(/<meta\s+property="og:title"\s+content="[^"]*">/is, `<meta property="og:title" content="${data.title}">`);
  
  modified = modified.replace(/<meta\s+property="og:description"\s+content="[^"]*">/is, `<meta property="og:description" content="${data.desc}">`);
  
  modified = modified.replace(/<meta\s+property="twitter:title"\s+content="[^"]*">/is, `<meta property="twitter:title" content="${data.title}">`);
  
  modified = modified.replace(/<meta\s+property="twitter:description"\s+content="[^"]*">/is, `<meta property="twitter:description" content="${data.desc}">`);
  
  const routeUrl = route === 'home' ? '' : route;
  modified = modified.replace(/<meta\s+property="og:url"\s+content="[^"]*">/is, `<meta property="og:url" content="https://jentoai.com/${routeUrl}">`);
  modified = modified.replace(/<meta\s+property="twitter:url"\s+content="[^"]*">/is, `<meta property="twitter:url" content="https://jentoai.com/${routeUrl}">`);
  
  // Insert canonical link if missing
  if (!modified.includes('rel="canonical"')) {
    modified = modified.replace('</head>', `  <link rel="canonical" href="https://jentoai.com/${routeUrl}">\n</head>`);
  } else {
    modified = modified.replace(/<link\s+rel="canonical"\s+href="[^"]*">/is, `<link rel="canonical" href="https://jentoai.com/${routeUrl}">`);
  }
  
  if (data.keywords) {
    modified = modified.replace(/<meta\s+name="keywords"\s+content="[^"]*">/is, `<meta name="keywords" content="${data.keywords}">`);
  }

  return modified;
}

for (const [route, data] of Object.entries(SEO_DATA)) {
  if (route === 'home') continue;
  
  const routeDir = path.join(distDir, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  
  const routeHtml = injectMeta(template, data, route);
  fs.writeFileSync(path.join(routeDir, 'index.html'), routeHtml);
  console.log(`Generated static route: /${route}`);
}

// Update the root index.html to match home metadata
const homeHtml = injectMeta(template, SEO_DATA['home'], 'home');
fs.writeFileSync(indexPath, homeHtml);
console.log('Updated root index.html');
console.log('Prerendering complete!');
