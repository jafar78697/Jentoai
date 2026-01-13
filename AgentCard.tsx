
import React from 'react';
import { Agent } from './types';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  const getGradient = (color: string) => {
    switch(color) {
      case 'blue': return 'from-blue-600 to-indigo-700';
      case 'indigo': return 'from-indigo-600 to-blue-800';
      case 'sky': return 'from-sky-500 to-blue-600';
      default: return 'from-slate-700 to-slate-900';
    }
  };

  return (
    <div className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-700 hover:-translate-y-3 flex flex-col h-full">
      {/* Large Image Header */}
      <div className="relative h-64 overflow-hidden bg-slate-100">
        <img 
          src={agent.image} 
          alt={agent.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-8">
            <h3 className="text-3xl font-black text-white uppercase tracking-tight">{agent.name}</h3>
            <p className="text-blue-400 text-xs font-black uppercase tracking-widest">{agent.role}</p>
        </div>
      </div>
      
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-6">
            <div className="px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-full">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Ready for n8n Deploy</p>
            </div>
            <p className="text-xl font-black text-slate-900 tracking-tighter">{agent.price}</p>
        </div>

        <p className="text-slate-500 mb-8 font-medium leading-relaxed flex-1 text-sm">{agent.description}</p>

        <div className="space-y-4 mb-10">
          {agent.capabilities.map((cap, i) => (
            <div key={i} className="flex items-center space-x-3 text-[10px] text-slate-700 font-bold uppercase tracking-wider">
              <div className="w-5 h-5 bg-blue-50 text-blue-600 rounded-md flex items-center justify-center">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span>{cap}</span>
            </div>
          ))}
        </div>

        <button className="w-full py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl group-hover:bg-blue-600 transition-all duration-500 shadow-xl group-hover:shadow-blue-500/20">
          Activate Agent
        </button>
      </div>
    </div>
  );
};

export default AgentCard;
