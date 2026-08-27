import React from 'react';
import { Page } from './types';

export const ToolsPage: React.FC<{ setPage: (page: Page) => void }> = ({ setPage }) => {
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: Page) => {
    e.preventDefault();
    setPage(page);
    window.history.pushState(null, '', `/${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-20 reveal">
          <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Automation Arsenal</p>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter mb-6 leading-none">Free <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI Tools.</span></h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Experience the power of Jento AI through our suite of free, single-purpose automation utilities.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal delay-100">
          
          {/* Text Tool Card */}
          <a href="/tool/image-alt-text-generator" onClick={(e) => handleNavClick(e, 'tool/image-alt-text-generator')} className="group block bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-300">
              <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">Image Alt Text Generator</h2>
            <p className="text-slate-600 font-medium mb-8 leading-relaxed">
              Upload an image and instantly generate SEO-friendly and accessibility-compliant alt text variants using computer vision.
            </p>
            <div className="flex items-center text-blue-600 font-black uppercase tracking-widest text-[11px]">
              Open Tool 
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>

          {/* Voice Tool Card */}
          <a href="/tool/voice-to-crm-extractor" onClick={(e) => handleNavClick(e, 'tool/voice-to-crm-extractor')} className="group block bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300">
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 transition-colors duration-300">
              <svg className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">Voice-to-CRM Extractor</h2>
            <p className="text-slate-600 font-medium mb-8 leading-relaxed">
              Upload a messy sales call recording and let AI transcribe and extract structured CRM fields instantly.
            </p>
            <div className="flex items-center text-emerald-600 font-black uppercase tracking-widest text-[11px]">
              Open Tool 
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>

          {/* Voice Resume Tool Card */}
          <a href="/tool/voice-resume-builder" onClick={(e) => handleNavClick(e, 'tool/voice-resume-builder')} className="group block bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 transition-colors duration-300">
              <svg className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">Voice-to-Resume Builder</h2>
            <p className="text-slate-600 font-medium mb-8 leading-relaxed">
              Speak your skills or upload your old resume, and let AI generate a beautifully formatted PDF resume in seconds.
            </p>
            <div className="flex items-center text-indigo-600 font-black uppercase tracking-widest text-[11px]">
              Open Tool 
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>

          {/* Website Roaster Tool Card */}
          <a href="/tool/website-roaster" onClick={(e) => handleNavClick(e, 'tool/website-roaster')} className="group block bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300">
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-600 transition-colors duration-300">
              <svg className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">The Website Roaster</h2>
            <p className="text-slate-600 font-medium mb-8 leading-relaxed">
              Enter a URL and let our brutally honest AI roast your marketing copy and expose why you aren't getting sales.
            </p>
            <div className="flex items-center text-orange-600 font-black uppercase tracking-widest text-[11px]">
              Open Tool 
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>

        </div>
      </div>
    </main>
  );
};
