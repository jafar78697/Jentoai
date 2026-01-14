
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl reveal">
          <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Our Mission</p>
          <h2 className="text-7xl font-black text-slate-900 uppercase tracking-tighter mb-12 leading-none">The End of <br /> <span className="text-blue-600">Manual Operations.</span></h2>
          <p className="text-2xl text-slate-500 font-medium leading-relaxed mb-16">
            Jento AI was founded on a single premise: Human potential is wasted on repetitive logic. We build the autonomous workforce that allows visionaries to focus on vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32 reveal delay-200">
          <div>
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">n8n Workflow Mastery</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Our architects are specialized in the n8n ecosystem, building transparent, visual automation flows that connect your local and cloud tech stack. No vendor lock-in—you own the logic and the assets.</p>
          </div>
          <div>
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Gemini-Powered Intelligence</h4>
            <p className="text-slate-500 text-sm leading-relaxed">We leverage advanced Google Gemini models to provide agents with high-reasoning capabilities. From complex document parsing to emotional intelligence in customer care, our bots are built to understand.</p>
          </div>
          <div>
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Scalable AI Workforce</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Whether you are a local agency or a global enterprise, our autonomous nodes scale with you. While your team focuses on high-level strategy, Jento Nodes work 24/7/365 to handle your lead generation and support.</p>
          </div>
        </div>

        <div className="reveal delay-300 relative rounded-[3rem] overflow-hidden aspect-[21/9] shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200"
            alt="The Studio"
            className="w-full h-full object-cover grayscale"
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
