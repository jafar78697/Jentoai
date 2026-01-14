
import React from 'react';
import { Page } from './types';

interface HeroProps {
  setPage: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ setPage }) => {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden bg-white">
      {/* Premium Gradient Background Elements */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[100px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-600/5 border border-blue-600/10 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-8 reveal">
          <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
          <span>Next Generation Autonomous Architecture</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tight text-slate-900 mb-8 leading-[1.1] md:leading-[0.95] reveal">
          BUILD AI AGENTS THAT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500">
            WORK WHILE YOU SLEEP.
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-500 mb-12 font-bold leading-relaxed reveal delay-100">
          Scale your operations with autonomous AI agents. We build custom n8n workflows that automate your sales, support, and lead generation—reducing overhead by 70% and giving your team 100+ hours back every month.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-24 reveal delay-200">
          <button
            onClick={() => setPage('book-call')}
            className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-slate-900 transition-all shadow-2xl shadow-blue-500/20"
          >
            Book a Free AI Automation Call
          </button>
          <button
            onClick={() => setPage('use-cases')}
            className="w-full sm:w-auto px-10 py-5 bg-slate-100 text-slate-700 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-slate-200 transition-all"
          >
            See Use Cases
          </button>
        </div>

        <div className="relative max-w-6xl mx-auto group reveal delay-300">
          <div className="absolute inset-0 bg-blue-600/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="relative rounded-3xl border border-slate-200 p-2 glass shadow-inner overflow-hidden">
            <div className="bg-slate-950 rounded-2xl overflow-hidden aspect-video relative">
              <img
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200"
                alt="Jento Node Builder"
                className="w-full h-full object-cover opacity-60 mix-blend-screen"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-12 opacity-95 pointer-events-none scale-90 md:scale-100">
                  <div className="p-5 bg-slate-900/90 border border-slate-700 rounded-2xl text-left w-52 shadow-2xl backdrop-blur-md">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl mb-4 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="h-2 w-28 bg-slate-700 rounded mb-2"></div>
                    <div className="h-2 w-16 bg-slate-800 rounded"></div>
                  </div>
                  <div className="h-1 w-28 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                  </div>
                  <div className="p-5 bg-slate-900/90 border border-slate-700 rounded-2xl text-left w-52 shadow-2xl relative backdrop-blur-md">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl mb-4 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    </div>
                    <div className="h-2 w-32 bg-slate-700 rounded mb-2"></div>
                    <div className="h-2 w-20 bg-slate-800 rounded"></div>
                    <div className="absolute -top-3 -right-3 bg-blue-500 text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-widest shadow-xl">ACTIVE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white px-8 py-4 rounded-2xl shadow-2xl border border-slate-100 flex items-center space-x-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?u=${i + 25}`} className="w-8 h-8 rounded-full border-2 border-white shadow-md" />
              ))}
            </div>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Trusted by growing teams & agencies worldwide</p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
