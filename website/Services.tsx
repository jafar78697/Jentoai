
import React from 'react';
import { SERVICES } from './constants';

const Services: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24 reveal">
          <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Autonomous Business Systems</p>
          <h2 className="text-6xl font-black text-slate-900 uppercase tracking-tighter mb-6 leading-none">Custom AI & n8n <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Automation Services.</span></h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">We specialize in mission-critical AI agent development and workflow architecture that solves real-world operational bottlenecks for scaling businesses.</p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
          {SERVICES.map((s, i) => (
            <div key={i} className={`reveal delay-${(i + 1) * 100} p-12 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 transition-all group`}>
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={s.icon}></path>
                </svg>
              </div>
              <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">{s.title}</h3>
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">{s.desc}</p>
              <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Standard Protocol Available</span>
                <svg className="w-5 h-5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Comparison Table */}
        <div className="reveal mb-40">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">The Impact Matrix</p>
            <h3 className="text-5xl font-black text-slate-900 uppercase tracking-tighter">Traditional vs <span className="text-blue-600">Jento AI.</span></h3>
          </div>

          <div className="bg-white rounded-[3rem] border border-slate-100 shadow-2xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950 text-white">
                  <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em]">Business Metric</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] border-l border-white/10">Traditional Operations</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] border-l border-white/10 bg-blue-600">Jento AI Node</th>
                </tr>
              </thead>
              <tbody className="text-slate-900 font-bold uppercase tracking-tight">
                {[
                  { m: 'Lead Response Time', t: '5 - 30 Minutes', a: '< 2 Seconds' },
                  { m: 'Operational Speed', t: '8 Hours / Day', a: '24 / 7 / 365' },
                  { m: 'Data Accuracy', t: '85 - 92%', a: '99.9% Logic Lock' },
                  { m: 'Cost per Action', t: '$2.50 - $45.00', a: '$0.01 - $0.15' },
                  { m: 'Scalability Limit', t: 'Linear (Hiring)', a: 'Exponential (Digital)' }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                    <td className="p-8 text-sm">{row.m}</td>
                    <td className="p-8 text-sm text-slate-400 border-l border-slate-50">{row.t}</td>
                    <td className="p-8 text-sm text-blue-600 border-l border-slate-50 bg-blue-600/5">{row.a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Specialized Transformation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 reveal">
          <div className="lg:col-span-2 p-12 bg-slate-950 rounded-[3rem] text-white">
            <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6">Structural Integrity</p>
            <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-tight">Zero-Latency <br /> Industry Orchestration.</h3>
            <p className="text-lg text-slate-400 font-medium leading-relaxed mb-10 max-w-xl">
              Our agents don't just "chat"—they perform. We build deeper integrations than standard AI tools, allowing our nodes to interact directly with your industry databases and specialized software through secure, encrypted protocols.
            </p>
            <div className="flex items-center space-x-4">
              <div className="h-0.5 w-12 bg-blue-600"></div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Architecture Certified</span>
            </div>
          </div>
          <div className="p-12 bg-blue-600 rounded-[3rem] text-white flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-black uppercase tracking-tight mb-4">Ownership <br /> Blueprint.</h4>
              <p className="text-blue-100 font-medium leading-relaxed italic">
                "When you build with Jento, you aren't renting a subscription. You are owning a digital asset that stays in your stack forever."
              </p>
            </div>
            <button
              className="mt-8 py-4 bg-white text-blue-600 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-slate-900 hover:text-white transition-all"
            >
              Deep Dive Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
