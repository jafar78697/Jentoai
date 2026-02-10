
import React from 'react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: 'How to Automate Lead Generation',
      problem: 'Spending 35+ hours/week on manual prospecting?',
      industry: 'For Agencies',
      desc: 'Our autonomous agents find leads, verify data, and start multi-channel conversations automatically. Stop wasting time on repetitive outreach.',
      metrics: ['-90% Manual Outreach', '+400% Lead Volume'],
      img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'AI Customer Support That Works 24/7',
      problem: 'Leads going cold because you can\'t respond fast enough?',
      industry: 'Real Estate',
      desc: 'Qualify buyers around the clock and book viewings via WhatsApp API. Reduce lead response time from hours to seconds.',
      metrics: ['< 2s Response Time', '100% Lead Coverage'],
      img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'How to Automate Invoice Processing',
      problem: 'Manual data entry causing errors and delays?',
      industry: 'Finance & Ops',
      desc: 'AI that extracts data from invoices and fills systems autonomously. Achieve 99.9% accuracy with zero manual entry.',
      metrics: ['0% Error Rate', 'Instant Processing'],
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'How to Reduce Customer Churn with AI',
      problem: 'Losing customers before you even know they\'re unhappy?',
      industry: 'SaaS Software',
      desc: 'Predictive churn analysis that triggers automated retention flows. Capture disengaged users before they cancel.',
      metrics: ['-25% Churn Rate', 'Real-time Alerts'],
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'AI Recruiting: Hire 4x Faster',
      problem: 'Talent pipeline moving too slowly?',
      industry: 'HR & Recruiting',
      desc: 'Sourcing agents that scan LinkedIn and screen resumes based on technical benchmarks. Fill pipelines 4x faster than human recruiters.',
      metrics: ['4x Talent Speed', '-70% Cost per Hire'],
      img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Automate Customer Support Without Losing Quality',
      problem: 'Support team overwhelmed with repetitive tickets?',
      industry: 'Customer Success',
      desc: 'Human-like reasoning for complex support tickets using vector stores. Deflect 70%+ of tickets from your human support team.',
      metrics: ['70% Deflection', 'Instant Satisfaction'],
      img: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal flex flex-col lg:flex-row lg:items-end justify-between mb-24">
          <div className="max-w-2xl">
            <p className="text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-4">Real-World AI Problem Solving</p>
            <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tight leading-none">Solving High-Impact <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Business Bottlenecks.</span></h2>
          </div>
          <p className="text-slate-500 max-w-md mt-6 lg:mt-0 font-medium leading-relaxed">We focus on high-impact automation—the critical paths where manual logic slow down your enterprise growth and scalability.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-40">
          {solutions.map((s, i) => (
            <div key={i} className={`reveal delay-${(i % 3 + 1) * 200} group cursor-default`}>
              <div className="relative h-80 rounded-[2.5rem] overflow-hidden mb-8 shadow-xl transition-all group-hover:shadow-blue-500/10 bg-slate-100">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="px-3 py-1 bg-blue-600 text-white text-[8px] font-black uppercase tracking-widest rounded-full">{s.industry}</span>
                  <h3 className="text-white text-xl md:text-2xl font-black mt-2 leading-tight tracking-tight">{s.title}</h3>
                </div>
              </div>
              <p className="text-blue-600 font-bold text-sm px-4 mb-2">{s.problem}</p>
              <p className="text-slate-600 font-medium px-4 leading-relaxed mb-6">{s.desc}</p>
              <div className="px-4 flex flex-wrap gap-2">
                {s.metrics.map((m, j) => (
                  <span key={j} className="px-3 py-1 bg-slate-100 border border-slate-200 text-slate-900 text-[9px] font-black uppercase tracking-widest rounded-lg">{m}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Deep Dive Block */}
        <div className="reveal relative overflow-hidden rounded-[3rem] bg-slate-900 p-12 md:p-24 text-center shadow-2xl">
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 z-0 opacity-20">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-500" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-600/30 blur-[100px]"></div>
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-purple-600/20 blur-[100px]"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-900/50 px-4 py-2 mb-8 border border-blue-500/30 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-300">Inside the Engine</span>
            </div>

            <h3 className="mb-8 text-5xl font-black uppercase tracking-tighter text-white md:text-7xl">
              Architected for <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Predictability.</span>
            </h3>

            <p className="mb-16 text-lg font-medium leading-relaxed text-slate-400 md:text-xl">
              Every solution we build follows a strict "Reasoning + Persistence" model. We don't rely on probabilistic AI outputs; we build <span className="text-white font-bold">deterministic logic gates</span> that ensure 100% accuracy for your business data.
            </p>

            <div className="grid gap-6 md:grid-cols-2 text-left">
              <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h4 className="mb-3 text-sm font-black uppercase tracking-widest text-white">Memory Indexing (RAG)</h4>
                <p className="text-sm font-medium leading-relaxed text-slate-400">Agents retrieve specific context from your proprietary data (PDFs, SQL, Notion) without ever hallucinating or leaking privacy.</p>
              </div>

              <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/20 text-purple-400 shadow-lg shadow-purple-900/20 group-hover:scale-110 transition-transform">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h4 className="mb-3 text-sm font-black uppercase tracking-widest text-white">Tool Orchestration</h4>
                <p className="text-sm font-medium leading-relaxed text-slate-400">Direct n8n connections allow agents to write, read, and delete data across <span className="text-white">400+ SaaS applications</span> with transaction safety.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
