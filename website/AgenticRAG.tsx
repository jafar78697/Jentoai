import React, { useEffect } from 'react';
import { Page } from './types';

interface AgenticRAGProps {
    setPage: (page: Page) => void;
}

const AgenticRAG: React.FC<AgenticRAGProps> = ({ setPage }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="py-32 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <div className="mb-16 reveal">
                    <button onClick={() => setPage('resources')} className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-6 hover:underline">
                        ← Back to Resources
                    </button>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                        Architecture Guide
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                        Beyond Vector DBs: Implementing Agentic RAG
                    </h1>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed">
                        Standard RAG retrieves documents. Agentic RAG reasons about them. Learn the architecture that makes AI answers actually accurate.
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg prose-slate max-w-none reveal">

                    <h2 className="text-2xl font-black text-slate-900 mt-12 mb-4">The Problem with Standard RAG</h2>
                    <p>
                        Traditional Retrieval-Augmented Generation (RAG) works like this: you ask a question, the system finds similar documents in a vector database, and an LLM generates an answer based on those documents.
                    </p>
                    <p>
                        The problem? <strong>Similarity ≠ Relevance.</strong> Vector search finds documents that look similar, not documents that actually answer your question. This leads to hallucinations, incomplete answers, and frustrated users.
                    </p>

                    <div className="p-6 bg-red-50 border border-red-100 rounded-2xl my-8 not-prose">
                        <h4 className="text-sm font-black text-red-600 uppercase tracking-widest mb-2">The Accuracy Gap</h4>
                        <p className="text-red-800 text-sm font-medium">
                            Standard RAG pipelines often struggle to surpass 75-85% accuracy on complex queries because they lack the ability to self-correct or validate retrieved information.
                        </p>
                    </div>

                    <h2 className="text-2xl font-black text-slate-900 mt-12 mb-4">The Agentic RAG Architecture</h2>
                    <p>
                        Agentic RAG introduces a reasoning layer between retrieval and generation. Instead of blindly trusting retrieved documents, an "Evaluator Agent" assesses their quality and can request additional searches.
                    </p>

                    {/* Architecture Diagram (Inline SVG) */}
                    <div className="my-12 not-prose">
                        <div className="p-8 bg-slate-900 rounded-3xl">
                            <svg viewBox="0 0 600 200" className="w-full h-auto" aria-label="Agentic RAG Architecture Diagram showing Query flowing to Meta-Agent, then to Retriever and Evaluator in a loop, finally to Generator for Answer">
                                {/* Nodes */}
                                <rect x="20" y="80" width="80" height="40" rx="8" fill="#3b82f6" />
                                <text x="60" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Query</text>

                                <rect x="140" y="80" width="100" height="40" rx="8" fill="#6366f1" />
                                <text x="190" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Meta-Agent</text>

                                <rect x="280" y="40" width="80" height="40" rx="8" fill="#06b6d4" />
                                <text x="320" y="65" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Retriever</text>

                                <rect x="280" y="120" width="80" height="40" rx="8" fill="#f59e0b" />
                                <text x="320" y="145" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Evaluator</text>

                                <rect x="400" y="80" width="80" height="40" rx="8" fill="#10b981" />
                                <text x="440" y="105" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Generator</text>

                                <rect x="520" y="80" width="60" height="40" rx="8" fill="#3b82f6" />
                                <text x="550" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Answer</text>

                                {/* Arrows */}
                                <path d="M100 100 L140 100" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)" />
                                <path d="M240 100 L280 60" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)" />
                                <path d="M240 100 L280 140" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)" />
                                <path d="M360 60 L360 120" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" />
                                <path d="M360 140 L280 60" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,5" />
                                <path d="M360 100 L400 100" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)" />
                                <path d="M480 100 L520 100" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)" />

                                {/* Loop Label */}
                                <text x="390" y="90" fill="#f59e0b" fontSize="9" fontWeight="bold">LOOP</text>

                                <defs>
                                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
                                    </marker>
                                </defs>
                            </svg>
                            <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-4">Agentic RAG: Perception → Retrieval → Evaluation → Generation Loop</p>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">The Three Agents</h3>
                    <ol className="list-decimal pl-5 space-y-4">
                        <li>
                            <strong>Meta-Agent (Orchestrator):</strong> Receives the query, decides the retrieval strategy, and coordinates the other agents.
                        </li>
                        <li>
                            <strong>Retriever Agent:</strong> Searches the vector database, can reformulate queries if initial results are poor.
                        </li>
                        <li>
                            <strong>Evaluator Agent:</strong> Assesses retrieved documents for relevance, accuracy, and completeness. Can trigger re-retrieval.
                        </li>
                    </ol>

                    <h2 className="text-2xl font-black text-slate-900 mt-12 mb-4">Why It Matters</h2>
                    <p>
                        With Agentic RAG, your AI doesn't just find information—it <em>validates</em> it. The iterative loop allows the system to self-correct, dramatically improving answer quality for complex, multi-faceted queries.
                    </p>

                </div>

                {/* CTA */}
                <div className="mt-16 text-center reveal">
                    <p className="text-slate-500 mb-6">Need help implementing Agentic RAG for your knowledge base?</p>
                    <button onClick={() => setPage('book-call')} className="px-8 py-4 bg-blue-600 text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                        Talk to Our Architects
                    </button>
                </div>

            </div>
        </section>
    );
};

export default AgenticRAG;
