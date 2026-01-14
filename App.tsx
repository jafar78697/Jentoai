
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import AgentCard from './AgentCard';
import AnalysisTool from './AnalysisTool';
import Solutions from './Solutions';
import Contact from './Contact';
import ServicesPage from './Services';
import IndustriesPage from './Industries';
import AboutPage from './About';
import HolographicCore from './HolographicCore';
import N8nChatWidget from './N8nChatWidget';
import { Page } from './types';
import { AGENTS, PRICING, CONFIG } from './constants';

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');

  // Lead Capture State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [industry, setIndustry] = useState('');

  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.05, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [page]);

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name || !industry) return;

    setIsSubmitting(true);

    try {
      // Using a slightly more robust fetch approach for Google Apps Script
      await fetch(CONFIG.bookingWebhookUrl, {
        method: 'POST',
        mode: 'no-cors', // Apps Script requires no-cors for direct browser POSTs to bypass preflight issues
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          your_name: name,
          industry_sector: industry,
          work_email: email,
          timestamp: new Date().toISOString(),
          source: 'Home Booking'
        }),
      });

      // Since 'no-cors' doesn't return the response body, we assume success if no error is thrown
      setBookingSubmitted(true);
    } catch (error) {
      console.error('Submission Error:', error);
      alert('Connection check: The automation node is busy. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const navigateTo = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (page) {
      case 'agents':
        return (
          <section className="py-32 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-24 reveal">
                <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4">The Workforce of the Future</p>
                <h2 className="text-6xl font-black text-slate-900 uppercase tracking-tighter mb-4 leading-none">High-Performance <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Autonomous Nodes.</span></h2>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Jento Agents execute business logic through direct system integration, synchronized in real-time to your central industry ledger.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
                {AGENTS.map((agent, i) => (
                  <div key={agent.id} className={`reveal delay-${(i + 1) * 100}`}>
                    <AgentCard agent={agent} />
                  </div>
                ))}
              </div>

              {/* Resilience & Maintenance Section */}
              <div className="reveal p-12 md:p-20 bg-slate-950 rounded-[4rem] text-center">
                <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6">Mission Continuity</p>
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-8">Agent Resilience & <span className="text-blue-500">Autonomous Health.</span></h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
                  {[
                    { t: 'Self-Correction', d: 'Agents detect workflow errors in real-time and attempt autonomous recovery via retry-logic.' },
                    { t: 'Active Monitoring', d: 'Every thought log is indexed and audited for bias or reasoning drift automatically.' },
                    { t: 'Human-in-the-loop', d: 'High-stakes decisions are queued for human review if reasoning flags hit < 95%.' }
                  ].map((item, i) => (
                    <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-white mb-3 underline decoration-blue-500 underline-offset-8 decoration-2">{item.t}</h4>
                      <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      case 'pricing':
        return (
          <section className="py-32 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4 reveal">Investment Model</p>
              <h2 className="text-6xl font-black text-slate-900 uppercase tracking-tighter mb-8 reveal">Transparent <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Workflow Pricing.</span></h2>
              <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto mb-20 reveal">Bespoke setup per workflow node. Each solution is built to own, not to rent.</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
                {PRICING.map((plan, i) => (
                  <div key={i} className={`reveal delay-${(i + 1) * 100} relative bg-white p-12 rounded-[3rem] border-2 ${plan.recommended ? 'border-blue-600 shadow-2xl scale-105 z-10' : 'border-slate-100'} transition-all`}>
                    {plan.recommended && (
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-xl">Best Value Protocol</div>
                    )}
                    <h3 className="text-2xl font-black mb-4 uppercase text-slate-900">{plan.name}</h3>
                    <div className="flex items-center justify-center mb-10">
                      <span className="text-5xl font-black text-slate-900">{plan.price}</span>
                    </div>
                    <ul className="text-left space-y-5 mb-12">
                      {plan.features.map((feat, j) => (
                        <li key={j} className="flex items-center space-x-4 text-slate-500 font-medium text-sm">
                          <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <button onClick={() => navigateTo('book-call')} className="w-full py-5 rounded-2xl bg-blue-600 text-white font-black uppercase tracking-widest text-[10px] transition-all hover:bg-slate-900 shadow-lg shadow-blue-500/20">
                      Select Plan
                    </button>
                  </div>
                ))}
              </div>

              {/* Enterprise Add-ons */}
              <div className="reveal mb-40 text-left">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div>
                    <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Scale Extensions</p>
                    <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-8 leading-tight">Enterprise <br /> <span className="text-blue-600">Infrastructure Add-ons.</span></h3>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                      Need specialized high-security or large-scale deployment? We offer custom architecture extensions for enterprise partners.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { t: 'Private n8n Hosting', d: 'Secure, dedicated cloud instance.' },
                      { t: 'SLA Support', d: '4-hour technical response time.' },
                      { t: 'Dedicated Architect', d: 'Ongoing monthly optimization.' },
                      { t: 'Custom LLM Training', d: 'Fine-tuned models on your data.' }
                    ].map((item, i) => (
                      <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-2">{item.t}</h4>
                        <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">{item.d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="reveal pb-20">
                <div className="text-center mb-16">
                  <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Knowledge Base</p>
                  <h3 className="text-5xl font-black text-slate-900 uppercase tracking-tighter">Common <span className="text-blue-600">Questions.</span></h3>
                </div>
                <div className="max-w-4xl mx-auto space-y-6 text-left">
                  {[
                    { q: 'Is there a monthly subscription?', a: 'We primarily focus on build-to-own models where you pay for the architecture upfront. Ongoing costs are typically tiny API usage fees paid directly to providers (Google/n8n/Pinecone).' },
                    { q: 'How long does a typical build take?', a: 'Starter nodes take 1-3 days. Enterprise transformations depend on complexity but usually range from 2-4 weeks for full deployment.' },
                    { q: 'Can I monitor what the agents are doing?', a: 'Yes. Our n8n architecture provides a visual execution log. You can see every thought, decision, and action taken by your agents in real-time.' },
                    { q: 'Is my data secure?', a: 'Completely. We specialize in "Siloed Architecture" where your data never leaves your private cloud instance or vector database. We never use your data to train generic AI models.' }
                  ].map((faq, i) => (
                    <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm">
                      <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-4">{faq.q}</h4>
                      <p className="text-slate-500 font-medium leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      case 'book-call':
        return (
          <section className="py-32 md:py-48 bg-slate-50 min-h-screen flex items-center">
            <div className="max-w-4xl mx-auto px-6 text-center">
              {!bookingSubmitted ? (
                <div className="reveal">
                  <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Consultation Access</p>
                  <h2 className="text-6xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter mb-8 leading-none">Schedule Your <br /> <span className="text-blue-600">Strategy Session.</span></h2>
                  <p className="text-lg text-slate-500 font-medium mb-16 max-w-xl mx-auto leading-relaxed">
                    Leave your details below. Our technical architects will review your industry context before our session.
                  </p>

                  <form onSubmit={handleBookingSubmit} className="max-w-2xl mx-auto space-y-6">
                    <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6 text-left relative">

                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Full Name</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full px-8 py-5 bg-slate-50 rounded-[1.8rem] text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Industry</label>
                        <input
                          type="text"
                          required
                          value={industry}
                          onChange={(e) => setIndustry(e.target.value)}
                          placeholder="e.g. Real Estate"
                          className="w-full px-8 py-5 bg-slate-50 rounded-[1.8rem] text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm"
                        />
                      </div>

                      <div className="md:col-span-2 space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Business Email</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="w-full px-8 py-5 bg-slate-50 rounded-[1.8rem] text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm"
                        />
                      </div>

                      <div className="md:col-span-2 pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-6 bg-blue-600 text-white rounded-[1.8rem] font-black uppercase tracking-widest text-[12px] hover:bg-slate-900 transition-all shadow-xl shadow-blue-500/20 active:scale-95 disabled:opacity-50"
                        >
                          {isSubmitting ? 'Processing Request...' : 'Confirm My Session'}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="animate-in fade-in zoom-in duration-700 text-center py-12">
                  <div className="w-24 h-24 bg-green-500 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-green-500/30">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h2 className="text-5xl font-black uppercase tracking-tighter mb-6">Request Received.</h2>
                  <p className="text-slate-400 text-xl font-medium max-w-xl mx-auto leading-relaxed mb-12">
                    Thank you, <span className="text-slate-900 font-black">{name.split(' ')[0]}</span>. Our team has received your inquiry for the <span className="text-blue-600 font-black">{industry}</span> sector. We will contact you at <span className="text-slate-900 font-black">{email}</span> shortly.
                  </p>
                  <button
                    onClick={() => { setBookingSubmitted(false); setPage('home'); }}
                    className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    ← Back to Home
                  </button>
                </div>
              )}
            </div>
          </section>
        );
      case 'contact':
        return <Contact />;
      case 'services':
        return <ServicesPage />;
      case 'use-cases':
        return <Solutions />;
      case 'industries':
        return <IndustriesPage />;
      case 'about':
        return <AboutPage />;
      default:
        return (
          <>
            <Hero setPage={setPage} />
            <Solutions />
            <AnalysisTool />
            <section className="py-32 bg-slate-50 overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32">
                <div className="reveal flex-1 w-full lg:max-w-md">
                  <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">The Engine</p>
                  <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-6 leading-tight">The Jento <br /> <span className="text-blue-600">Autonomous Core.</span></h2>
                  <ul className="space-y-4">
                    {[
                      { t: 'Decision Node', d: 'High-Level Reasoning' },
                      { t: 'Persistence Layer', d: 'Secure Lead Indexing' },
                      { t: 'Architecture', d: 'Cloud-Native Workflows' }
                    ].map((item, i) => (
                      <li key={i} className="flex items-center space-x-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-[10px] shrink-0">0{i + 1}</div>
                        <div>
                          <h4 className="font-black text-slate-900 uppercase tracking-tighter text-xs">{item.t}</h4>
                          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{item.d}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="reveal delay-300 flex-[1.5] w-full lg:w-auto h-full min-h-[500px] flex items-center justify-center">
                  <HolographicCore />
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar currentPage={page} setPage={setPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* PROFESSIONAL MULTI-COLUMN FOOTER */}
      <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            {/* Column 1: Brand */}
            <div className="space-y-6">
              <div
                className="flex items-center space-x-3 cursor-pointer group"
                onClick={() => navigateTo('home')}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-xl shadow-lg shadow-blue-500/20">
                  <svg viewBox="0 0 100 100" className="w-6 h-6 fill-white">
                    <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z M50 25 L30 40 L30 60 L50 75 L70 60 L70 40 Z" />
                  </svg>
                </div>
                <span className="text-2xl font-black tracking-tighter text-white uppercase">
                  Jento<span className="text-blue-600 font-light">AI</span>
                </span>
              </div>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                The global leader in autonomous business architecture. We specialize in enterprise-grade n8n automation and custom AI agent development for high-scale teams.
              </p>
              <div className="pt-4">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-2">Service Hubs</p>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Global Operations | Remote-First Architecture</p>
              </div>
            </div>

            {/* Column 2: Platform */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-8">Solutions</h4>
              <ul className="space-y-4">
                {['AI Agents', 'Use Cases', 'Pricing', 'Infrastructure'].map(item => (
                  <li key={item}>
                    <button
                      onClick={() => navigateTo(item.toLowerCase().replace(' ', '-') as Page)}
                      className="text-slate-400 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Expertise */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-8">Expertise</h4>
              <ul className="space-y-4">
                {['n8n Workflows', 'Lead Generation', 'AI Consulting', 'Support Bots'].map(item => (
                  <li key={item}>
                    <button
                      onClick={() => navigateTo('services')}
                      className="text-slate-400 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Architecture Status */}
            <div className="p-8 bg-slate-900 rounded-[2rem] border border-slate-800">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-4 flex items-center">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                System Protocol: Active
              </h4>
              <p className="text-[9px] font-mono text-slate-500 mb-6 uppercase tracking-wider">
                Node Location: Distributed Cloud
              </p>
              <a
                href="mailto:info@jentoai.com"
                className="inline-block w-full py-4 bg-blue-600 text-white text-center rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-blue-600 transition-all shadow-xl shadow-blue-500/10"
              >
                Start Your Automation
              </a>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-600 text-[9px] font-black uppercase tracking-[0.4em]">
              © 2025 JENTO AI SYSTEMS | ENTERPRISE AI AUTOMATION
            </p>
            <div className="flex items-center space-x-8">
              <button className="text-slate-600 hover:text-white text-[9px] font-black uppercase tracking-widest transition-colors">Security Protocol</button>
              <button className="text-slate-600 hover:text-white text-[9px] font-black uppercase tracking-widest transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>
      <N8nChatWidget />
    </div>
  );
};

export default App;
