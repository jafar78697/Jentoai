import React, { useEffect } from 'react';
import { Page } from './types';

interface FrameworkComparisonProps {
    setPage: (page: Page) => void;
}

const FrameworkComparison: React.FC<FrameworkComparisonProps> = ({ setPage }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const frameworks = [
        {
            name: 'LangGraph',
            tagline: 'The Control Framework',
            color: 'blue',
            bestFor: 'Enterprise, Compliance-Heavy, Finance',
            pros: ['Fine-grained state control', 'Cyclic graph support', 'Excellent for auditing', 'Production-ready'],
            cons: ['Steeper learning curve', 'More boilerplate code', 'Less intuitive for beginners'],
            useCase: 'Building a compliance-audited loan approval workflow where every decision must be logged and reversible.'
        },
        {
            name: 'CrewAI',
            tagline: 'The Collaboration Framework',
            color: 'indigo',
            bestFor: 'Marketing, Content, Creative Teams',
            pros: ['Role-based agent design', 'Intuitive "crew" metaphor', 'Rapid prototyping', 'Great documentation'],
            cons: ['Less control over execution flow', 'Harder to debug complex interactions', 'Newer ecosystem'],
            useCase: 'Orchestrating a content team with a Researcher, Writer, Editor, and SEO Specialist agent.'
        },
        {
            name: 'AutoGen',
            tagline: 'The Conversation Framework',
            color: 'cyan',
            bestFor: 'Research, Coding, Complex Problem Solving',
            pros: ['Multi-turn conversations', 'Strong coding capabilities', 'Microsoft backing', 'Flexible patterns'],
            cons: ['Can be unpredictable', 'Resource intensive', 'Complex debugging'],
            useCase: 'Having agents collaboratively solve a coding challenge through iterative discussion and testing.'
        }
    ];

    return (
        <section className="py-32 bg-white min-h-screen">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="mb-16 reveal">
                    <button onClick={() => setPage('resources')} className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-6 hover:underline">
                        ← Back to Resources
                    </button>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                        Technical Deep Dive
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                        LangGraph vs CrewAI vs AutoGen
                    </h1>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl">
                        The 2026 Decision Matrix for choosing your agentic AI framework. A technical comparison for builders.
                    </p>
                </div>

                {/* Decision Matrix Table */}
                <div className="mb-16 reveal overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b-2 border-slate-200">
                                <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Factor</th>
                                <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-blue-600">LangGraph</th>
                                <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-indigo-600">CrewAI</th>
                                <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-cyan-600">AutoGen</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            <tr className="border-b border-slate-100">
                                <td className="py-4 px-4 font-bold text-slate-900">Control Level</td>
                                <td className="py-4 px-4 text-slate-600">⭐⭐⭐⭐⭐ Maximum</td>
                                <td className="py-4 px-4 text-slate-600">⭐⭐⭐ Moderate</td>
                                <td className="py-4 px-4 text-slate-600">⭐⭐ Flexible</td>
                            </tr>
                            <tr className="border-b border-slate-100 bg-slate-50">
                                <td className="py-4 px-4 font-bold text-slate-900">Ease of Use</td>
                                <td className="py-4 px-4 text-slate-600">⭐⭐ Steep curve</td>
                                <td className="py-4 px-4 text-slate-600">⭐⭐⭐⭐ Very intuitive</td>
                                <td className="py-4 px-4 text-slate-600">⭐⭐⭐ Moderate</td>
                            </tr>
                            <tr className="border-b border-slate-100">
                                <td className="py-4 px-4 font-bold text-slate-900">Multi-Agent</td>
                                <td className="py-4 px-4 text-slate-600">✓ Supported</td>
                                <td className="py-4 px-4 text-slate-600">✓✓ Native</td>
                                <td className="py-4 px-4 text-slate-600">✓✓ Native</td>
                            </tr>
                            <tr className="border-b border-slate-100 bg-slate-50">
                                <td className="py-4 px-4 font-bold text-slate-900">Production Ready</td>
                                <td className="py-4 px-4 text-slate-600">✓✓ Very stable</td>
                                <td className="py-4 px-4 text-slate-600">✓ Maturing</td>
                                <td className="py-4 px-4 text-slate-600">✓ Maturing</td>
                            </tr>
                            <tr className="border-b border-slate-100">
                                <td className="py-4 px-4 font-bold text-slate-900">Best For</td>
                                <td className="py-4 px-4 text-slate-600">Finance, Healthcare</td>
                                <td className="py-4 px-4 text-slate-600">Marketing, Content</td>
                                <td className="py-4 px-4 text-slate-600">Research, Coding</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Framework Deep Dives */}
                <div className="space-y-12 reveal">
                    {frameworks.map((fw, i) => (
                        <div key={i} className={`p-8 rounded-3xl border border-slate-100 bg-gradient-to-br from-${fw.color}-50/50 to-white`}>
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <h2 className={`text-2xl font-black text-${fw.color}-600 mb-1`}>{fw.name}</h2>
                                    <p className="text-slate-500 font-medium">{fw.tagline}</p>
                                </div>
                                <span className={`px-3 py-1 bg-${fw.color}-100 text-${fw.color}-700 rounded-full text-[10px] font-black uppercase`}>
                                    {fw.bestFor}
                                </span>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h3 className="text-xs font-black text-green-600 uppercase tracking-widest mb-3">Strengths</h3>
                                    <ul className="space-y-2">
                                        {fw.pros.map((pro, j) => (
                                            <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                                {pro}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xs font-black text-red-500 uppercase tracking-widest mb-3">Considerations</h3>
                                    <ul className="space-y-2">
                                        {fw.cons.map((con, j) => (
                                            <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                                                <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                                                {con}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="p-4 bg-white rounded-xl border border-slate-100">
                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Example Use Case</h4>
                                <p className="text-sm text-slate-700">{fw.useCase}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center reveal">
                    <p className="text-slate-500 mb-6">Not sure which framework fits your use case?</p>
                    <button onClick={() => setPage('book-call')} className="px-8 py-4 bg-blue-600 text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                        Get a Free Architecture Consultation
                    </button>
                </div>

            </div>
        </section>
    );
};

export default FrameworkComparison;
