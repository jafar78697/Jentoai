import React, { useState } from 'react';
import { Page } from './types';

interface WebsiteRoasterProps {
  setPage: (page: Page) => void;
}

interface RoastData {
  score: number;
  roast: string;
  flaws: string[];
  improvements: string[];
}

export const WebsiteRoaster: React.FC<WebsiteRoasterProps> = ({ setPage }) => {
  const [url, setUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [roastData, setRoastData] = useState<RoastData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleRoast = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      setError('Please enter a valid website URL.');
      return;
    }

    setIsProcessing(true);
    setError(null);
    setRoastData(null);

    try {
      const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
      const response = await fetch(`${baseUrl}/api/website-roaster`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData?.error?.message || 'Failed to generate roast');
      }

      const data: RoastData = await response.json();
      setRoastData(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsProcessing(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score < 40) return 'text-red-600 bg-red-100';
    if (score < 70) return 'text-orange-600 bg-orange-100';
    return 'text-emerald-600 bg-emerald-100';
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <header className="text-center mb-16 reveal">
          <p className="text-orange-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Brutally Honest AI</p>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-4 leading-none">
            The Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Roaster</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium mb-8">
            Enter your landing page URL and let our AI brutally expose why you aren't getting sales. 
            (Not for the faint of heart).
          </p>

          <form onSubmit={handleRoast} className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative flex flex-col md:flex-row gap-2 p-2 bg-white rounded-2xl shadow-xl">
              <input 
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://yourwebsite.com"
                required
                className="flex-1 px-6 py-4 bg-transparent text-slate-900 font-medium focus:outline-none w-full"
              />
              <button 
                type="submit"
                disabled={isProcessing}
                className="px-8 py-4 bg-slate-900 hover:bg-orange-600 text-white font-black uppercase tracking-widest text-[11px] rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Roasting...
                  </>
                ) : '🔥 Roast My Site'}
              </button>
            </div>
          </form>
          
          {error && (
            <div className="mt-8 max-w-2xl mx-auto p-4 bg-red-50 text-red-600 rounded-xl text-sm font-bold border border-red-100">
              {error}
            </div>
          )}
        </header>

        {roastData && (
          <div className="space-y-8 reveal">
            {/* The Roast & Score */}
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-100 to-red-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-50"></div>
              
              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                <div className="text-center md:text-left shrink-0">
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">CRO Score</p>
                  <div className={`text-6xl font-black tracking-tighter w-32 h-32 flex items-center justify-center rounded-3xl ${getScoreColor(roastData.score)}`}>
                    {roastData.score}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4 uppercase">The Brutal Verdict</h2>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium italic">
                    "{roastData.roast}"
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* The Flaws */}
              <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-red-500/5 border border-slate-100 hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">Why It's Failing</h3>
                </div>
                <ul className="space-y-6">
                  {roastData.flaws.map((flaw, idx) => {
                    const [title, desc] = flaw.split(':');
                    return (
                      <li key={idx} className="flex gap-4">
                        <span className="text-red-500 font-black mt-1">0{idx + 1}.</span>
                        <div>
                          {title && <span className="font-bold text-slate-900 block mb-1">{title.trim()}</span>}
                          <span className="text-sm text-slate-600 font-medium leading-relaxed">{desc ? desc.trim() : flaw}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* The Fixes */}
              <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-emerald-500/5 border border-slate-100 hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">How to Fix It</h3>
                </div>
                <ul className="space-y-6">
                  {roastData.improvements.map((fix, idx) => {
                    const [title, desc] = fix.split(':');
                    return (
                      <li key={idx} className="flex gap-4">
                        <span className="text-emerald-500 font-black mt-1">0{idx + 1}.</span>
                        <div>
                          {title && <span className="font-bold text-slate-900 block mb-1">{title.trim()}</span>}
                          <span className="text-sm text-slate-600 font-medium leading-relaxed">{desc ? desc.trim() : fix}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            
            <div className="text-center pt-8 reveal">
              <p className="text-sm text-slate-500 font-medium mb-4">Too much work to fix it yourself?</p>
              <button 
                onClick={() => {
                  setPage('book-call');
                  window.history.pushState(null, '', '/book-call');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-slate-900 hover:shadow-2xl transition-all shadow-lg shadow-blue-500/30"
              >
                Hire Jento AI to Fix Your Conversions
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
