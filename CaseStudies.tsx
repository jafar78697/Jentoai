
import React from 'react';
import { Page } from './types';
import ROICalculator from './ROICalculator';

interface CaseStudiesProps {
    setPage: (page: Page) => void;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ setPage }) => {
    return (
        <section className="py-32 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-24 reveal">
                    <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Proven Results</p>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter mb-8 leading-none">
                        See The <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Impact.</span>
                    </h1>
                    <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
                        Real businesses. Real problems. Autonomous solutions.
                    </p>
                </div>

                {/* Case Study 1: Real Estate */}
                <div className="mb-32 reveal group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500">
                        <div className="order-2 lg:order-1">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest">Real Estate</span>
                                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Lead Gen Automation</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight mb-6">The "Never-Sleep" Realtor Agent</h2>
                            <p className="text-slate-600 font-medium leading-relaxed mb-8 text-lg">
                                A mid-sized agency was losing 60% of leads due to slow response times. We built an autonomous WhatsApp & SMS bot that qualifies leads instantly, 24/7.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="p-6 bg-slate-50 rounded-2xl">
                                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Before</p>
                                    <p className="text-2xl font-black text-slate-900">4hr</p>
                                    <p className="text-xs text-slate-500 font-bold">Avg. Response Time</p>
                                </div>
                                <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                                    <p className="text-green-600 text-[10px] font-black uppercase tracking-widest mb-2">After</p>
                                    <p className="text-3xl font-black text-green-600">30sec</p>
                                    <p className="text-xs text-green-700 font-bold">Avg. Response Time</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative h-[400px] rounded-[2.5rem] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                alt="Real Estate"
                            />
                            <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
                        </div>
                    </div>
                </div>

                {/* Case Study 2: eCommerce */}
                <div className="mb-32 reveal group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500">
                        <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                alt="E-commerce"
                            />
                            <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply"></div>
                        </div>
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-[10px] font-black uppercase tracking-widest">E-Ecomm</span>
                                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Support Automation</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight mb-6">Autonomous Refund Manager</h2>
                            <p className="text-slate-600 font-medium leading-relaxed mb-8 text-lg">
                                Handling 500+ tickets/day for refunds was drowning the support team. We built a logic node that verifies order status, checks policies, and issues refunds instantly.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="p-6 bg-slate-50 rounded-2xl">
                                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Before</p>
                                    <p className="text-2xl font-black text-slate-900">$12k</p>
                                    <p className="text-xs text-slate-500 font-bold">Monthly Support Cost</p>
                                </div>
                                <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                                    <p className="text-indigo-600 text-[10px] font-black uppercase tracking-widest mb-2">After</p>
                                    <p className="text-3xl font-black text-indigo-600">$450</p>
                                    <p className="text-xs text-indigo-700 font-bold">Monthly Server Cost</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ROI Calculator Section */}
                <div className="mb-32 reveal">
                    <ROICalculator />
                </div>

                {/* Final CTA */}
                <div className="reveal text-center">
                    <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8">Ready to be our next Success Story?</h3>
                    <button
                        onClick={() => setPage('book-call')}
                        className="px-12 py-6 bg-slate-900 text-white rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1"
                    >
                        Start Your Project
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
