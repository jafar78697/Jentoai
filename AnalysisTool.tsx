
import React, { useState } from 'react';

const AnalysisTool: React.FC = () => {
  const [name, setName] = useState('');
  const [industry, setIndustry] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!industry || !name || !email) return;
    
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-32 bg-slate-950 text-white overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {!submitted ? (
          <div className="reveal">
            <div className="text-center mb-16">
              <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6">Architect Access</p>
              <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">Request Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">AI Blueprint.</span></h2>
              <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto">Share your business context and our architects will design a tailored automation strategy for your specific industry.</p>
            </div>

            <div className="bg-slate-900/40 p-8 md:p-14 rounded-[3rem] border border-slate-800 backdrop-blur-3xl shadow-3xl relative">
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 ml-4">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-8 py-5 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-bold text-sm"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 ml-4">Industry Sector</label>
                    <input 
                      type="text" 
                      placeholder="e.g. E-commerce"
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-8 py-5 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-bold text-sm"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 ml-4">Work Email</label>
                    <input 
                      type="email" 
                      placeholder="name@company.com"
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-8 py-5 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-bold text-sm"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                </div>
                
                <div className="pt-6">
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full py-6 bg-blue-600 text-white font-black uppercase tracking-widest text-[11px] rounded-[1.8rem] transition-all hover:bg-white hover:text-blue-600 shadow-2xl shadow-blue-600/20 active:scale-95 disabled:opacity-50"
                  >
                    {loading ? 'Analyzing...' : 'Generate My Blueprint'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 animate-in fade-in zoom-in duration-700">
            <div className="w-24 h-24 bg-blue-600 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-blue-600/40">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
            </div>
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-6">Analysis Initiated.</h2>
            <p className="text-slate-400 text-xl font-medium max-w-xl mx-auto leading-relaxed mb-10">
              Our architects have received your industry profile for <span className="text-blue-500 font-black">{industry}</span>. 
              We will send your blueprint to <span className="text-white font-bold">{email}</span> within 24 hours.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-blue-600 transition-colors"
            >
              ← Back to Overview
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AnalysisTool;
