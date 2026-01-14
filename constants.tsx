
import { Agent, PricingPlan, Testimonial, ServiceItem } from './types';

export const AGENTS: Agent[] = [
  {
    id: 'sales-agent',
    name: 'Apollo',
    role: 'Autonomous Sales Architect',
    description: 'Apollo is a high-performance prospecting engine built on n8n architecture. It identifies high-intent leads across LinkedIn and Apollo.io, crafts hyper-personalized outreach using advanced Gemini models, and autonomously manages the initial sales conversation to book qualified meetings. Personality: Assertive, Professional, Data-Driven.',
    capabilities: [
      'Multi-channel Prospecting (Email/LinkedIn)',
      'High-Intent Lead Scraping & Verification',
      'Autonomous Appointment Setting & Scheduling',
      'Smart CRM Sync (HubSpot/Salesforce/Pipedrive)',
      'AI-Powered Automated Follow-up Sequences'
    ],
    price: 'From $299/mo',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    color: 'blue'
  },
  {
    id: 'support-agent',
    name: 'Aura',
    role: 'Technical CX Specialist',
    description: 'Aura provides enterprise-grade customer support automation by indexing your entire documentation and historical support tickets into a robust vector database. It resolves complex technical inquiries instantly with human-like reasoning, handling 70% of routine tickets autonomously. Personality: Empathetic, Concise, Highly-Knowledgeable.',
    capabilities: [
      'Zero-Latency FAQ & Support Resolution',
      'Technical Documentation Parsing (Vector Stores)',
      'Multilingual Global Support (50+ Languages)',
      'Ticketing Automation (Zendesk/Intercom/Salesforce)',
      'AI Voice-to-Text & Sentiment Analysis'
    ],
    price: 'From $199/mo',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    color: 'indigo'
  },
  {
    id: 'data-agent',
    name: 'Vantage',
    role: 'Operational Logistics Node',
    description: 'Vantage is designed for high-volume data orchestration. It extracts structured data from messy PDFs, emails, and invoices, then autonomously updates your internal systems. It replaces the need for manual data entry staff, performing with 100% accuracy. Personality: Systematic, Invisible, Precision-Oriented.',
    capabilities: [
      'Intelligent Document OCR',
      'Automated Invoice Processing',
      'Cross-Platform Data Syncing',
      'Real-time Dashboard Updates',
      'Legacy System Bridging'
    ],
    price: 'From $249/mo',
    image: 'https://images.unsplash.com/photo-1551288049-bbda48658a7d?auto=format&fit=crop&q=80&w=800',
    color: 'sky'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'n8n Workflow Architecture',
    desc: 'Expert-led n8n consulting and development. We build transparent, visual automation flows that connect your local and cloud tech stack. No vendor lock-in—you own the logic and the assets.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'Custom AI Agent Development',
    desc: 'Bespoke autonomous agents built with Gemini and high-performance vector stores. We create custom business brains for lead generation, customer care, and data analysis.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z'
  },
  {
    title: 'Enterprise Automation Strategy',
    desc: 'Strategic digital transformation for businesses looking to scale. We identify operational bottlenecks and replace them with high-speed, self-correcting AI automation nodes.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
  },
  {
    title: 'Autonomous Lead Generation',
    desc: 'High-conversion sales systems that autonomously source, verify, and pitch prospects. Integrate AI into your outbound sales for explosive growth.',
    icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'
  }
];

export const PRICING: PricingPlan[] = [
  {
    name: 'Starter Node',
    price: '$200 - $500',
    period: 'one-time build',
    features: [
      'Single Workflow Automation',
      'Basic API Integrations',
      'n8n Logic Configuration',
      'Estimated Build: 1-3 Days',
      'Architecture Blueprint included'
    ],
  },
  {
    name: 'Advanced Protocol',
    price: '$600 - $1,500',
    period: 'one-time build',
    features: [
      'Complex Multi-Tool Workflows',
      'Advanced AI/LLM Integration',
      'Dynamic Branching & Error Handling',
      'Estimated Build: 4-10 Days',
      'Priority Delivery',
      'Scalable System Architecture'
    ],
    recommended: true
  },
  {
    name: 'Enterprise Architecture',
    price: 'Bespoke',
    period: 'project based',
    features: [
      'Unlimited Workflow Sequences',
      'Private Infrastructure Setup',
      'Custom Database Connectivity',
      'High-Volume Data Orchestration',
      'Dedicated Architect Review',
      'Complex Legacy Transformations'
    ],
  }
];

export const INDUSTRIES = [
  {
    name: 'Real Estate',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    desc: 'Automate buyer qualification, book viewings via WhatsApp/n8n, and synchronize listing data across major property portals and internal CRM systems for 40 hours of saved manual work monthly.'
  },
  {
    name: 'E-commerce',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
    desc: 'Scale online sales with AI-powered cart recovery, localized customer support automation, and real-time inventory-to-logistics syncing for seamless fulfillment.'
  },
  {
    name: 'HR & Recruiting',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    desc: 'Source top talent autonomously on LinkedIn, parse resumes for key skills, and automate interview scheduling to reduce time-to-hire by up to 60%.'
  },
  {
    name: 'Logistics & Supply Chain',
    icon: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8h4.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-3-1a1 1 0 01-1 1H15',
    desc: 'Gain 24/7 visibility with real-time inventory tracking and intelligent vendor re-ordering driven by predictive demand analytics.'
  },
  {
    name: 'SaaS & Tech',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    desc: 'Drive retention with autonomous user onboarding, churn risk signaling, and technical support automation via Discord, Slack, and Zendesk.'
  },
  {
    name: 'Agencies',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    desc: 'Exponentially scale outbound lead generation for clients while automating complex performance reporting and cross-platform data aggregation.'
  }
];

export const CONFIG = {
  chatWebhookUrl: import.meta.env.VITE_CHAT_WEBHOOK_URL || 'https://n8n.jentoaiautomation.online/webhook/a3b709ac-031d-423c-96a1-55cf1facf012/chat',
  bookingWebhookUrl: import.meta.env.VITE_BOOKING_WEBHOOK_URL || 'https://script.google.com/macros/s/AKfycbzZeOEK1XReZCR5tldY8PzMqH7hYSP74w0Lun6_slbAFu-ukD4rjHdMoeKnuYM1DGc/exec'
};
