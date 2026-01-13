
import React, { useState, useEffect } from 'react';

const HolographicCore: React.FC = () => {
  const [rotate, setRotate] = useState({ x: 20, y: -20 });
  const [pulse, setPulse] = useState(1);

  // Pulse animation for the central nucleus
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(p => (p === 1 ? 1.1 : 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate tilt based on cursor position
    const rotateY = ((x - centerX) / centerX) * 45;
    const rotateX = ((centerY - y) / centerY) * 45;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 20, y: -20 });
  };

  const orbits = [
    { name: 'Intelligence', color: 'border-blue-500', rotation: 'rotateX(70deg) rotateY(0deg)', delay: '0s', speed: '8s' },
    { name: 'Execution', color: 'border-indigo-500', rotation: 'rotateX(70deg) rotateY(60deg)', delay: '-2s', speed: '12s' },
    { name: 'Connectivity', color: 'border-sky-400', rotation: 'rotateX(70deg) rotateY(-60deg)', delay: '-4s', speed: '10s' },
  ];

  return (
    <div 
      className="relative h-[500px] lg:h-[700px] w-full flex items-center justify-center perspective-[1500px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="relative transition-transform duration-700 ease-out flex items-center justify-center w-full h-full"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` 
        }}
      >
        {/* Central Nucleus */}
        <div 
          className="absolute w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center transition-transform duration-[2000ms]"
          style={{ 
            transform: `scale(${pulse}) translateZ(50px)`,
            boxShadow: '0 0 80px 20px rgba(37, 99, 235, 0.4), inset 0 0 40px rgba(255,255,255,0.4)'
          }}
        >
          <div className="w-16 h-16 bg-white/20 rounded-full animate-pulse flex items-center justify-center border border-white/30 backdrop-blur-md">
             <svg viewBox="0 0 100 100" className="w-8 h-8 fill-white">
                <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" />
             </svg>
          </div>
          
          {/* Label for Core */}
          <div className="absolute -bottom-12 whitespace-nowrap">
             <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] animate-pulse">Neural Core Active</p>
          </div>
        </div>

        {/* Orbital Rings */}
        {orbits.map((orbit, i) => (
          <div 
            key={i}
            className={`absolute w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full border-2 border-dashed ${orbit.color} opacity-40`}
            style={{ 
              transform: orbit.rotation,
              transformStyle: 'preserve-3d',
              animation: `orbit-spin ${orbit.speed} linear infinite`
            }}
          >
            {/* Orbiting Node (The "Electron") */}
            <div 
              className={`absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)] border-2 ${orbit.color.replace('border', 'border-white')} flex items-center justify-center`}
              style={{ transform: 'rotateX(-90deg)' }}
            >
                <div className="w-1 h-1 bg-white rounded-full animate-ping"></div>
                
                {/* Micro Label */}
                <div className="absolute left-6 whitespace-nowrap">
                    <span className="text-[8px] font-black uppercase tracking-tighter text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">{orbit.name}</span>
                </div>
            </div>
            
            {/* Inner Ring Glow */}
            <div className={`absolute inset-4 rounded-full border border-white/5 bg-gradient-to-br from-transparent to-${orbit.color.split('-')[1]}-500/5`}></div>
          </div>
        ))}

        {/* Vertical Stabilizer Axis */}
        <div className="absolute h-[600px] w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute w-[600px] h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>

        {/* Global Particle Field */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
            style={{
              transform: `rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg) translateZ(300px)`,
              animation: `float-particle ${5 + Math.random() * 5}s ease-in-out infinite`
            }}
          ></div>
        ))}
      </div>
      
      {/* Decorative Floor Reflection */}
      <div className="absolute bottom-0 w-[80%] h-32 bg-gradient-to-t from-blue-600/10 to-transparent blur-3xl -z-10 rounded-full"></div>

      <style>{`
        @keyframes orbit-spin {
          from { transform: rotateX(70deg) rotateZ(0deg); }
          to { transform: rotateX(70deg) rotateZ(360deg); }
        }
        @keyframes float-particle {
          0%, 100% { opacity: 0.1; transform: scale(1) translateZ(300px); }
          50% { opacity: 0.5; transform: scale(1.5) translateZ(320px); }
        }
      `}</style>
    </div>
  );
};

export default HolographicCore;
