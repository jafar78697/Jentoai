
import React from 'react';

const HolographicCore: React.FC = () => {
  return (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
      {/* Background Grid Pattern (Blueprint Style) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]"></div>

      {/* SVG Connectors Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
            <stop offset="50%" stopColor="#2563EB" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </linearGradient>
          <marker id="dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4">
            <circle cx="5" cy="5" r="5" fill="#2563EB" />
          </marker>
        </defs>

        {/* Connectivity Lines */}
        {/* Top Right */}
        <path d="M50% 50% L80% 25%" stroke="url(#lineGrad)" strokeWidth="1" className="animate-pulse" strokeDasharray="5,5" />
        {/* Top Left */}
        <path d="M50% 50% L20% 25%" stroke="url(#lineGrad)" strokeWidth="1" className="animate-pulse delay-75" strokeDasharray="5,5" />
        {/* Bottom */}
        <path d="M50% 50% L50% 85%" stroke="url(#lineGrad)" strokeWidth="1" className="animate-pulse delay-150" strokeDasharray="5,5" />

        {/* Animated Data Packets (Circles moving along paths) */}
        {/* We use CSS animation on circle elements following path coordinates approximately */}
        {/* Note: In pure SVG this is complex without SMIL or JS. For simplicity/performance in React, we use CSS mapped positions or just keyframe translations if paths are straight. 
            Since paths are straight lines from center (50,50) to targets, we can animate pure CSS transforms.
        */}
      </svg>

      {/* Dynamic Data Particles */}
      {/* Top Right Particle */}
      <div className="absolute top-[50%] left-[50%] w-2 h-2 bg-blue-500 rounded-full animate-ping [animation-duration:3s]" style={{ animationName: 'flow-tr' }}></div>
      <div className="absolute top-[50%] left-[50%] w-2 h-2 bg-blue-500 rounded-full animate-ping [animation-duration:3s] [animation-delay:1.5s]" style={{ animationName: 'flow-tl' }}></div>
      <div className="absolute top-[50%] left-[50%] w-2 h-2 bg-blue-500 rounded-full animate-ping [animation-duration:3s] [animation-delay:0.75s]" style={{ animationName: 'flow-b' }}></div>


      {/* CENTRAL CORE NODE */}
      <div className="absolute z-10 w-32 h-32 md:w-40 md:h-40 bg-white rounded-full border border-blue-100 shadow-[0_0_60px_-10px_rgba(37,99,235,0.15)] flex items-center justify-center group">
        {/* Inner Rings */}
        <div className="absolute inset-2 rounded-full border border-blue-50"></div>
        <div className="absolute inset-6 rounded-full border border-blue-100"></div>
        <div className="absolute inset-0 rounded-full border border-blue-500/20 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"></div>

        {/* Center Icon */}
        <div className="w-16 h-16 bg-blue-600 rounded-2xl rotate-45 flex items-center justify-center shadow-lg shadow-blue-600/30 transition-transform duration-500 group-hover:rotate-90">
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white -rotate-45 group-hover:-rotate-90 transition-transform duration-500">
            <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
          </svg>
        </div>

        {/* Label */}
        <div className="absolute -bottom-16 text-center">
          <div className="px-3 py-1 bg-blue-50 rounded-full border border-blue-100 inline-block mb-2">
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Neural Core</span>
          </div>
          <div className="flex gap-1 justify-center">
            <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[9px] font-bold text-slate-400 uppercase">Online</span>
          </div>
        </div>
      </div>


      {/* SATELLITE NODES */}

      {/* Node 1: Intelligence (Top Right) */}
      <div className="absolute top-[20%] right-[10%] z-10 flex flex-col items-center">
        <div className="w-16 h-16 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 flex items-center justify-center mb-3 group hover:scale-105 transition-transform">
          <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>
        <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest bg-white px-2 py-1 rounded shadow-sm">Intelligence</span>
      </div>

      {/* Node 2: Execution (Top Left) */}
      <div className="absolute top-[20%] left-[10%] z-10 flex flex-col items-center">
        <div className="w-16 h-16 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 flex items-center justify-center mb-3 group hover:scale-105 transition-transform">
          <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
        </div>
        <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest bg-white px-2 py-1 rounded shadow-sm">Execution</span>
      </div>

      {/* Node 3: Connectivity (Bottom) */}
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <div className="w-16 h-16 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 flex items-center justify-center mb-3 group hover:scale-105 transition-transform">
          <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        </div>
        <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest bg-white px-2 py-1 rounded shadow-sm">Connectivity</span>
      </div>

      <style>{`
        @keyframes flow-tr {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(140px, -110px) scale(0.5); opacity: 0; }
        }
        @keyframes flow-tl {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(-140px, -110px) scale(0.5); opacity: 0; }
        }
        @keyframes flow-b {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(0, 160px) scale(0.5); opacity: 0; }
        }
        @media (min-width: 768px) {
           @keyframes flow-tr { 100% { transform: translate(180px, -140px) scale(0); } }
           @keyframes flow-tl { 100% { transform: translate(-180px, -140px) scale(0); } }
           @keyframes flow-b { 100% { transform: translate(0, 200px) scale(0); } }
        }
      `}</style>
    </div>
  );
};

export default HolographicCore;
