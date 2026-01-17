
export type Page = 'home' | 'agents' | 'services' | 'use-cases' | 'industries' | 'pricing' | 'about' | 'contact' | 'book-call' | 'faq' | 'legal' | 'case-studies' | 'privacy' | 'terms' | 'agentic-strategy' | 'resources' | 'framework-comparison' | 'agentic-rag' | 'ai-governance' | 'ai-sdr-guide';

export interface Agent {
  id: string;
  name: string;
  role: string;
  description: string;
  capabilities: string[];
  price: string;
  image: string;
  color: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Testimonial {
  name: string;
  company: string;
  text: string;
  avatar: string;
}

export interface ServiceItem {
  title: string;
  desc: string;
  icon: string;
}
