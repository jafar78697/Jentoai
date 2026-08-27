export type Page = 'home' | 'aiagent' | 'services' | 'use-cases' | 'industries' | 'pricing' | 'about' | 'contact' | 'book-call' | 'faq' | 'legal' | 'case-studies' | 'privacy' | 'terms' | 'agentic-strategy' | 'resources' | 'framework-comparison' | 'agentic-rag' | 'ai-governance' | 'ai-sdr-guide' | 'ai-agents-guide' | 'reviews' | 'ai-receptionist' | 'ai-receptionist-for-small-business' | 'ai-answering-service' | 'ai-voice-agent' | 'ai-virtual-receptionist' | 'ai-phone-receptionist' | 'ai-call-answering-service' | 'tool/image-alt-text-generator' | 'tool/voice-to-crm-extractor' | 'tool/voice-resume-builder' | 'tools';

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

export type AltTextMode = 'general' | 'seo' | 'accessibility' | 'ecommerce';

export type AltTextLanguage = 'english' | 'roman_urdu' | 'hindi';

export interface AltTextResult {
  short_alt_text: string;
  seo_alt_text: string;
  accessibility_alt_text: string;
  ecommerce_alt_text: string;
  notes?: string;
}
