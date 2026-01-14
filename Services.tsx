
import React from 'react';
import { SERVICES } from './constants';

const Services: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 reveal">
          <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Autonomous Business Systems</p>
          <h2 className="text-6xl font-black text-slate-900 uppercase tracking-tighter mb-6 leading-none">Custom AI & n8n <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Automation Services.</span></h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">We specialize in mission-critical AI agent development and workflow architecture that solves real-world operational bottlenecks for scaling businesses.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      </div>
    </section>
  );
};

export default Services;
