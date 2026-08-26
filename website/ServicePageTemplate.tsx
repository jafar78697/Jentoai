import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { ServicePageData } from './servicePageData';

interface Props {
  data: ServicePageData;
  setPage: (page: Page) => void;
}

const ServicePageTemplate: React.FC<Props> = ({ data, setPage }) => {
  // ── Calculator State ─────────────────────────────────────────────────────
  const [callsPerDay, setCallsPerDay] = useState<number>(30);
  const [avgCallMins, setAvgCallMins] = useState<number>(3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ── Calculator Logic ─────────────────────────────────────────────────────
  const workingDaysPerMonth = 30; // AI is active all month
  const totalMinsPerMonth = callsPerDay * avgCallMins * workingDaysPerMonth;

  // AI cost: phone number monthly + (infra per min + AI fee per min) * total mins
  const aiCostPerMonth =
    data.calcPhoneMonthly +
    totalMinsPerMonth * (data.calcCostPerMin + data.calcAiFeePerMin);

  // Human cost: Average answering service charges around $1.25 per minute
  const humanCostPerMonth = Math.round(totalMinsPerMonth * 1.25);

  const monthlySavings = Math.max(0, humanCostPerMonth - aiCostPerMonth);
  const savingsPercent = humanCostPerMonth > 0
    ? Math.round((monthlySavings / humanCostPerMonth) * 100)
    : 0;

  // ── FAQ State ────────────────────────────────────────────────────────────
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <article className="bg-white min-h-screen">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <header className="relative pt-28 pb-24 bg-white overflow-hidden">
        {/* Background gradient blobs */}
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-blue-100 rounded-full blur-[160px] opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-indigo-100 rounded-full blur-[120px] opacity-40 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-[10px] font-black uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Jento AI Voice Agents
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-8">
            {data.h1}
          </h1>

          <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-3xl mb-5">
            {data.heroParagraph1}
          </p>
          <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl mb-12">
            {data.heroParagraph2}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setPage('book-call')}
              className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-slate-900 transition-all shadow-xl shadow-blue-600/20"
            >
              Book a Free AI Demo
            </button>
            <button
              onClick={() => setPage('aiagent')}
              className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-slate-50 transition-all border border-slate-200"
            >
              See How It Works
            </button>
          </div>
        </div>
      </header>

      {/* ── CALCULATOR ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 reveal">
            <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Calculate Your Savings</p>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-6 leading-none">
              See how much <span className="text-blue-600">manual work</span> <br /> is costing you.
            </h2>
          </div>

          <div className="w-full max-w-4xl mx-auto p-8 md:p-12 bg-slate-900 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/20 transition-all duration-700"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Controls */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-white text-2xl font-black uppercase tracking-tight mb-2">Cost Savings <span className="text-blue-500">Calculator.</span></h3>
                  <p className="text-slate-400 text-sm font-medium">Compare human vs AI answering service costs.</p>
                </div>
                <div className="space-y-6">
                  {/* Input 1 */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm font-bold">
                      <label className="text-slate-300">Calls Per Day</label>
                      <span className="text-blue-400">{callsPerDay}</span>
                    </div>
                    <input
                      type="range" min="5" max="300" step="5"
                      value={callsPerDay}
                      onChange={e => setCallsPerDay(Number(e.target.value))}
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-500 transition-all"
                    />
                  </div>

                  {/* Input 2 */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm font-bold">
                      <label className="text-slate-300">Avg Call Duration</label>
                      <span className="text-blue-400">{avgCallMins} min</span>
                    </div>
                    <input
                      type="range" min="1" max="15" step="1"
                      value={avgCallMins}
                      onChange={e => setAvgCallMins(Number(e.target.value))}
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-500 transition-all"
                    />
                  </div>

                  {/* Cost breakdown */}
                  <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3 mt-4">
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-4">AI Cost Breakdown (Monthly)</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400 font-medium">Phone Number</span>
                      <span className="text-slate-200 font-black">${data.calcPhoneMonthly.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400 font-medium">Infrastructure ({totalMinsPerMonth.toLocaleString()} min)</span>
                      <span className="text-slate-200 font-black">${(totalMinsPerMonth * data.calcCostPerMin).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm border-t border-slate-800 pt-3">
                      <span className="text-slate-400 font-medium">AI Processing ({totalMinsPerMonth.toLocaleString()} min)</span>
                      <span className="text-slate-200 font-black">${(totalMinsPerMonth * data.calcAiFeePerMin).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Display */}
              <div className="bg-blue-600 rounded-[2.5rem] p-8 text-center text-white relative overflow-hidden shadow-lg shadow-blue-900/50">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700"></div>
                <div className="relative z-10 flex flex-col h-full justify-center">
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                      <p className="text-blue-100 text-[9px] font-black uppercase tracking-widest mb-1">Human Cost</p>
                      <p className="text-xl font-black text-white">${humanCostPerMonth.toLocaleString()}<span className="text-xs font-medium opacity-70">/mo</span></p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                      <p className="text-blue-100 text-[9px] font-black uppercase tracking-widest mb-1">AI Cost</p>
                      <p className="text-xl font-black text-white">${Math.round(aiCostPerMonth).toLocaleString()}<span className="text-xs font-medium opacity-70">/mo</span></p>
                    </div>
                  </div>

                  <p className="text-blue-100 text-[10px] font-black uppercase tracking-[0.3em] mb-4">You Save Every Month</p>
                  <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">
                    ${Math.round(monthlySavings).toLocaleString()}
                  </h2>

                  <div className="inline-block px-4 py-2 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 mx-auto">
                    <span className="text-xs font-bold">{savingsPercent}% cost reduction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Formula block */}
          {data.roiFormula && (
            <div className="mt-16 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-black text-slate-900 mb-4">{data.roiFormula.heading}</h3>
              <p className="text-slate-500 font-medium mb-6 leading-relaxed">{data.roiFormula.text}</p>
              <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 mb-6 inline-block">
                <code className="text-blue-600 font-mono font-bold text-sm md:text-base">{data.roiFormula.formula}</code>
              </div>
              <p className="text-slate-600 font-medium text-sm">{data.roiFormula.cta}</p>
            </div>
          )}
        </div>
      </section>

      {/* ── PROBLEM ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">The Problem</p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-8">{data.problemHeading}</h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed mb-6">{data.problemParagraph1}</p>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">{data.problemParagraph2}</p>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Capabilities</p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">What Jento AI Can Do</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.featureCards.map((card, i) => (
              <div key={i} className="group bg-slate-50 border border-slate-100 rounded-[2rem] p-8 hover:shadow-xl hover:border-blue-100 hover:-translate-y-2 transition-all duration-500">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6" dangerouslySetInnerHTML={{ __html: card.icon }} />
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-3">{card.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>

          {/* ── WHAT IT HANDLES ──────────────────────────────────────────────── */}
          {data.whatItHandles && data.whatItHandles.length > 0 && (
            <div className="mt-16 bg-slate-50 border border-slate-100 rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl font-black text-slate-900 mb-6">What Can It Handle?</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.whatItHandles.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                    <svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-slate-500 text-sm font-medium">The goal is not to replace your business expertise. The goal is to make sure every caller gets a quick response and your team receives clean, useful information.</p>
            </div>
          )}

          {/* ── WHAT IT ESCALATES ────────────────────────────────────────────── */}
          {data.whatItShouldEscalate && data.whatItShouldEscalate.length > 0 && (
            <div className="mt-8 bg-blue-50 border border-blue-100 rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl font-black text-slate-900 mb-4">What Should Still Go to a Human?</h3>
              <p className="text-slate-600 font-medium text-sm mb-6">Some calls should still be handled by a real person. Jento AI can be designed to transfer or escalate calls when the customer is angry, the request is complex, pricing needs manual approval, or the situation is urgent.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.whatItShouldEscalate.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                    <svg className="w-5 h-5 text-blue-600/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Industries We Serve</p>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">{data.industryHeading}</h2>
            <p className="text-slate-400 font-medium max-w-2xl mx-auto">{data.industrySubtext}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {data.industryExamples ? (
              data.industryExamples.map((ind, i) => (
                <div key={i} className="group bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 cursor-default">
                  <h3 className="text-sm font-black text-slate-200 group-hover:text-white uppercase tracking-widest mb-2">
                    {ind.title}
                  </h3>
                  <p className="text-slate-400 group-hover:text-blue-100 text-xs font-medium leading-relaxed transition-colors">
                    {ind.text}
                  </p>
                </div>
              ))
            ) : (
              data.industryCards.map((industry, i) => (
                <div key={i} className="group bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 cursor-default">
                  <h3 className="text-sm font-black text-slate-200 group-hover:text-white uppercase tracking-widest mb-2">
                    AI Agent for {industry}
                  </h3>
                  <p className="text-slate-500 group-hover:text-blue-100 text-xs font-medium leading-relaxed transition-colors">
                    Handle customer calls, collect details, and send qualified leads to your team.
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">The Process</p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">{data.stepsHeading || 'How Our AI Agent Works'}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* connector line */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-blue-100" />
            {data.steps.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-6 shadow-lg shadow-blue-500/20 relative z-10">
                  0{i + 1}
                </div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JENTO AI SERVICES ─────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">What We Build</p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Jento AI Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: 'AI Calling Agent', d: 'Custom AI voice agents that answer calls, talk with customers, collect lead details, and support appointment booking.' },
              { t: 'AI Appointment Booking Agent', d: 'Automated booking agents that help customers schedule appointments and send updates to your calendar or CRM.' },
              { t: 'AI Lead Follow-Up Agent', d: 'AI follow-up systems that contact leads through call, SMS, or email so your business never loses a potential customer.' },
              { t: 'n8n Automation Services', d: 'We build n8n workflows to connect your AI agent with Google Sheets, Gmail, CRMs, calendars, forms, and other business tools.' },
              { t: 'Custom AI Business Automation', d: 'Automation systems for repetitive business tasks like data entry, customer messages, reminders, and lead management.' },
              { t: 'CRM & Integration Setup', d: 'Connect your AI agent to HubSpot, Salesforce, Pipedrive, or any custom CRM. All data syncs in real-time.' },
            ].map((s, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
                <div className="w-10 h-10 bg-blue-600 rounded-xl mb-6 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-3">{s.t}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Why It Works</p>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-8">Benefits of Using an AI Agent</h2>
              <p className="text-slate-500 font-medium leading-relaxed text-lg">{data.benefitsParagraph}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700 text-sm font-bold">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Get Started</p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">Want an AI Agent for Your Business?</h2>
          <p className="text-slate-400 font-medium leading-relaxed text-lg mb-12">
            Jento AI can build a custom AI agent for your business based on your services, customers, call flow, and booking process. We can help you automate calls, capture more leads, and improve customer response time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setPage('book-call')}
              className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-white hover:text-blue-700 transition-all shadow-xl shadow-blue-600/20"
            >
              Book a Free Demo
            </button>
            <button
              onClick={() => setPage('contact')}
              className="px-10 py-5 bg-slate-800 text-slate-200 border border-slate-700 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-slate-700 transition-all"
            >
              Contact Jento AI
            </button>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm font-black text-slate-900 uppercase tracking-tight">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-blue-600 flex-shrink-0 ml-4 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-slate-500 text-sm font-medium leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </article>
  );
};

export default ServicePageTemplate;
