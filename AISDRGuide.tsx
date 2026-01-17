import React, { useEffect } from 'react';
import { Page } from './types';

interface AISDRGuideProps {
    setPage: (page: Page) => void;
}

const AISDRGuide: React.FC<AISDRGuideProps> = ({ setPage }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categories = [
        {
            title: 'Best for Inbound Lead Response',
            description: 'Instantly engage website visitors and form submissions.',
            tools: ['Drift AI', 'Intercom Fin', 'Qualified'],
            keyMetric: 'Speed-to-lead under 60 seconds'
        },
        {
            title: 'Best for Outbound Prospecting',
            description: 'Research, personalize, and send cold outreach at scale.',
            tools: ['11x.ai', 'Artisan', 'Clay + GPT'],
            keyMetric: 'Personalization depth + open rates'
        },
        {
            title: 'Best for LinkedIn Networking',
            description: 'Automate connection requests and follow-up sequences.',
            tools: ['Expandi', 'Dripify', 'PhantomBuster'],
            keyMetric: 'Connection acceptance rate'
        },
        {
            title: 'Best for Email Sequences',
            description: 'Multi-touch email campaigns with dynamic personalization.',
            tools: ['Instantly.ai', 'Smartlead', 'Apollo.io'],
            keyMetric: 'Reply rate + meeting book rate'
        }
    ];

    return (
        <section className="py-32 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <div className="mb-16 reveal">
                    <button onClick={() => setPage('resources')} className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-6 hover:underline">
                        ← Back to Resources
                    </button>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                        Buyer's Guide
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                        The 2026 Guide to AI SDRs
                    </h1>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed">
                        A practical buyer's guide to AI Sales Development Representatives. Which tool fits your workflow, budget, and sales motion?
                    </p>
                </div>

                {/* Intro */}
                <div className="prose prose-lg prose-slate max-w-none reveal">
                    <h2 className="text-2xl font-black text-slate-900 mt-12 mb-4">The Rise of the AI SDR</h2>
                    <p>
                        The concept of the AI SDR has moved from theory to a tangible software category. These autonomous agents can research prospects, craft personalized outreach, and book meetings—all without human intervention.
                    </p>
                    <p>
                        But here's the truth: <strong>the market is crowded and confusing.</strong> Every tool claims to "10x your pipeline." This guide cuts through the noise by categorizing tools by workflow, not hype.
                    </p>

                    <div className="p-6 bg-amber-50 border border-amber-100 rounded-2xl my-8 not-prose">
                        <h4 className="text-sm font-black text-amber-600 uppercase tracking-widest mb-2">The Anti-Spam Imperative</h4>
                        <p className="text-amber-800 text-sm font-medium">
                            Users are skeptical of "spammy" automation. The best AI SDRs prioritize context and relevance over volume. If your tool sends generic "Just bumping this" emails, you're damaging your brand.
                        </p>
                    </div>
                </div>

                {/* Categories */}
                <div className="space-y-8 my-12 reveal">
                    {categories.map((cat, i) => (
                        <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                            <h3 className="text-xl font-black text-slate-900 mb-2">{cat.title}</h3>
                            <p className="text-slate-600 mb-4">{cat.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {cat.tools.map((tool, j) => (
                                    <span key={j} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                            <div className="p-3 bg-slate-50 rounded-lg">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Key Metric to Track</p>
                                <p className="text-sm text-slate-700 font-medium">{cat.keyMetric}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* The Death of "Just Bumping This" */}
                <div className="prose prose-lg prose-slate max-w-none reveal">
                    <h2 className="text-2xl font-black text-slate-900 mt-12 mb-4">The Death of "Just Bumping This"</h2>
                    <p>
                        Standard automation sends a generic follow-up after 3 days. <strong>Agentic automation is different.</strong> It checks the prospect's recent activity—a new LinkedIn post, company news, a job change—and generates a follow-up that references that specific event.
                    </p>
                    <p>
                        This is "Contextual Automation"—adding value at every touchpoint, not just adding noise. The result: higher reply rates, better brand perception, and fewer unsubscribes.
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">What to Look For</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Real-time data enrichment:</strong> Can the tool pull fresh data about your prospects?</li>
                        <li><strong>Multi-channel orchestration:</strong> Email + LinkedIn + calls in one workflow?</li>
                        <li><strong>Human-in-the-loop options:</strong> Can you approve messages before sending?</li>
                        <li><strong>Deliverability infrastructure:</strong> Warm-up, rotation, reputation management?</li>
                        <li><strong>CRM integration:</strong> Syncs with HubSpot, Salesforce, Pipedrive?</li>
                    </ul>

                    <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl my-8 not-prose">
                        <h4 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-2">Jento AI Approach</h4>
                        <p className="text-blue-800 text-sm font-medium">
                            We build custom AI SDR workflows using n8n that integrate with your existing stack. No black-box SaaS—full transparency, full control, and agents tailored to your ICP.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center reveal">
                    <p className="text-slate-500 mb-6">Ready to deploy your own AI SDR without the spam?</p>
                    <button onClick={() => setPage('book-call')} className="px-8 py-4 bg-blue-600 text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                        Build Your Custom AI SDR
                    </button>
                </div>

            </div>
        </section>
    );
};

export default AISDRGuide;
