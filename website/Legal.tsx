
import React, { useState } from 'react';

const Legal: React.FC = () => {
    const [tab, setTab] = useState<'privacy' | 'terms'>('privacy');

    return (
        <section className="py-32 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Compliance</p>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-8">Legal Protocols.</h1>

                    <div className="inline-flex bg-slate-100 p-1 rounded-2xl">
                        <button
                            onClick={() => setTab('privacy')}
                            className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${tab === 'privacy' ? 'bg-white text-slate-900 shadow-lg' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                            Privacy Policy
                        </button>
                        <button
                            onClick={() => setTab('terms')}
                            className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${tab === 'terms' ? 'bg-white text-slate-900 shadow-lg' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                            Terms of Service
                        </button>
                    </div>
                </div>

                <div className="prose prose-slate max-w-none prose-headings:font-black prose-headings:uppercase prose-p:font-medium prose-p:text-slate-600">
                    {tab === 'privacy' ? (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h3>1. Data Protection</h3>
                            <p>At Jento AI, we prioritize data sovereignty. We utilize "Siloed Architecture," meaning your business data is processed within isolated environments. We do not use your proprietary data to train our foundational models.</p>

                            <h3>2. Data Collection</h3>
                            <p>We collect only the essential information required to operate your autonomous agents. This may include API keys (encrypted), customer logs, and operational metrics.</p>

                            <h3>3. Third-Party Sharing</h3>
                            <p>We do not sell your data. We only share data with necessary sub-processors (e.g., OpenAI, Google Cloud) strictly for the purpose of executing your workflows.</p>

                            <h3>4. Security</h3>
                            <p>All data is encrypted at rest and in transit using industry-standard AES-256 protocols. Access to your instance is restricted to authorized Jento architects only.</p>
                        </div>
                    ) : (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h3>1. Service Agreement</h3>
                            <p>By engaging Jento AI, you agree that our autonomous agents will act on your behalf. You retain full responsibility for the actions taken by these agents within your specified parameters.</p>

                            <h3>2. Intellectual Property</h3>
                            <p>You retain full ownership of your data. Jento AI retains ownership of the underlying "Node Architecture" and pre-built logic blocks, granting you a perpetual license to use them.</p>

                            <h3>3. Liability</h3>
                            <p>Jento AI is not liable for business decisions made based on AI suggestions. Our tools are assistants, not replacements for executive judgment.</p>

                            <h3>4. Termination</h3>
                            <p>You may terminate your service at any time. Upon termination, we will securely destroy all your innovative data and revoke agent access keys.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Legal;
