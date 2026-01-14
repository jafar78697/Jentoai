
import React from 'react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: 'Automated Sales Pipeline',
      industry: 'For Agencies',
      desc: 'Autonomous agents that find leads, verify data, and start multi-channel conversations. Saves an average of 35 hours per week on manual prospecting.',
      metrics: ['-90% Manual Outreach', '+400% Lead Volume'],
      img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Property Concierge Agent',
      industry: 'Real Estate',
      desc: 'Qualify buyers 24/7 and book viewings via WhatsApp API. Reduces lead response time from hours to seconds.',
      metrics: ['< 2s Response Time', '100% Lead Coverage'],
      img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Invoice Intelligence Node',
      industry: 'Finance & Ops',
      desc: 'AI that extracts data from invoices and fillings systems autonomously. Achieves 99.9% accuracy with zero manual entry.',
      metrics: ['0% Error Rate', 'Instant Processing'],
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'RetainBot Churn Sentry',
      industry: 'SaaS Software',
      desc: 'Predictive churn analysis that triggers automated retention flows. Increases LTV by capturing disengaged users before they cancel.',
      metrics: ['-25% Churn Rate', 'Real-time Alerts'],
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'RecruiteX Talent Sourcing',
      industry: 'HR & Recruiting',
      desc: 'Sourcing agents that scan LinkedIn and screen resumes based on technical benchmarks. Fills pipelines 4x faster than human recruiters.',
      metrics: ['4x Talent Speed', '-70% Cost per Hire'],
      img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Technical Support Aura',
      industry: 'Customer Success',
      desc: 'Human-like reasoning for complex support tickets using vector stores. Deflects 70%+ of tickets from your human support team.',
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
                <div className="absolute bottom-8 left-8">
                  <span className="px-3 py-1 bg-blue-600 text-white text-[8px] font-black uppercase tracking-widest rounded-full">{s.industry}</span>
                  <h3 className="text-white text-2xl font-black mt-2 leading-tight uppercase tracking-tight">{s.title}</h3>
                </div>
              </div>
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
        <div className="reveal p-12 md:p-24 bg-slate-50 rounded-[4rem] border border-slate-100 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-6">Inside the Engine</p>
            <h3 className="text-5xl font-black text-slate-900 uppercase tracking-tighter mb-8">Architected for <span className="text-blue-600">Predictability.</span></h3>
            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
              Every solution we build follows a strict "Reasoning + Persistence" model. We don't rely on probabilistic AI outputs; we build deterministic logic gates that ensure 100% accuracy for your business data.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-950 mb-4">Memory Indexing</h4>
                <p className="text-sm text-slate-500 font-medium">Agents use RAG (Retrieval Augmented Generation) to access your proprietary data without ever halluncinating.</p>
              </div>
              <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-950 mb-4">Tool Orchestration</h4>
                <p className="text-sm text-slate-500 font-medium">Direct n8n connections allow agents to write, read, and delete data across 400+ SaaS applications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
