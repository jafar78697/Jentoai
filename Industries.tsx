
import React from 'react';
import { INDUSTRIES } from './constants';

const Industries: React.FC = () => {
  return (
    <section className="py-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 reveal">
          <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Market Verticals</p>
          <h2 className="text-6xl font-black text-slate-900 uppercase tracking-tighter mb-6 leading-none">Sector <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Expertise.</span></h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Jento Nodes are pre-configured for specific industry logic, ensuring rapid deployment and instant ROI.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind, i) => (
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
      </div>
    </section>
  );
};

export default Industries;
