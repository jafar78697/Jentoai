
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="max-w-4xl reveal">
          <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Our Mission</p>
          <h2 className="text-7xl font-black text-slate-900 uppercase tracking-tighter mb-12 leading-none">The End of <br /> <span className="text-blue-600">Manual Operations.</span></h2>
          <p className="text-2xl text-slate-500 font-medium leading-relaxed mb-16">
            Jento AI was founded on a single premise: Human potential is wasted on repetitive logic. We build the autonomous workforce that allows visionaries to focus on vision.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-40 reveal delay-200">
          <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">n8n Workflow Mastery</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Our architects are specialized in the n8n ecosystem, building transparent, visual automation flows that connect your local and cloud tech stack. No vendor lock-in—you own the logic and the assets.</p>
          </div>
          <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Gemini-Powered Intelligence</h4>
            <p className="text-slate-500 text-sm leading-relaxed">We leverage advanced Google Gemini models to provide agents with high-reasoning capabilities. From complex document parsing to emotional intelligence in customer care, our bots are built to understand.</p>
          </div>
          <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Scalable AI Workforce</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Whether you are a local agency or a global enterprise, our autonomous nodes scale with you. While your team focuses on high-level strategy, Jento Nodes work 24/7/365 to handle your lead generation and support.</p>
          </div>
        </div>

        {/* The Jento Lifecycle */}
        <div className="mb-40 reveal">
          <div className="text-center mb-20">
            <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">The Methodology</p>
            <h3 className="text-5xl font-black text-slate-900 uppercase tracking-tighter">The Transformation <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Lifecycle.</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
            {[
              { t: 'Discovery', d: 'We audit your internal workflows to identify high-cost manual tasks and logic bottlenecks.' },
              { t: 'Architecture', d: 'Our engineers design a bespoke n8n blueprint that integrates your existing CRM and data tools.' },
              { t: 'Deployment', d: 'The "Node" is activated. We run parallel human-plus-AI tests to ensure 100% accuracy.' },
              { t: 'Optimization', d: 'Autonomous agents learn from your feedback, self-correcting and getting faster over time.' }
            ].map((step, i) => (
              <div key={i} className="relative z-10 p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">0{i + 1}</div>
                <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-4">{step.t}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Blueprint */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <div className="reveal">
            <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Built to Last</p>
            <h3 className="text-5xl font-black text-slate-900 uppercase tracking-tighter mb-8 leading-tight">The Modern AI <br /> <span className="text-blue-600">Enterprise Stack.</span></h3>
            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
              We don't believe in "black-box" AI. Our architecture is built on the most reliable, high-performance tools in the industry, ensuring your business stays agile and competitive.
            </p>
            <div className="space-y-4">
              {[
                { l: 'Orchestration', v: 'n8n Workflow Engine' },
                { l: 'Reasoning', v: 'Google Gemini 1.5 Pro' },
                { l: 'Memory', v: 'Pinecone Vector Database' },
                { l: 'Data Flow', v: 'Webhooks & RESTful Protocols' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 border-b border-slate-100">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.l}</span>
                  <span className="text-sm font-black text-slate-900 uppercase">{item.v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal delay-200">
            <div className="aspect-square bg-slate-950 rounded-[3rem] overflow-hidden relative shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
                alt="Tech Stack"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply"></div>
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                  </div>
                  <h4 className="text-2xl text-white font-black uppercase tracking-widest">Ownership & <br /> Transparency</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Visual */}
        <div className="reveal delay-300 relative rounded-[3rem] overflow-hidden aspect-[21/9] shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200"
            alt="The Studio"
            className="w-full h-full object-cover grayscale"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-12 bg-white/10 backdrop-blur-xl rounded-[3rem] border border-white/20">
              <p className="text-white text-[10px] font-black uppercase tracking-[0.5em] mb-4">The Future is Autonomous</p>
              <h3 className="text-4xl text-white font-black uppercase tracking-tight">Scale Without Limits.</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
