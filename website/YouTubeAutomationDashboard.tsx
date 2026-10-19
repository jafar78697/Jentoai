import React, { useState } from 'react';
import { Page } from './types';

export const YouTubeAutomationDashboard: React.FC<{ setPage: (page: Page) => void }> = ({ setPage }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleBack = () => {
    setPage('tool/youtube-automation');
    window.history.pushState(null, '', '/tool/youtube-automation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 w-screen h-screen bg-slate-950 overflow-hidden z-[99999] m-0 p-0">
      {/* Floating Minimal Exit Button */}
      <button
        onClick={handleBack}
        className="fixed top-3 left-3 z-[100000] flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 backdrop-blur-md text-xs font-semibold shadow-xl transition-all opacity-85 hover:opacity-100 cursor-pointer"
        title="Exit to Jento AI"
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Exit to Jento AI</span>
      </button>

      {/* Loading state indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 z-20 text-slate-400">
          <svg className="animate-spin h-8 w-8 text-red-500 mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-300">
            Loading Studio Dashboard...
          </p>
        </div>
      )}

      {/* Seamless 100% Fullscreen Iframe */}
      <iframe
        src="https://automation-jentoai.pages.dev"
        title="YouTube Automation Studio Dashboard"
        onLoad={() => setIsLoading(false)}
        className="w-full h-full border-0 block m-0 p-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};
