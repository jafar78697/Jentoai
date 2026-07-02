import React, { useEffect } from 'react';
import { Page } from './types';

interface AIGovernanceProps {
    setPage: (page: Page) => void;
}

const AIGovernance: React.FC<AIGovernanceProps> = ({ setPage }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const guardrails = [
        {
            icon: '🛑',
            title: 'Kill Switches',
            description: 'Immediate halt mechanisms that can stop agent execution at any point in the workflow.',
            implementation: 'Implement timeout limits, budget caps, and manual override triggers accessible via dashboard.'
        },
        {
            icon: '👁️',
            title: 'Decision Logging',
            description: 'Complete audit trail of every decision an agent makes, with reasoning traces.',
            implementation: 'Store all LLM prompts, responses, and tool calls in immutable logs with timestamps.'
        },
        {
            icon: '🔒',
            title: 'Scope Boundaries',
            description: 'Define exactly what tools and data each agent can access—principle of least privilege.',
            implementation: 'Use role-based access control (RBAC) at the agent level with explicit permission grants.'
        },
        {
            icon: '👤',
            title: 'Human-in-the-Loop (HITL)',
            description: 'Critical decisions require human approval before execution.',
            implementation: 'Configure approval workflows for high-stakes actions (financial transactions, data deletion).'
        },
        {
            icon: '📊',
            title: 'Drift Monitoring',
            description: 'Detect when agent behavior deviates from expected patterns.',
            implementation: 'Set up anomaly detection on agent outputs, costs, and execution times.'
        },
        {
            icon: '🧪',
            title: 'Sandboxing',
            description: 'Test agents in isolated environments before production deployment.',
            implementation: 'Use staging environments with synthetic data that mirror production structure.'
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                        Enterprise Guide
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                        The Governance Guide for Enterprise AI Agents
                    </h1>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed">
                        How to deploy autonomous agents at scale without losing sleep. Guardrails, monitoring, and the trust framework CTOs need.
                    </p>
                </div>

                {/* Problem Statement */}
                <div className="prose prose-lg prose-slate max-w-none reveal">
                    <h2 className="text-2xl font-black text-slate-900 mt-12 mb-4">The "Agent Sprawl" Problem</h2>
                    <p>
                        As organizations move from experimentation to scale, a new challenge emerges: <strong>agent sprawl</strong>. Without governance, you end up with dozens of autonomous agents operating across departments, each with different access levels, logging standards, and failure modes.
                    </p>

                    <div className="p-6 bg-red-50 border border-red-100 rounded-2xl my-8 not-prose">
                        <h4 className="text-sm font-black text-red-600 uppercase tracking-widest mb-2">The Risk</h4>
                        <p className="text-red-800 text-sm font-medium">
                            Gartner predicts that 40% of agentic AI projects will fail by 2027 due to inadequate governance frameworks. The complexity isn't building agents—it's trusting them at scale.
                        </p>
                    </div>

                    <h2 className="text-2xl font-black text-slate-900 mt-12 mb-4">The Six Pillars of Agent Governance</h2>
                </div>

                {/* Guardrails Grid */}
                <div className="grid md:grid-cols-2 gap-6 my-12 reveal">
                    {guardrails.map((g, i) => (
                        <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-3xl mb-4">{g.icon}</div>
                            <h3 className="text-lg font-black text-slate-900 mb-2">{g.title}</h3>
                            <p className="text-sm text-slate-600 mb-4">{g.description}</p>
                            <div className="p-3 bg-slate-50 rounded-lg">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Implementation</p>
                                <p className="text-xs text-slate-700">{g.implementation}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Framework */}
                <div className="prose prose-lg prose-slate max-w-none reveal">
                    <h2 className="text-2xl font-black text-slate-900 mt-12 mb-4">Building Trust Incrementally</h2>
                    <p>
                        Don't deploy fully autonomous agents on day one. Use a graduated trust model:
                    </p>
                    <ol className="list-decimal pl-5 space-y-3">
                        <li><strong>Level 1 - Observe:</strong> Agent suggests actions, humans execute.</li>
                        <li><strong>Level 2 - Assist:</strong> Agent executes low-risk actions, reports results.</li>
                        <li><strong>Level 3 - Automate:</strong> Agent handles routine tasks independently.</li>
                        <li><strong>Level 4 - Orchestrate:</strong> Agent coordinates other agents with human oversight.</li>
                        <li><strong>Level 5 - Autonomous:</strong> Full autonomy within defined boundaries.</li>
                    </ol>

                    <div className="p-6 bg-green-50 border border-green-100 rounded-2xl my-8 not-prose">
                        <h4 className="text-sm font-black text-green-600 uppercase tracking-widest mb-2">The Goal</h4>
                        <p className="text-green-800 text-sm font-medium">
                            Move from "Can we build it?" to "Can we trust it?"—a much more valuable commercial position that resonates with CIOs and risk-conscious decision makers.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center reveal">
                    <p className="text-slate-500 mb-6">Need help building a governance framework for your AI agents?</p>
                    <button onClick={() => setPage('book-call')} className="px-8 py-4 bg-blue-600 text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                        Schedule a Governance Review
                    </button>
                </div>

            </div>
        </section>
    );
};

export default AIGovernance;
