import React, { useEffect } from 'react';
import { Page } from './types';

interface ResourcesHubProps {
    setPage: (page: Page) => void;
}

const ResourcesHub: React.FC<ResourcesHubProps> = ({ setPage }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const resources = [
        {
            title: 'The Era of Autonomous Revenue',
            subtitle: 'Strategic Framework for Agentic AI',
            description: 'Our flagship whitepaper on dominating the agentic AI landscape. Market analysis, keyword strategy, and implementation roadmap.',
            tag: 'Pillar',
            tagColor: 'blue',
            page: 'agentic-strategy' as Page,
            featured: true
        },
        {
            title: 'LangGraph vs CrewAI vs AutoGen',
            subtitle: '2026 Decision Matrix',
            description: 'Technical comparison of the three leading agentic frameworks. Which one fits your enterprise use case?',
            tag: 'Technical',
            tagColor: 'indigo',
            page: 'framework-comparison' as Page,
            featured: false
        },
        {
            title: 'Beyond Vector DBs: Agentic RAG',
            subtitle: 'Architecture Guide',
            description: 'Standard RAG retrieves. Agentic RAG reasons. Learn the architecture that makes AI answers actually accurate.',
            tag: 'Architecture',
            tagColor: 'cyan',
            page: 'agentic-rag' as Page,
            featured: false
        },
        {
            title: 'The Governance Guide',
            subtitle: 'Enterprise AI Agent Security',
            description: 'Kill switches, audit trails, and the trust framework CTOs need to deploy agents at scale.',
            tag: 'Enterprise',
            tagColor: 'amber',
            page: 'ai-governance' as Page,
            featured: false
        },
        {
            title: 'The 2026 AI SDR Guide',
            subtitle: 'Buyer\'s Comparison',
            description: 'Practical guide to AI Sales Development Representatives. Tools categorized by workflow, not hype.',
            tag: 'Commercial',
            tagColor: 'green',
            page: 'ai-sdr-guide' as Page,
            featured: false
        },
        {
            title: 'The Ultimate Guide to AI Agents',
            subtitle: '2026 Definitive Edition',
            description: 'Everything you need to know. Meaning, examples, tools, and how to start building your own autonomous workforce.',
            tag: 'Guide',
            tagColor: 'purple',
            page: 'ai-agents-guide' as Page,
            featured: false
        }
    ];

    return (
        <section className="py-32 bg-slate-50 min-h-screen">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="mb-16 text-center reveal">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                        Knowledge Base
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
                        Resources
                    </h1>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        Deep-dive guides, technical frameworks, and strategic insights from the Jento AI team.
                    </p>
                </div>

                {/* Featured Article */}
                {resources.filter(r => r.featured).map((resource, i) => (
                    <div
                        key={i}
                        onClick={() => setPage(resource.page)}
                        className="mb-12 p-8 md:p-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] cursor-pointer group hover:scale-[1.01] transition-transform reveal"
                    >
                        <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                            {resource.tag} • Featured
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:underline">{resource.title}</h2>
                        <p className="text-blue-100 text-lg font-medium mb-4">{resource.subtitle}</p>
                        <p className="text-blue-200 max-w-2xl">{resource.description}</p>
                        <div className="mt-6 flex items-center gap-2 text-white font-bold text-sm">
                            Read Article
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>
                ))}

                {/* Article Grid */}
                <div className="grid md:grid-cols-2 gap-6 reveal">
                    {resources.filter(r => !r.featured).map((resource, i) => (
                        <div
                            key={i}
                            onClick={() => setPage(resource.page)}
                            className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm cursor-pointer group hover:shadow-lg hover:border-blue-100 transition-all"
                        >
                            <span className={`inline-block px-3 py-1 bg-${resource.tagColor}-50 text-${resource.tagColor}-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-4`}>
                                {resource.tag}
                            </span>
                            <h3 className="text-xl font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{resource.title}</h3>
                            <p className="text-sm text-slate-400 font-medium mb-3">{resource.subtitle}</p>
                            <p className="text-sm text-slate-600">{resource.description}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center reveal">
                    <p className="text-slate-500 mb-6">Have a specific question not covered here?</p>
                    <button onClick={() => setPage('faq')} className="px-8 py-4 bg-slate-900 text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-colors">
                        Check the FAQ
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ResourcesHub;
