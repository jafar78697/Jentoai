import React, { useState } from 'react';
import { Page } from './types';

export const YouTubeAutomationDashboard: React.FC<{ setPage: (page: Page) => void }> = ({ setPage }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handleBack = () => {
    setPage('tool/youtube-automation');
    window.history.pushState(null, '', '/tool/youtube-automation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReload = () => {
    setIsLoading(true);
    setIframeKey(prev => prev + 1);
  };

  return (
    <main className={`min-h-screen bg-slate-900 transition-all ${isFullscreen ? 'pt-4 pb-4 px-4' : 'pt-24 pb-12'}`}>
      <div className={`${isFullscreen ? 'w-full' : 'max-w-7xl mx-auto px-4 md:px-6'}`}>
        
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl border border-slate-700/60 shadow-lg">
          <div className="flex items-center gap-4">
            <button
              onClick={handleBack}
              className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white bg-slate-700/60 hover:bg-slate-700 px-3.5 py-2 rounded-xl transition-colors cursor-pointer group"
            >
              <svg className="w-4 h-4 mr-1.5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Overview & Blueprint
            </button>

            <div className="h-4 w-px bg-slate-700 hidden sm:block"></div>

            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <h1 className="text-sm md:text-base font-black text-white tracking-tight">
                YouTube Automation Studio
              </h1>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900/60 text-slate-400 border border-slate-700/50 hidden md:inline-block">
                jentoai.com/tool/youtube-automation/dashboard
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReload}
              title="Reload Studio Frame"
              className="p-2 text-slate-400 hover:text-white bg-slate-700/40 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer text-xs flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="hidden sm:inline">Refresh</span>
            </button>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Mode"}
              className="p-2 text-slate-400 hover:text-white bg-slate-700/40 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer text-xs flex items-center gap-1.5"
            >
              {isFullscreen ? (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="hidden sm:inline">Normal View</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  <span className="hidden sm:inline">Fullscreen</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Dashboard Iframe Container */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/90 z-20 text-slate-400">
              <svg className="animate-spin h-8 w-8 text-red-500 mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-300">
                Loading Studio Engine...
              </p>
            </div>
          )}

          <iframe
            key={iframeKey}
            src="https://automation-jentoai.pages.dev"
            title="YouTube Automation Dashboard"
            onLoad={() => setIsLoading(false)}
            className={`w-full border-0 transition-all ${
              isFullscreen 
                ? 'h-[calc(100vh-100px)] min-h-[700px]' 
                : 'h-[calc(100vh-180px)] min-h-[820px]'
            }`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

      </div>
    </main>
  );
};
