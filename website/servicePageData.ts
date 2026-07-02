// =========================================================
// SERVICE PAGE DATA — One entry per SEO landing page
// Each page shares the same template component.
// =========================================================

export interface ServicePageData {
  id: string;           // used as the route key, e.g. 'ai-receptionist-for-small-business'
  url: string;          // used for canonical + prerender path
  seoTitle: string;
  seoDesc: string;
  h1: string;
  heroParagraph1: string;
  heroParagraph2: string;
  problemHeading: string;
  problemParagraph1: string;
  problemParagraph2: string;
  // Feature cards
  featureCards: { title: string; text: string; icon: string }[];
  // Industry cards
  industryHeading: string;
  industrySubtext: string;
  industryCards: string[];
  // How it works steps
  steps: { title: string; text: string }[];
  // Benefits bullets
  benefits: string[];
  benefitsParagraph: string;
  // FAQs
  faqs: { q: string; a: string }[];

  // Optional Custom Sections
  whatItHandles?: string[];
  whatItShouldEscalate?: string[];
  integrationList?: string[];
  roiFormula?: { heading: string, text: string, formula: string, cta: string };
  industryExamples?: { title: string; text: string }[];
  stepsHeading?: string;

  // Pricing calculator config
  calcCostPerMin: number;   // AI voice cost per minute (infra)
  calcPhoneMonthly: number; // Phone number monthly cost
  calcAiFeePerMin: number;  // LLM / AI fee per minute
}

const SHARED_FAQS = [
  {
    q: 'Can it book appointments?',
    a: 'Yes. Jento AI can connect your AI agent with your booking process, calendar, CRM, or n8n automation workflow so appointments are captured automatically.',
  },
  {
    q: 'Is this useful for small businesses?',
    a: 'Yes. Small businesses often miss calls when staff are busy. An AI answering agent responds instantly, qualifies the lead, and sends details straight to your team.',
  },
  {
    q: 'Can Jento AI customize the agent for my business?',
    a: 'Yes. We customize the AI agent based on your business type, services, tone, customer questions, and call workflow.',
  },
  {
    q: 'Does it work with n8n automation?',
    a: 'Yes. Jento AI can connect your AI agent with n8n workflows for Google Sheets, Gmail, CRM updates, calendar booking, SMS follow-ups, and more.',
  },
];

const SHARED_STEPS = [
  { title: 'We understand your business', text: 'We review your services, customer questions, booking process, and call handling needs.' },
  { title: 'We build your AI call agent', text: 'Jento AI creates a custom AI agent that speaks according to your business tone and process.' },
  { title: 'We connect your phone system', text: 'Your AI agent is connected with your phone number, CRM, calendar, Google Sheets, or automation workflow.' },
  { title: 'Your AI starts handling calls', text: 'The agent answers calls, collects information, books appointments, and sends details to your team.' },
];

const SHARED_BENEFITS = [
  'Answer calls 24/7',
  'Reduce missed leads',
  'Save staff time',
  'Improve customer experience',
  'Collect customer details automatically',
  'Book more appointments',
  'Connect calls with CRM and automation tools',
  'Handle busy hours and after-hours calls',
];

const SHARED_BENEFIT_PARA =
  'For many small businesses, speed matters. When a customer calls, they want a quick response. An AI agent gives your business a faster and more reliable way to respond, even when your team is busy.';

const SHARED_FEATURES = [
  { title: 'Answer 24/7', text: 'Never miss another call. The AI receptionist answers every incoming call instantly, day or night.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>' },
  { title: 'Book Appointments', text: 'The AI checks your team calendar and automatically schedules appointments while talking to the customer.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>' },
  { title: 'Answer Questions', text: 'Provide instant answers about your business hours, pricing, location, and common services.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>' },
  { title: 'Send Follow-Ups', text: 'After the call, Jento AI can trigger SMS, email, CRM updates, or follow-up workflows using automation.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>' },
];

const SHARED_INDUSTRIES = [
  'Plumbers',
  'Dentists',
  'Salons',
  'Real Estate',
  'Clinics',
  'Home Services',
];

// Shared calculator pricing (user-specified)
const CALC = { calcCostPerMin: 0.008, calcPhoneMonthly: 0.50, calcAiFeePerMin: 0.32 };

// =========================================================
// CUSTOM DATA FOR SMALL BUSINESS PAGE
// =========================================================

const smallBusinessFeatures = [
  { title: 'Answer Calls When You Are Busy', text: 'The AI receptionist answers calls when your staff is unavailable, already speaking with another customer, or working on a job.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>' },
  { title: 'Capture Lead Details', text: 'It collects the caller’s name, phone number, service need, location, urgency, and preferred time.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>' },
  { title: 'Book or Request Appointments', text: 'The agent can help customers request appointments and send the booking information to your calendar, CRM, or team.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>' },
  { title: 'Send Follow-Ups Automatically', text: 'After the call, Jento AI can trigger SMS, email, Google Sheets, CRM updates, or n8n workflows.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>' },
  { title: 'Handle After-Hours Calls', text: 'Your business can keep capturing leads even after closing time, on weekends, or during busy hours.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>' },
  { title: 'Route Urgent Calls', text: 'For urgent requests, the AI can collect key details and notify your team faster.', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>' }
];

const smallBusinessSteps = [
  { title: 'We learn your business', text: 'We review your services, call flow, customer questions, working hours, service areas, and booking process.' },
  { title: 'We design the call script', text: 'We create a custom AI receptionist script that matches your tone, questions, and lead qualification process.' },
  { title: 'We connect your tools', text: 'Your AI receptionist can connect with Google Sheets, CRM, calendar, Gmail, SMS tools, or n8n workflows.' },
  { title: 'We test real call scenarios', text: 'We test common customer calls, urgent calls, missed call cases, and booking requests before going live.' },
  { title: 'You start capturing more calls', text: 'The AI receptionist starts answering calls and sending structured call summaries to your team.' }
];

const smallBusinessFaqs = [
  { q: 'What is an AI receptionist for small business?', a: 'An AI receptionist for small business is a voice agent that answers business calls, talks with customers, collects information, qualifies leads, and helps with appointment requests or call routing.' },
  { q: 'Can an AI receptionist book appointments?', a: 'Yes. Jento AI can connect the AI receptionist with your calendar, booking process, CRM, or n8n automation workflow.' },
  { q: 'Can it answer calls after business hours?', a: 'Yes. The AI receptionist can answer after-hours calls and collect customer information so your team can follow up later.' },
  { q: 'Is an AI receptionist good for plumbers, dentists, and salons?', a: 'Yes. Jento AI can customize the receptionist for different industries, including plumbers, dentists, salons, clinics, real estate, and home service businesses.' },
  { q: 'Can the AI transfer calls to a human?', a: 'Yes. It can be designed to escalate urgent, complex, or high-value calls to your team.' },
  { q: 'Does Jento AI work with n8n?', a: 'Yes. Jento AI can connect calls with n8n workflows for Google Sheets, Gmail, CRM updates, calendar booking, SMS follow-ups, and other automations.' }
];

const smallBusinessIndustryExamples = [
  { title: 'Plumbers', text: 'Collect the customer’s address, plumbing issue, urgency, and preferred appointment time.' },
  { title: 'Dentists', text: 'Help with appointment requests, rescheduling, new patient intake, and basic clinic questions.' },
  { title: 'Salons', text: 'Handle booking requests, service questions, availability questions, and customer details.' },
  { title: 'Clinics', text: 'Collect patient inquiry details and route appointment requests to the right team member.' },
  { title: 'Real Estate', text: 'Qualify buyer or seller leads and collect property details before sending them to the agent.' },
  { title: 'Home Services', text: 'Capture service requests, job location, issue type, and follow-up details.' }
];

// =========================================================
// PAGE DEFINITIONS
// =========================================================

export const SERVICE_PAGES: ServicePageData[] = [
  {
    ...CALC,
    id: 'ai-receptionist-for-small-business',
    url: '/ai-receptionist-for-small-business',
    seoTitle: 'AI Receptionist for Small Business | 24/7 Call Answering Agent',
    seoDesc: 'Jento AI builds AI receptionists for small businesses that answer calls, qualify leads, book appointments, capture customer details, and connect with CRM or n8n workflows.',
    h1: 'AI Receptionist for Small Business',
    heroParagraph1:
      'Jento AI builds custom AI receptionists for small businesses that answer phone calls, collect customer details, qualify leads, and help book appointments — even when your team is busy or closed.',
    heroParagraph2:
      'Small businesses lose opportunities when calls go unanswered. A customer may call once, and if nobody responds, they often contact another company. Jento AI helps solve this with an AI receptionist that answers calls quickly, asks the right questions, and sends the lead details to your team.',
    problemHeading: 'Why Small Businesses Miss Valuable Calls',
    problemParagraph1:
      'Most small business owners are already busy handling jobs, serving customers, managing staff, or running daily operations. Because of that, calls are often missed during work hours, after-hours, weekends, lunch breaks, or while the team is already on another call.',
    problemParagraph2:
      'For service businesses, every missed call can become lost revenue. A new customer may need a plumber, dentist, salon appointment, clinic visit, home service, or consultation right now. If your business does not answer, the customer may move to the next company.',
    featureCards: smallBusinessFeatures,
    whatItHandles: [
      'New customer calls',
      'Appointment requests',
      'Missed call follow-ups',
      'Basic business questions',
      'Service area questions',
      'Pricing estimate requests',
      'Emergency or urgent call detection',
      'Lead qualification',
      'Customer contact collection',
      'Call summaries for your team'
    ],
    whatItShouldEscalate: [
      'Complex complaints',
      'High-value quotes',
      'Sensitive customer issues',
      'Emergency decisions',
      'Custom pricing approval',
      'Calls requiring owner judgment'
    ],
    industryHeading: 'AI Receptionist Examples for Small Businesses',
    industrySubtext: '',
    industryCards: [], // overriding with industryExamples instead
    industryExamples: smallBusinessIndustryExamples,
    stepsHeading: 'How Jento AI Builds Your AI Receptionist',
    steps: smallBusinessSteps,
    roiFormula: {
      heading: 'How Much Can Missed Calls Cost a Small Business?',
      text: 'The value of an AI receptionist depends on your call volume, average lead value, and how many calls you currently miss. If your business gets calls from customers who are ready to book, even a few missed calls per month can become expensive.',
      formula: 'Monthly missed revenue = missed calls × average job value × close rate',
      cta: 'Want to estimate your missed call revenue? Use our ROI calculator or book a free Jento AI demo.'
    },
    integrationList: [
      'Google Sheets',
      'Google Calendar',
      'Gmail',
      'CRM systems',
      'n8n workflows',
      'SMS follow-up tools',
      'Call summaries',
      'Lead pipelines'
    ],
    benefits: [],
    benefitsParagraph: '',
    faqs: smallBusinessFaqs,
  },
  {
    ...CALC,
    id: 'ai-answering-service',
    url: '/ai-answering-service',
    seoTitle: 'AI Answering Service | 24/7 Automated Call Handling | Jento AI',
    seoDesc: 'Jento AI provides a custom AI answering service that handles inbound calls, qualifies leads, and books appointments for your business around the clock.',
    h1: 'AI Answering Service',
    heroParagraph1:
      'Every unanswered call is a potential customer lost. Our AI answering service picks up every call, 24 hours a day, 7 days a week, so your business never misses an opportunity.',
    heroParagraph2:
      'Jento AI builds custom AI answering solutions for businesses of all sizes. Whether you receive 10 or 1,000 calls a day, the system scales instantly with zero extra cost per additional call.',
    problemHeading: 'Why Businesses Need an AI Answering Service',
    problemParagraph1:
      'Traditional answering services are expensive, inconsistent, and limited to business hours. Staff get tired, make mistakes, and can only handle one call at a time.',
    problemParagraph2:
      'An AI answering service eliminates these limitations. It handles unlimited concurrent calls, never takes a sick day, and delivers a consistent, professional experience every single time a customer calls.',
    featureCards: SHARED_FEATURES,
    industryHeading: 'AI Answering Service for Every Industry',
    industrySubtext:
      'Our AI answering service is customized for your exact call flow, script, and business processes.',
    industryCards: SHARED_INDUSTRIES,
    steps: SHARED_STEPS,
    benefits: SHARED_BENEFITS,
    benefitsParagraph: SHARED_BENEFIT_PARA,
    faqs: [
      { q: 'What is an AI answering service?', a: 'An AI answering service is an automated system that handles inbound phone calls for your business using artificial intelligence, natural language processing, and text-to-speech technology.' },
      ...SHARED_FAQS,
    ],
  },
  {
    ...CALC,
    id: 'ai-voice-agent',
    url: '/ai-voice-agent',
    seoTitle: 'AI Voice Agent | Custom AI Voice Agent for Business Calls | Jento AI',
    seoDesc: 'Jento AI builds custom AI voice agents that handle inbound and outbound calls, qualify leads, answer questions, and automate your phone-based workflows.',
    h1: 'AI Voice Agent for Business',
    heroParagraph1:
      'An AI Voice Agent is a fully autonomous AI system that can speak with your customers over the phone in a natural, human-like conversation. It listens, responds, asks questions, and takes action — all in real-time.',
    heroParagraph2:
      'Jento AI designs and deploys custom AI voice agents tailored to your business needs, whether that is lead qualification, appointment booking, customer support, or outbound follow-up campaigns.',
    problemHeading: 'Why Businesses Are Switching to AI Voice Agents',
    problemParagraph1:
      'Human-staffed phone teams are expensive, hard to scale, and inconsistent in quality. Customers increasingly expect instant responses at any hour of the day.',
    problemParagraph2:
      'AI voice agents solve this by providing instant, consistent, and highly scalable phone conversations that integrate directly into your CRM and automation workflows.',
    featureCards: SHARED_FEATURES,
    industryHeading: 'AI Voice Agent Solutions by Industry',
    industrySubtext:
      'Every industry has unique call flows. We build AI voice agents that understand your specific business context and speak your customers\'s language.',
    industryCards: SHARED_INDUSTRIES,
    steps: SHARED_STEPS,
    benefits: SHARED_BENEFITS,
    benefitsParagraph: SHARED_BENEFIT_PARA,
    faqs: [
      { q: 'What is an AI voice agent?', a: 'An AI voice agent is a software system that uses Speech-to-Text, Large Language Models, and Text-to-Speech technology to have real-time phone conversations with customers, indistinguishable from a human operator.' },
      ...SHARED_FAQS,
    ],
  },
  {
    ...CALC,
    id: 'ai-virtual-receptionist',
    url: '/ai-virtual-receptionist',
    seoTitle: 'AI Virtual Receptionist | Never Miss a Business Call | Jento AI',
    seoDesc: 'Jento AI builds AI virtual receptionists that answer every call, greet customers professionally, collect lead details, and route queries — 24/7.',
    h1: 'AI Virtual Receptionist',
    heroParagraph1:
      'An AI virtual receptionist acts as your front desk, available 24 hours a day. It greets callers professionally, collects their information, answers common questions, and helps direct them to the right person or action.',
    heroParagraph2:
      'Unlike traditional virtual receptionist services, our AI virtual receptionist is fully automated, costs a fraction of the price, and can handle unlimited calls simultaneously without any hold times.',
    problemHeading: 'Why Your Business Needs a Virtual AI Receptionist',
    problemParagraph1:
      'Hiring a human receptionist is costly, and outsourcing to a call center is inconsistent. Many businesses lose valuable leads simply because no one answered the phone.',
    problemParagraph2:
      'A Jento AI virtual receptionist solves this by providing a seamless first-point-of-contact experience for every caller, ensuring no lead slips through the cracks.',
    featureCards: SHARED_FEATURES,
    industryHeading: 'AI Virtual Receptionist for Every Business Type',
    industrySubtext:
      'We build the AI receptionist to match your brand voice and handle your specific customer inquiries and booking process.',
    industryCards: SHARED_INDUSTRIES,
    steps: SHARED_STEPS,
    benefits: SHARED_BENEFITS,
    benefitsParagraph: SHARED_BENEFIT_PARA,
    faqs: [
      { q: 'What is an AI virtual receptionist?', a: 'An AI virtual receptionist is an automated phone system powered by AI that can greet callers, answer their questions, collect their details, and escalate to a human agent when needed — all without human intervention.' },
      ...SHARED_FAQS,
    ],
  },
  {
    ...CALC,
    id: 'ai-phone-receptionist',
    url: '/ai-phone-receptionist',
    seoTitle: 'AI Phone Receptionist | Automated Phone Answering Agent | Jento AI',
    seoDesc: 'Jento AI builds AI phone receptionists that automatically answer your business phone, qualify incoming leads, and connect hot prospects to your team.',
    h1: 'AI Phone Receptionist',
    heroParagraph1:
      'Our AI phone receptionist handles your inbound calls automatically. It answers in under a second, introduces itself professionally, and engages the customer in a natural conversation to collect the information your team needs.',
    heroParagraph2:
      'Perfect for any business that relies on phone calls for lead generation, appointment scheduling, or customer service. Jento AI builds a phone receptionist tailored specifically to your call flow.',
    problemHeading: 'The Problem with Manual Phone Answering',
    problemParagraph1:
      'When your team is on another call, in a meeting, or simply off-hours, every missed call is a missed sale. Customers rarely call back — they move on to the next result on Google.',
    problemParagraph2:
      'An AI phone receptionist ensures every call is answered instantly, every time, regardless of your team\'s availability.',
    featureCards: SHARED_FEATURES,
    industryHeading: 'AI Phone Receptionist for Every Industry',
    industrySubtext:
      'From local tradespeople to medical clinics, our AI phone receptionist handles calls based on your exact business needs and customer expectations.',
    industryCards: SHARED_INDUSTRIES,
    steps: SHARED_STEPS,
    benefits: SHARED_BENEFITS,
    benefitsParagraph: SHARED_BENEFIT_PARA,
    faqs: [
      { q: 'What is an AI phone receptionist?', a: 'An AI phone receptionist is an automated voice system that answers your business phone line, engages callers with natural conversation, captures their details, and sends qualified lead information directly to your team.' },
      ...SHARED_FAQS,
    ],
  },
  {
    ...CALC,
    id: 'ai-call-answering-service',
    url: '/ai-call-answering-service',
    seoTitle: 'AI Call Answering Service | Never Miss an Inbound Call | Jento AI',
    seoDesc: 'Jento AI provides an AI call answering service that picks up every inbound call, qualifies the caller, books appointments, and syncs to your CRM automatically.',
    h1: 'AI Call Answering Service',
    heroParagraph1:
      'Our AI call answering service ensures every inbound call to your business is answered within seconds. Using advanced voice AI technology, we build a custom call-handling agent that represents your brand and captures every lead.',
    heroParagraph2:
      'Jento AI integrates the AI call answering service directly into your existing phone number, CRM, and n8n automation workflows — no complex setup required from your side.',
    problemHeading: 'Why Businesses Need an AI Call Answering Service',
    problemParagraph1:
      'Missing calls during peak hours, evenings, or weekends is one of the biggest sources of lost revenue for small and medium businesses.',
    problemParagraph2:
      'A Jento AI call answering service provides instant, consistent call handling and automatically syncs captured data to your business tools.',
    featureCards: SHARED_FEATURES,
    industryHeading: 'AI Call Answering for Every Business',
    industrySubtext:
      'We customize your AI call answering service for your industry\'s call flow, language, and customer expectations.',
    industryCards: SHARED_INDUSTRIES,
    steps: SHARED_STEPS,
    benefits: SHARED_BENEFITS,
    benefitsParagraph: SHARED_BENEFIT_PARA,
    faqs: [
      { q: 'What is an AI call answering service?', a: 'An AI call answering service is a fully automated phone answering system that uses voice AI to handle inbound calls, gather information from callers, and deliver that data to your business team in real time.' },
      ...SHARED_FAQS,
    ],
  },
];

export default SERVICE_PAGES;
