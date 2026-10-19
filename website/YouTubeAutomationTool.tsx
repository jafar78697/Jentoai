import React, { useState } from 'react';
import { Page } from './types';

interface GeneratedBlueprint {
  title: string;
  hook: string;
  scriptOutline: { time: string; narration: string; visual: string }[];
  tags: string[];
  estimatedDuration: string;
}

const PRESET_NICHES = [
  { id: 'tech', label: 'Tech & AI', icon: '🤖', sample: 'Quantum Computing Breakthroughs in 2026' },
  { id: 'finance', label: 'Finance & Wealth', icon: '💰', sample: 'The 3 Silent Wealth Killers Nobody Mentions' },
  { id: 'crime', label: 'True Crime & Mystery', icon: '🔍', sample: 'The Unsolved Secret of Room 1046' },
  { id: 'stoic', label: 'Stoicism & Mindset', icon: '🏛️', sample: 'Marcus Aurelius Morning Rules For Iron Focus' },
  { id: 'history', label: 'Crazy History Facts', icon: '📜', sample: 'The Real Reason the Roman Empire Collapsed' },
];

export const YouTubeAutomationTool: React.FC<{ setPage: (page: Page) => void }> = ({ setPage }) => {
  const [selectedNiche, setSelectedNiche] = useState('tech');
  const [format, setFormat] = useState<'shorts' | 'longform'>('shorts');
  const [topic, setTopic] = useState('Quantum Computing Breakthroughs in 2026');
  const [isGenerating, setIsGenerating] = useState(false);
  const [blueprint, setBlueprint] = useState<GeneratedBlueprint | null>(null);

  const STUDIO_URL = 'https://automation-jentoai.pages.dev';

  const handleNicheSelect = (nicheId: string, sampleTopic: string) => {
    setSelectedNiche(nicheId);
    setTopic(sampleTopic);
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setIsGenerating(true);
    setBlueprint(null);

    // Simulate multi-agent generation pipeline
    setTimeout(() => {
      setBlueprint({
        title: format === 'shorts' 
          ? `3 Crazy Reasons ${topic} Is Exploding Right Now! #shorts`
          : `The Truth About ${topic} (Full Investigation)`,
        hook: `Stop scrolling! In the next 45 seconds, this will completely change the way you think about ${topic.toLowerCase()}...`,
        estimatedDuration: format === 'shorts' ? '48 seconds' : '8 minutes 30 seconds',
        scriptOutline: format === 'shorts' ? [
          {
            time: '0:00 - 0:05',
            narration: 'Stop scrolling! In the next 45 seconds, this will completely change what you know.',
            visual: 'Fast-paced zoom on bold kinetic text + neon glitch overlay'
          },
          {
            time: '0:05 - 0:20',
            narration: 'Researchers just discovered something that was previously thought scientifically impossible.',
            visual: 'High-contrast 4K stock footage with dark ambient color grade'
          },
          {
            time: '0:20 - 0:38',
            narration: 'If this continues at the current pace, standard encryption systems won\'t survive by 2028.',
            visual: 'Infographic overlay showing exponential compute trajectory'
          },
          {
            time: '0:38 - 0:48',
            narration: 'Would you trust your digital security to this? Drop your thoughts below and subscribe for part 2.',
            visual: 'Call-to-action pulse animation with subscribe badge'
          }
        ] : [
          {
            time: '0:00 - 0:45',
            narration: 'The opening hook that addresses the central paradox and promises the resolution.',
            visual: 'Cinematic teaser clip montage with atmospheric sound design'
          },
          {
            time: '0:45 - 3:00',
            narration: 'Chapter 1: The Historical Context & Why Nobody Saw This Coming.',
            visual: 'Archival media, animated newspaper clippings, deep narrative voiceover'
          },
          {
            time: '3:00 - 6:30',
            narration: 'Chapter 2: The Breakthrough Event and Key Players Involved.',
            visual: '3D motion graphic diagram mapping out the timeline and consequences'
          },
          {
            time: '6:30 - 8:30',
            narration: 'Chapter 3: Future Implications and Final Takeaway.',
            visual: 'Summary bullets on screen with cinematic outro and end-screen cards'
          }
        ],
        tags: ['youtube automation', 'ai video creator', 'faceless channel', topic.toLowerCase().split(' ').slice(0, 3).join(' ')]
      });
      setIsGenerating(false);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Navigation & Header */}
        <div className="mb-8">
          <button 
            onClick={() => {
              setPage('tools');
              window.history.pushState(null, '', '/tools');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-blue-600 transition-colors mb-6 group cursor-pointer"
          >
            <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Free Tools
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/60 text-red-600 text-xs font-bold tracking-wide uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            Autonomous Video Generation Engine
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
            YouTube Automation & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">AI Video Studio.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-3xl">
            Turn trending topics into ready-to-publish YouTube Shorts and long-form videos with AI-powered scriptwriting, neural voiceovers, and deterministic rendering.
          </p>
        </div>

        {/* Live Studio App Banner */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 md:p-10 mb-12 shadow-2xl border border-slate-800 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-[11px] font-black uppercase tracking-wider mb-3">
                🚀 Dedicated Studio App
              </div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
                Access the Full Cloudflare Studio Dashboard
              </h2>
              <p className="text-slate-300 text-sm md:text-base max-w-xl">
                Connect your YouTube channel, scrape real-time Reddit feeds across 10+ niches, edit timeline captions, and render 1080p MP4 videos with Celery + FFmpeg.
              </p>
            </div>
            <a
              href={STUDIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-black text-xs uppercase tracking-widest hover:brightness-110 shadow-lg shadow-red-600/30 transition-all hover:scale-105 active:scale-95 shrink-0"
            >
              Launch Studio App ↗
            </a>
          </div>
        </div>

        {/* Interactive Quick Video Blueprint Generator */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 mb-12">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
            Quick Video Blueprint Generator
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            Test the AI content planning engine right here before sending jobs to the render queue.
          </p>

          <form onSubmit={handleGenerate} className="space-y-6">
            {/* Format Selection */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                1. Select Video Format
              </label>
              <div className="grid grid-cols-2 gap-4 max-w-md">
                <button
                  type="button"
                  onClick={() => setFormat('shorts')}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    format === 'shorts'
                      ? 'border-red-600 bg-red-50/50 text-red-950 shadow-sm'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className="font-bold text-sm mb-1">📱 YouTube Shorts / Reels</div>
                  <div className="text-xs text-slate-500">Vertical 9:16 (Under 60s)</div>
                </button>
                <button
                  type="button"
                  onClick={() => setFormat('longform')}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    format === 'longform'
                      ? 'border-red-600 bg-red-50/50 text-red-950 shadow-sm'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className="font-bold text-sm mb-1">🖥️ Long-Form Video</div>
                  <div className="text-xs text-slate-500">Landscape 16:9 (5-10 Mins)</div>
                </button>
              </div>
            </div>

            {/* Niche Selection */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                2. Select Trending Niche
              </label>
              <div className="flex flex-wrap gap-2">
                {PRESET_NICHES.map((niche) => (
                  <button
                    key={niche.id}
                    type="button"
                    onClick={() => handleNicheSelect(niche.id, niche.sample)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                      selectedNiche === niche.id
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <span>{niche.icon}</span>
                    <span>{niche.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Topic Input */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                3. Video Topic or Headline
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g. Why AI Agents Will Replace Middle Management in 2026"
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-100 text-slate-800 font-medium transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isGenerating || !topic.trim()}
              className="w-full py-4 rounded-2xl bg-slate-900 hover:bg-red-600 text-white font-black text-xs uppercase tracking-widest transition-all shadow-xl hover:shadow-red-500/20 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
            >
              {isGenerating ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                  </svg>
                  <span>Synthesizing Multi-Agent Script & Angles...</span>
                </>
              ) : (
                <span>Generate Video Blueprint & Script Outline</span>
              )}
            </button>
          </form>

          {/* Generated Result Output */}
          {blueprint && (
            <div className="mt-8 pt-8 border-t border-slate-100 animate-fadeIn">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-600 bg-red-100/60 px-2.5 py-1 rounded-md">
                      Optimized Title
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-2">{blueprint.title}</h3>
                  </div>
                  <div className="text-xs font-bold text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                    Target Duration: {blueprint.estimatedDuration}
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                    3-Second Retention Hook
                  </span>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 text-slate-800 font-semibold italic text-sm">
                    "{blueprint.hook}"
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-3">
                    Scene-by-Scene Timeline Execution
                  </span>
                  <div className="space-y-3">
                    {blueprint.scriptOutline.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 text-xs flex flex-col md:flex-row gap-2 md:gap-4 justify-between">
                        <div className="font-mono font-bold text-red-600 shrink-0 w-24">{item.time}</div>
                        <div className="flex-1 text-slate-800 font-medium"><span className="font-bold text-slate-400">Voice:</span> {item.narration}</div>
                        <div className="md:w-1/3 text-slate-500 bg-slate-50 p-2 rounded-lg"><span className="font-bold text-slate-700">B-Roll:</span> {item.visual}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-red-50 border border-red-200/70 p-6 rounded-2xl">
                <div>
                  <h4 className="font-black text-slate-900 text-sm">Ready to render this into an MP4 video?</h4>
                  <p className="text-xs text-slate-600">Dispatch this topic directly to the Celery + FFmpeg production pipeline on Cloudflare.</p>
                </div>
                <a
                  href={STUDIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-red-700 transition-colors shadow-md shadow-red-500/20 shrink-0"
                >
                  Send to Render Queue ↗
                </a>
              </div>
            </div>
          )}
        </div>

        {/* System Architecture Pipeline Cards */}
        <div className="mb-16">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight text-center mb-8">
            The 4-Step Autonomous Video Engine
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black mb-4">1</div>
              <h3 className="font-black text-slate-900 text-base mb-2">Viral Scraping</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Monitors Reddit feeds, HackerNews, and trending subreddits to detect high-velocity discussions.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-black mb-4">2</div>
              <h3 className="font-black text-slate-900 text-base mb-2">AI Writer</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Vertex AI and Gemini craft retention-engineered scripts with dynamic storytelling hooks.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black mb-4">3</div>
              <h3 className="font-black text-slate-900 text-base mb-2">Neural TTS</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Converts scripts into studio-grade voiceovers with millisecond-accurate word timestamps.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-black mb-4">4</div>
              <h3 className="font-black text-slate-900 text-base mb-2">FFmpeg Render</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Assembles background clips, adds kinetic typography subtitles, and exports 1080p MP4.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};
