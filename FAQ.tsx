
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

                <div className="space-y-6 mb-16">
                    {faqs.map((faq, i) => (
                        <div key={i} className="reveal p-6 md:p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm">
                            <h2 className="text-lg md:text-xl font-black text-slate-900 mb-4">{faq.question}</h2>
                            <p className="text-slate-600 font-medium leading-relaxed">{faq.answer}</p>
                        </div>
                    ))}
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
