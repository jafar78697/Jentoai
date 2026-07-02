import React, { useEffect } from 'react';
import { Page } from './types';

interface AIAgentsGuideProps {
    setPage: (page: Page) => void;
}

const AIAgentsGuide: React.FC<AIAgentsGuideProps> = ({ setPage }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            id: 'explained',
            title: 'AI Agents Explained: The Shift from Chat to Action',
            content: 'An AI Agent is an autonomous system capable of perceiving its environment, reasoning about how to achieve a goal, and executing actions to reach that goal. Unlike a standard chatbot (like basic ChatGPT) which waits for a prompt and gives a text response, an AI Agent "loops" until it solves the problem. It can browse the web, read files, write code, and interact with other software APIs without constant human supervision.'
        },
        {
            id: 'vs-agentic',
            title: 'Semantic Deep Dive: AI Agents vs Agentic AI',
            content: (
                <div className="space-y-4">
                    <p>
                        While often used interchangeably, deep community discussions (including those on <strong>r/LocalLLaMA</strong> and <strong>r/AutoGPT</strong>) highlight a semantic nuance:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>AI Agents:</strong> Typically refers to the specific entities or "workers" (e.g., a "Sales Agent" or "Coding Agent"). They are often task-specific and reactive.</li>
                        <li><strong>Agentic AI:</strong> Refers to the broader <em>cognitive architecture</em> and system design. It implies a higher degree of autonomy where the system sets its own sub-goals. "Agentic" is the adjective describing the system's capability to reason proactively.</li>
                    </ul>
                    <div className="p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
                        <strong>The 2026 Definition:</strong> "Agentic AI" is the era where models stop just <em>talking</em> and start <em>doing</em>.
                    </div>
                </div>
            )
        },
        {
            id: 'examples',
            title: 'AI Agents in Action: Real-World Business Use Cases',
            content: (
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Autonomous Sales (AI SDR):</strong> Agents that scan LinkedIn, verify emails, and send personalized connection requests and follow-ups. They don't just "write" the email; they "click send" and update the CRM.</li>
                    <li><strong>Customer Support Level 2:</strong> Agents that process refunds, update shipping addresses in Shopify, and query SQL databases to answer "Where is my order?" without human input.</li>
                    <li><strong>Coding & DevOps:</strong> Agents (like Devin or similar) that can plan a software feature, write the code, run the tests, read the error logs, and fix their own bugs in a loop.</li>
                    <li><strong>Supply Chain Sentinel:</strong> Agents that monitor inventory levels 24/7 and autonomously place re-stock orders via API when thresholds are hit, factoring in shipping times.</li>
                </ul>
            )
        },
        {
            id: 'tools',
            title: 'The Agentic Stack: Tools & Frameworks (2026)',
            content: (
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                        <strong className="block text-blue-600 mb-1">LangGraph (by LangChain)</strong>
                        <span className="text-sm text-slate-600">The industry standard for building stateful, loop-based agents. It allows for complex "cyclic" graphs where agents can backtrack and retry. Best for production.</span>
                    </div>
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                        <strong className="block text-blue-600 mb-1">CrewAI</strong>
                        <span className="text-sm text-slate-600">The "Role-Playing" framework. Excellent for orchestrating a "team" of agents (e.g., a Researcher, a Writer, and an Editor) that collaborate.</span>
                    </div>
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                        <strong className="block text-blue-600 mb-1">Microsoft AutoGen</strong>
                        <span className="text-sm text-slate-600">Powerful for complex conversational patterns. It excels at multi-agent conversation where agents "debate" to find the best solution.</span>
                    </div>
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                        <strong className="block text-blue-600 mb-1">Google Vertex AI Agents</strong>
                        <span className="text-sm text-slate-600">Enterprise-grade managed platform. It provides the "Agent Engine" (reasoning loop) as a service, integrated with Gemini Ultra.</span>
                    </div>
                </div>
            )
        },
        {
            id: 'learning',
            title: 'The 2026 Learning Library: Courses, Books & PDF',
            content: (
                <div className="space-y-6">
                    <div>
                        <h4 className="font-black text-slate-900 mb-2">🎓 Intensive Courses</h4>
                        <ul className="space-y-3">
                            <li className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                                <strong className="text-blue-600">Google AI Agents Intensive</strong>
                                <p className="text-sm text-slate-600 mt-1">A specialized 5-day deep dive by Google's ML researchers. Covers tools, orchestration, memory, and evaluation (LLM-as-a-Judge). Best for developers wanting to master the Vertex AI ecosystem.</p>
                            </li>
                            <li className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                                <strong className="text-blue-600">DeepLearning.AI "AI Agents in Action"</strong>
                                <p className="text-sm text-slate-600 mt-1">Short, high-impact courses often in partnership with framework creators (like Andrew Ng and Harrison Chase). Great for beginners.</p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-slate-900 mb-2">📚 Must-Read Books (2025-2026)</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-50 rounded-xl">
                                <strong>"The Agentic AI Bible"</strong>
                                <span className="block text-xs text-slate-400">by Thomas R. Caldwell</span>
                                <p className="text-sm mt-2">Comprehensive reference on architectures and design choices.</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-xl">
                                <strong>"Designing Autonomous AI Systems"</strong>
                                <span className="block text-xs text-slate-400">2025 Edition</span>
                                <p className="text-sm mt-2">Focuses on goal representation and decision boundaries.</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-slate-900 rounded-2xl text-white flex items-center justify-between">
                        <div>
                            <strong className="block text-lg">Download this Guide as PDF</strong>
                            <span className="text-slate-400 text-sm">Offline reading for your team.</span>
                        </div>
                        <button onClick={() => window.print()} className="px-6 py-3 bg-white text-slate-900 rounded-lg font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-colors">
                            Print / Save PDF
                        </button>
                    </div>
                </div>
            )
        },
        {
            id: 'directory',
            title: 'Agent Directory: Browse by Function',
            content: (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    {['Sales Agents', 'Research Agents', 'Coding Agents', 'Legal Agents', 'Support Agents', 'Data Agents', 'HR Agents', 'Finance Agents'].map((cat, i) => (
                        <div key={i} className="p-4 border border-slate-200 rounded-xl hover:border-blue-500 hover:text-blue-600 cursor-pointer transition-colors font-bold text-sm text-slate-600">
                            {cat}
                        </div>
                    ))}
                </div>
            )
        }
    ];

    return (
        <section className="py-32 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <div className="mb-16 reveal">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                        The 2026 Definitive Guide
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
                        The Ultimate Guide to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">AI Agents.</span>
                    </h1>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed border-l-4 border-purple-600 pl-6">
                        Everything you need to know about the shift from Chatbots to Autonomous Agents. Meaning, Examples, Tools, and Strategy.
                    </p>
                </div>

                {/* Table of Contents */}
                <div className="mb-16 p-8 bg-slate-50 rounded-3xl border border-slate-100 reveal">
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Table of Contents</h3>
                    <ul className="space-y-3">
                        {sections.map(s => (
                            <li key={s.id}>
                                <a href={`#${s.id}`} className="text-slate-900 font-bold hover:text-purple-600 transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                                    {s.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Content Sections */}
                <div className="space-y-20">
                    {sections.map((section, i) => (
                        <div key={section.id} id={section.id} className="reveal scroll-mt-32">
                            <h2 className="text-3xl font-black text-slate-900 mb-6">{section.title}</h2>
                            <div className="prose prose-lg prose-slate max-w-none text-slate-600">
                                {typeof section.content === 'string' ? <p>{section.content}</p> : section.content}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-24 p-12 bg-slate-900 rounded-[3rem] text-center text-white reveal relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/30 rounded-full blur-[80px]"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-black uppercase tracking-tight mb-6">Ready to Build Your Own Agent?</h3>
                        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
                            Stop reading and start automating. Jento AI builds custom autonomous workforces for forward-thinking enterprises.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <button onClick={() => setPage('book-call')} className="px-8 py-4 bg-blue-600 text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-blue-500 transition-colors">
                                Book Strategy Call
                            </button>
                            <button onClick={() => setPage('services')} className="px-8 py-4 bg-white/10 text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-colors">
                                View Services
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AIAgentsGuide;
