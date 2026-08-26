import React, { useState } from 'react';
import { Page } from './types';

interface CrmData {
  customerName: string;
  company: string;
  budget: string;
  painPoints: string[];
  nextSteps: string[];
}

export const VoiceToCrmTool: React.FC<{ setPage: (page: Page) => void }> = ({ setPage }) => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<CrmData | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null);
    }
  };

  const handleExtract = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append('audio', file);

    try {
      const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
      const response = await fetch(`${baseUrl}/api/extract-crm-data`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error?.message || 'Failed to extract CRM data');
      }

      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-12">
      <article className="max-w-4xl mx-auto px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Voice-to-CRM Data Extractor</h1>
          <p className="text-lg text-slate-600 font-medium">Upload a sales call recording and let AI instantly extract structured CRM fields.</p>
        </header>

        <section className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 mb-8">
          <div className="border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-300">
            <input 
              type="file" 
              accept="audio/*" 
              onChange={handleFileChange}
              className="hidden" 
              id="audio-upload" 
            />
            <label htmlFor="audio-upload" className="cursor-pointer flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-slate-900 mb-2">
                {file ? file.name : 'Upload Sales Call Audio'}
              </span>
              <span className="text-sm text-slate-500 font-medium">MP3, WAV, WebM up to 5MB</span>
            </label>
          </div>

          {error && (
            <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-bold border border-red-100 flex items-center gap-3">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {error}
            </div>
          )}

          <div className="mt-8 text-center">
            <button 
              onClick={handleExtract}
              disabled={!file || loading}
              className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-slate-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-600/20"
            >
              {loading ? (
                <span className="flex items-center gap-2 justify-center">
                  <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing Audio...
                </span>
              ) : 'Extract CRM Data'}
            </button>
          </div>
        </section>

        {result && (
          <section className="bg-slate-900 rounded-[2rem] p-8 md:p-10 shadow-2xl border border-slate-800 text-white animate-fade-in-up">
            <h2 className="text-2xl font-black mb-8 flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              Data Extracted Successfully
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600 transition-colors">
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Customer Name</p>
                <p className="text-xl font-medium text-white">{result.customerName || 'N/A'}</p>
              </div>
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600 transition-colors">
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Company</p>
                <p className="text-xl font-medium text-white">{result.company || 'N/A'}</p>
              </div>
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600 transition-colors md:col-span-2">
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Budget</p>
                <p className="text-xl font-medium text-white">{result.budget || 'N/A'}</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600 transition-colors md:col-span-2">
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Pain Points</p>
                <ul className="space-y-3">
                  {result.painPoints.length > 0 ? result.painPoints.map((point, i) => (
                    <li key={i} className="flex gap-4 text-slate-300 font-medium leading-relaxed">
                      <span className="text-blue-500 shrink-0">•</span> {point}
                    </li>
                  )) : <li className="text-slate-500 italic">No pain points detected</li>}
                </ul>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600 transition-colors md:col-span-2">
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Next Steps</p>
                <ul className="space-y-3">
                  {result.nextSteps.length > 0 ? result.nextSteps.map((step, i) => (
                    <li key={i} className="flex gap-4 text-slate-300 font-medium leading-relaxed">
                      <span className="text-blue-500 shrink-0">→</span> {step}
                    </li>
                  )) : <li className="text-slate-500 italic">No next steps detected</li>}
                </ul>
              </div>
            </div>

            <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 overflow-x-auto">
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Raw JSON Payload (Ready for n8n/Zapier)</p>
              <pre className="text-sm text-emerald-400 font-mono leading-relaxed">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          </section>
        )}
      </article>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </main>
  );
};
