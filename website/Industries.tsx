
import React from 'react';
import { INDUSTRIES } from './constants';

const Industries: React.FC = () => {
  // Add some extra specialized industries that might not be in the constant yet for more "content"
  const expandedIndustries = [
    ...INDUSTRIES,
    {
      name: 'Legal & Compliance',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      desc: 'Automated legal intake, compliance auditing using Gemini-reasoning, and autonomous contract generation for 24/7 firm operations.'
    },
    {
      name: 'Education & EdTech',
      icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
      desc: 'Scale student support with AI tutors, automate grading for elective courses, and manage enrollment workflows without human bottleneck.'
    },
    {
      name: 'Manufacturing & R&D',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      desc: 'Streamline supply chain oversight, predictive maintenance scheduling, and autonomous parts re-ordering through direct IoT-to-n8n nodes.'
    }
  ];

  return (
    <section className="py-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24 reveal">
          <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Vertical Solutions</p>
          <h2 className="text-6xl font-black text-slate-900 uppercase tracking-tighter mb-6 leading-none">AI Sector <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Specializations.</span></h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Jento Nodes are custom-engineered for specific market verticals, solving the unique pain points of sales, HR, and logistics through intelligent automation.</p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          {expandedIndustries.map((ind, i) => (
            <div key={i} className={`reveal delay-${(i % 3 + 1) * 100} p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:border-blue-600 transition-all cursor-default group`}>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={ind.icon}></path>
                </svg>
              </div>
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">{ind.name}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Vertical Matters Section */}
        <div className="bg-slate-950 rounded-[4rem] p-12 md:p-24 text-white reveal relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6">Structural Domain Expertise</p>
              <h3 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-tight">Beyond Generic <br /> AI Logic.</h3>
              <p className="text-lg text-slate-400 font-medium leading-relaxed mb-10">
                Most AI tools failure because they try to be everything for everyone. Jento AI understands that a Sales Agent for Real Estate requires completely different logic than a Support Agent for SaaS.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-black text-white mb-2">12+</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Vertical Adapters</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-white mb-2">100%</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Logic Accuracy</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { t: 'Domain Contextualization', d: 'Agents are trained on industry-specific datasets.' },
                { t: 'Compliance Guardrails', d: 'Built-in logic for industry regulations (GDPR/HIPAA).' },
                { t: 'Custom Toolsets', d: 'Ready-made connectors for sector-specific CRMs.' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <h4 className="text-xs font-black uppercase tracking-widest text-blue-500 mb-2">{item.t}</h4>
                  <p className="text-sm text-slate-400 font-medium">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
