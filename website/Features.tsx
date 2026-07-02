
import React from 'react';

const Features: React.FC = () => {
  const features = [
    { title: 'Visual Node Logic', desc: 'Drag-and-drop orchestration nodes to build multi-agent sequences without code.', icon: 'M4 6h16M4 12h16m-7 6h7' },
    { title: 'Native Vector Stores', desc: 'Every agent has long-term memory via integrated vector databases.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { title: 'Secure Enclaves', desc: 'Enterprise data remains siloed and encrypted at rest with private model deployment.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
    { title: 'Real-time Execution', desc: 'Logic updates propagate instantly across your entire agent workforce.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' }
  ];

  return (
    <section className="py-32 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 reveal">
          <h2 className="text-5xl font-black mb-6 uppercase tracking-tight">The Jento <span className="text-blue-500">Infrastructure</span></h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Hardware-accelerated logic for the next phase of business automation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <div key={i} className={`reveal delay-${(i + 1) * 100} p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-blue-500 transition-all group`}>
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={f.icon}></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm font-medium">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-32 p-12 bg-gradient-to-br from-blue-900/40 to-slate-900 rounded-[3rem] border border-blue-500/20 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h3 className="text-3xl font-black mb-6 leading-tight uppercase">Unlimited Nodes. <br /> Zero Latency.</h3>
            <p className="text-slate-400 mb-8">Our proprietary execution fabric ensures that even the most complex 100-node workflows process in milliseconds.</p>
            <div className="flex space-x-6">
              <div className="text-center">
                <p className="text-3xl font-black text-blue-500">12ms</p>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Avg Latency</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-blue-500">99.99%</p>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Uptime Core</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800" alt="Server Infrastructure" loading="lazy" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
