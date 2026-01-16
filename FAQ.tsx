
import React from 'react';
import { Page } from './types';

interface FAQPageProps {
    setPage: (page: Page) => void;
}

const FAQPage: React.FC<FAQPageProps> = ({ setPage }) => {
    const faqs = [
        {
            question: 'What is business process automation?',
            answer: 'Business process automation (BPA) uses technology to automate repetitive tasks and workflows. Instead of manually entering data, sending emails, or updating spreadsheets, AI agents and workflow tools like n8n can handle these tasks 24/7 with perfect accuracy.'
        },
        {
            question: 'Do I need technical skills to manage Jento Agents?',
            answer: 'Not at all. We build "Black Box" solutions. You simply interact with the agent via chat or a simple dashboard. We handle all the API connections, hosting, and maintenance. It is like hiring a highly skilled employee who needs zero supervision.'
        },
        {
            question: 'Will AI replace my current team?',
            answer: 'No. Jento Agents are designed to remove "grunt work"—data entry, scheduling, lead filtering—so your human team can focus on strategy, creative work, and closing deals. Our clients typically see their team happiness increase because burnout tasks are eliminated.'
        },
        {
            question: 'Does this work with my legacy/old software?',
            answer: 'Yes. n8n is extremely flexible. If your software has an API, we connect directly. If not, we can build custom scrapers or database connectors. We act as the universal bridge between your modern tools (Slack, HubSpot) and your legacy systems.'
        },
        {
            question: 'How do AI agents reduce manual work?',
            answer: 'AI agents work autonomously to complete tasks that would normally require human intervention. They can read emails, extract data, make decisions based on rules, and take actions across multiple systems. A single agent can replace 35+ hours of manual work per week.'
        },
        {
            question: 'Is n8n better than Zapier for automation?',
            answer: 'n8n is often preferred for complex business automation because it offers self-hosting (data stays on your servers), unlimited workflow executions, and advanced logic capabilities. Zapier is simpler for basic automations but becomes expensive at scale.'
        },
        {
            question: 'How much does AI automation cost and what is the ROI?',
            answer: 'Our Starter workflows begin at $497 as a one-time setup fee. The ROI is usually measured in weeks. If an agent saves you 10 hours a week, and your time is worth $50/hr, the system pays for itself in just one month. After that, it is pure profit.'
        },
        {
            question: 'Can AI agents handle customer support?',
            answer: 'Yes! Modern AI agents can handle 70%+ of customer support tickets autonomously. They use your knowledge base to answer questions accurately, escalating complex issues to humans. Response times drop from hours to seconds.'
        },
        {
            question: 'What industries benefit most from AI automation?',
            answer: 'Any industry with repetitive data tasks benefits: Real Estate (lead qualification), Finance (invoice processing), HR (resume screening), SaaS (customer onboarding), Agencies (lead generation), and E-commerce (order management).'
        },
        {
            question: 'How long does it take to build an automation?',
            answer: 'Simple workflows take 1-3 days. Complex enterprise integrations typically require 2-4 weeks. We start with a discovery call to map your processes, then build, test, and deploy the automation.'
        },
        {
            question: 'Is my data secure with AI automation?',
            answer: 'Absolutely. We use "Siloed Architecture" where your data never leaves your private cloud instance. We self-host n8n on your infrastructure, ensuring complete data sovereignty. Your data is never used to train external AI models.'
        }
    ];

    return (
        <section className="py-16 md:py-32 bg-slate-50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12 md:mb-20 reveal">
                    <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Knowledge Base</p>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-6 leading-none">
                        Frequently Asked <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Questions.</span>
                    </h1>
                    <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
                        Everything you need to know about AI automation, n8n workflows, and how Jento AI can transform your business operations.
                    </p>
                </div>

                {/* Visual Transformation Section */}
                <div className="reveal mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* The Old Way */}
                    <div className="p-8 bg-red-50 rounded-[2.5rem] border border-red-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-red-900">OLD</div>
                        <h3 className="text-red-900 text-lg font-black uppercase tracking-tight mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span>
                            The Manual Process
                        </h3>
                        <ul className="space-y-4 relative z-10">
                            <li className="flex items-start gap-4 text-red-800 font-medium text-sm">
                                <span className="w-6 h-6 rounded-full bg-white border border-red-200 flex items-center justify-center shrink-0">1</span>
                                <span>Human opens 5+ tabs (Email, CRM, Sheets)</span>
                            </li>
                            <li className="flex items-start gap-4 text-red-800 font-medium text-sm">
                                <span className="w-6 h-6 rounded-full bg-white border border-red-200 flex items-center justify-center shrink-0">2</span>
                                <span>Manually copies & pastes data (Error prone)</span>
                            </li>
                            <li className="flex items-start gap-4 text-red-800 font-medium text-sm">
                                <span className="w-6 h-6 rounded-full bg-white border border-red-200 flex items-center justify-center shrink-0">3</span>
                                <span>Forgets follow-up 2 days later</span>
                            </li>
                            <li className="flex items-start gap-4 text-red-800 font-medium text-sm">
                                <span className="w-6 h-6 rounded-full bg-white border border-red-200 flex items-center justify-center shrink-0">4</span>
                                <span>Cost: $30/hr + Burnout</span>
                            </li>
                        </ul>
                    </div>

                    {/* The Jento Way */}
                    <div className="p-8 bg-blue-600 rounded-[2.5rem] border border-blue-500 relative overflow-hidden text-white shadow-xl shadow-blue-900/20">
                        <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-white">NEW</div>
                        <h3 className="text-white text-lg font-black uppercase tracking-tight mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            The Jento Autonomous Way
                        </h3>
                        <ul className="space-y-4 relative z-10">
                            <li className="flex items-start gap-4 font-medium text-sm">
                                <span className="w-6 h-6 rounded-full bg-blue-500 border border-blue-400 flex items-center justify-center shrink-0">1</span>
                                <span>Agent listens to Webhook/Trigger (Instant)</span>
                            </li>
                            <li className="flex items-start gap-4 font-medium text-sm">
                                <span className="w-6 h-6 rounded-full bg-blue-500 border border-blue-400 flex items-center justify-center shrink-0">2</span>
                                <span>Processes data via LLM reasoning</span>
                            </li>
                            <li className="flex items-start gap-4 font-medium text-sm">
                                <span className="w-6 h-6 rounded-full bg-blue-500 border border-blue-400 flex items-center justify-center shrink-0">3</span>
                                <span>Updates CRM & Sends Intro autonomously</span>
                            </li>
                            <li className="flex items-start gap-4 font-medium text-sm">
                                <span className="w-6 h-6 rounded-full bg-blue-500 border border-blue-400 flex items-center justify-center shrink-0">4</span>
                                <span>Cost: $0.05/run + Perfect Consistency</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="reveal mb-32">
                    <div className="text-center mb-16">
                        <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">What We Build</p>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">The Automation <span className="text-blue-600">Capability Matrix.</span></h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">We don't just "do AI". We build specific, powerful tools that solve exact business problems. Here is what we can build for you:</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { cat: "Growth Engine", tools: ["LinkedIn Lead Scraper", "Cold Email Sentient Bot", "CRM Data Enricher", "Meeting Scheduler Agent"] },
                            { cat: "Operations", tools: ["Invoice PDF Parser", "Contract Legal Analyzer", "Inventory Sync Bot", "Employee Onboarding Agent"] },
                            { cat: "Support", tools: ["24/7 WhatsApp Concierge", "Ticket Triage & Routing", "Refund Processing Node", "Multilingual Chatbot"] },
                            { cat: "Marketing", tools: ["SEO Content Generator", "Social Media Scheduler", "Ad Performance Analyst", "Competitor Price Tracker"] },
                            { cat: "Data & Analytics", tools: ["Weekly KPI Reporter", "Customer Churn Predictor", "Market Trend Scanner", "Sentiment Analysis Node"] },
                            { cat: "Custom Logic", tools: ["Legacy System Bridge", "API-to-API Connector", "Custom Database Sync", "Compliance Audit Bot"] }
                        ].map((sector, i) => (
                            <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors">
                                <h3 className="text-blue-600 font-black uppercase tracking-widest text-xs mb-6">{sector.cat}</h3>
                                <ul className="space-y-3">
                                    {sector.tools.map((tool, j) => (
                                        <li key={j} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                            <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                            {tool}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-8 mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Deep Dive <span className="text-slate-400">Q&A.</span></h2>
                    </div>
                    {faqs.map((faq, i) => (
                        <div key={i} className="reveal p-8 md:p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500">
                            <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-6">{faq.question}</h2>
                            <div className="prose prose-slate max-w-none">
                                <p className="text-slate-600 font-medium leading-relaxed text-lg">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Collaboration Process */}
                <div className="reveal mb-32 bg-slate-950 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>

                    <div className="relative z-10">
                        <div className="text-center mb-20">
                            <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6">The Process</p>
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8">How We Build <span className="text-blue-500">Together.</span></h2>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto">We don't send you a manual. We partner with you to build the exact custom tool your business needs to scale.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                            {/* Connector Line */}
                            <div className="hidden md:block absolute top-[24px] left-[16%] right-[16%] h-0.5 bg-slate-800 -z-10"></div>

                            {[
                                { step: "01", title: "Discovery", desc: "You tell us the bottleneck. We map the logic." },
                                { step: "02", title: "Construction", desc: "We build the n8n workflows & test rigorously." },
                                { step: "03", title: "Handover", desc: "We deploy the 'Black Box' & give you the keys." }
                            ].map((s, i) => (
                                <div key={i} className="text-center group">
                                    <div className="w-12 h-12 mx-auto bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center text-blue-500 font-black mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300 shadow-xl shadow-black/50 relative z-10">
                                        {s.step}
                                    </div>
                                    <h3 className="text-xl font-black uppercase tracking-wide mb-4">{s.title}</h3>
                                    <p className="text-slate-400 font-medium leading-relaxed max-w-xs mx-auto">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="reveal text-center p-8 md:p-12 bg-blue-600 rounded-[2rem] text-white">
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">Still Have Questions?</h3>
                    <p className="text-blue-100 font-medium mb-8 max-w-lg mx-auto">
                        Book a free strategy call with our automation architects. We'll analyze your workflows and show you exactly where AI can save you time.
                    </p>
                    <button
                        onClick={() => setPage('book-call')}
                        className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-slate-100 transition-all shadow-xl"
                    >
                        Book Free Strategy Call
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQPage;
