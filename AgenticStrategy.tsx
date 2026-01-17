import React, { useEffect } from 'react';
import { Page } from './types';

interface AgenticStrategyProps {
    setPage: (page: Page) => void;
}

const AgenticStrategy: React.FC<AgenticStrategyProps> = ({ setPage }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="py-32 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <div className="mb-16 reveal">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                        Strategic Framework 2026
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
                        The Era of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Autonomous Revenue.</span>
                    </h1>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed border-l-4 border-blue-600 pl-6">
                        A Strategic Framework for Dominating the Agentic AI Landscape.
                    </p>
                </div>

                {/* Content Body */}
                <div className="prose prose-lg prose-slate max-w-none reveal">

                    {/* Part I */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-6">Part I: The Macro-Evolution from Generative to Agentic Intelligence</h2>
                        <p>
                            The digital economy is currently navigating a profound inflection point, transitioning from the era of Generative AI—characterized by the creation of content—to the era of Agentic AI, defined by the execution of autonomous actions. For a brand like Antigravity, seeking to establish market dominance, this shift represents a distinct opportunity to capture topical authority before the market fully consolidates.
                        </p>
                        <p>
                            The analysis of search trends and industry forecasts for the 2025–2026 horizon indicates that the discourse is moving rapidly beyond the capabilities of Large Language Models (LLMs) as passive chatbots and toward "Agentic AI" systems capable of reasoning, planning, and executing complex workflows without constant human oversight. This evolution is not merely technological but semantic, fundamentally altering the search intent behind core keywords such as "automation," "workflows," and "lead generation."
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">The "Year of the Agent" and Market Realities</h3>
                        <p>
                            Industry experts and analysts have coalesced around the narrative that 2025 is the "year of the AI agent," a sentiment echoed across major tech publications and strategic reports. While 2024 was defined by the widespread adoption of copilots—tools designed to assist human workers—the emerging paradigm focuses on agents that operate independently to achieve goal-oriented outcomes.
                        </p>
                        <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl my-8">
                            <h4 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-2">Market Insight</h4>
                            <p className="text-slate-600 text-sm font-medium mb-0">
                                McKinsey’s analysis highlights that while 23% of organizations report scaling agentic AI systems, the majority remain in the experimental phase. Gartner predicts a high failure rate for agentic AI projects—upwards of 40% by 2027—due to the complexity of deploying these systems at scale.
                            </p>
                        </div>
                        <p>
                            This disconnect presents a strategic opening for Antigravity. The market is saturated with high-level hype but starved for pragmatic, robust implementation guidance. By positioning Antigravity not just as a proponent of AI agents but as a sophisticated guide through the complexities of their implementation, the brand can leverage the keyword "agentic AI" to attract a demographic of technical decision-makers and frustrated implementers.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Defining the Agentic Workflow</h3>
                        <p>
                            The term "workflow" is undergoing a semantic redefinition. In the context of traditional business process automation (BPA), a workflow was a static, linear sequence of rules—if X happens, do Y. In the agentic era, "workflows" refers to dynamic, iterative processes where AI agents perceive their environment, reason about the best course of action, and utilize tools to achieve an objective.
                        </p>
                        <p>
                            This distinction is critical for ranking strategy. Users searching for "agentic workflows" are looking for information on orchestration, loops, and multi-agent collaboration, rather than simple trigger-action automation.
                        </p>
                    </div>

                    {/* Part II */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-6">Part II: Semantic Analysis and Keyword Ecosystem</h2>
                        <p>To dominate the search landscape, Antigravity must adopt a multi-layered keyword strategy that addresses the distinct intents of different user personas.</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                                <h4 className="font-black text-slate-900 mb-2">Cluster A: Builder</h4>
                                <p className="text-xs font-bold text-slate-400 uppercase mb-4">Implementation & Architecture</p>
                                <p className="text-sm text-slate-600">Targets CTOs & Developers. Focus on "LangGraph vs CrewAI", "Agentic RAG", "Enterprise Workflows".</p>
                            </div>
                            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                                <h4 className="font-black text-slate-900 mb-2">Cluster B: Strategist</h4>
                                <p className="text-xs font-bold text-slate-400 uppercase mb-4">ROI & Outcomes</p>
                                <p className="text-sm text-slate-600">Targets VPs of Sales. Focus on "Lead Generation", "AI SDR", "Autonomous Growth".</p>
                            </div>
                            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                                <h4 className="font-black text-slate-900 mb-2">Cluster C: SEO</h4>
                                <p className="text-xs font-bold text-slate-400 uppercase mb-4">Topical Meta-Strategy</p>
                                <p className="text-sm text-slate-600">Targets Marketers. Focus on "Agentic SEO", "GEO", "Visual Search ranking".</p>
                            </div>
                        </div>
                    </div>

                    {/* Part III */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-6">Part III: The "Builder" Strategy – Dominating Technical Authority</h2>
                        <p>
                            To rank for "AI agents" and "workflows" among a technical audience, Antigravity must become a repository of high-utility implementation knowledge.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Framework Wars: LangGraph vs. CrewAI vs. AutoGen</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>LangGraph:</strong> Best for deterministic, compliance-heavy environments where auditability is key. Ideal for control-freak developers.</li>
                            <li><strong>CrewAI:</strong> The "role-playing" framework. Best for creative, collaborative tasks where agents need specific personas.</li>
                            <li><strong>AutoGen:</strong> Microsoft’s framework for conversational flows, excelling in complex multi-turn problem solving.</li>
                        </ul>
                        <p className="mt-4">
                            <span className="font-bold text-blue-600">Strategy:</span> Create a "Decision Matrix" resource titled "Choosing Your Agentic Framework in 2026."
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">The Rise of Agentic RAG</h3>
                        <p>
                            "Agentic RAG" represents the intersection of data retrieval and agentic reasoning. Content tactic: Publish "Beyond Vector DBs: Implementing Agentic RAG for Smarter Search," detailing architectures with Meta-Agents and Evaluators.
                        </p>
                    </div>

                    {/* Part IV */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-6">Part IV: The "Buyer" Strategy – Automating Revenue</h2>
                        <p>While technical strategy builds authority, commercial strategy drives revenue. Key focus: <strong>The AI SDR Revolution.</strong></p>
                        <p>
                            The keyword "AI SDR" is exploding. The market demands autonomous agents that work 24/7. Antigravity should categorize tools by workflow (Inbound vs Outbound) rather than generic lists.
                        </p>
                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Solving the "Follow-Up" Paradox</h3>
                        <p>
                            Antigravity champions "Contextual Automation"—moving beyond "Just bumping this" emails to agentic follow-ups that reference specific prospect activities, adding value at every touchpoint.
                        </p>
                    </div>

                    {/* Part V */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-6">Part V: Agentic SEO – The Technical Implementation Strategy</h2>
                        <p>To rank effectively, the website itself is optimized for the age of AI.</p>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">The "Hub and Spoke" Model</h3>
                        <p>
                            We organize content into "Topical Clusters" with comprehensive Pillar Pages covering "Agentic AI" exhaustively, supported by 8-12 cluster articles.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">The llms.txt Standard</h3>
                        <p>
                            We have implemented an <code className="text-blue-600 bg-blue-50 px-1 py-0.5 rounded">llms.txt</code> file in our root directory. This acts as a curated index for AI crawlers (GPTBot, ClaudeBot), reducing friction for agents consuming our content and increasing citation probability in generative answers.
                        </p>
                    </div>

                    {/* Part VI */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-6">Part VI: Governance and Trust</h2>
                        <p>
                            As companies scale, fear of "agent sprawl" grows. We differentiate by ranking for "Safe AI" and "AI Governance," offering guides on guardrails, monitoring, and "kill switches" for enterprise agents.
                        </p>
                    </div>

                    {/* Conclusion */}
                    <div className="p-8 bg-blue-600 rounded-[2rem] text-white my-12 not-prose">
                        <h3 className="text-2xl font-black uppercase tracking-tight mb-4">The Era of "Delegating" Has Begun.</h3>
                        <p className="text-blue-100 font-medium mb-8">
                            The trajectory for 2026 is clear: agentic workflows will become the standard for high-performance businesses. The era of "chatting" with AI is ending; the era of "delegating" to AI has begun.
                        </p>
                        <button onClick={() => setPage('book-call')} className="px-8 py-4 bg-white text-blue-600 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-blue-50 transition-colors">
                            Build Your Strategy
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AgenticStrategy;
