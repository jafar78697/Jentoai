
import React, { useState, useRef, useEffect } from 'react';
import { Message } from './types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Jento AI Architect active. Connection established with production core. How can I assist?', timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'online' | 'error' | 'warning'>('online');
  const [sessionId] = useState(() => `session_${Math.random().toString(36).substr(2, 9)}`);
  const scrollRef = useRef<HTMLDivElement>(null);

  /**
   * PRODUCTION WEBHOOK
   */
  const CHAT_WEBHOOK_URL = import.meta.env.VITE_CHAT_WEBHOOK_URL;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const performFetch = async (input: string) => {
    // We use a simplified header set to avoid triggering complex CORS Preflight checks where possible
    const options: RequestInit = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chatInput: input,
        sessionId,
        timestamp: new Date().toISOString()
      })
    };

    return fetch(CHAT_WEBHOOK_URL, options);
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const currentInput = inputValue;
    const userMessage: Message = { role: 'user', text: currentInput, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setConnectionStatus('online');

    try {
      const response = await performFetch(currentInput);
      
      if (!response.ok) {
        throw new Error(`SERVER_ERROR_${response.status}`);
      }
      
      const data = await response.json();
      
      // Handle various n8n response formats
      let aiText = "";
      const extract = (obj: any): string | null => {
        if (!obj) return null;
        if (typeof obj === 'string') return obj;
        return obj.output || obj.text || obj.response || obj.message || (Array.isArray(obj) ? extract(obj[0]) : null);
      };

      aiText = extract(data) || "Uplink stable, but response payload was empty.";
      
      setMessages(prev => [...prev, { role: 'model', text: aiText, timestamp: new Date() }]);
      setConnectionStatus('online');

    } catch (error: any) {
      setConnectionStatus('error');
      console.error("[Jento-Debug] Trace:", error);

      let displayMsg = "CRITICAL: Uplink offline.";

      // Check if it's the specific browser fetch error
      if (error instanceof TypeError || error.message.includes('fetch')) {
        displayMsg = `📡 CONNECTION BLOCKED (Failed to Fetch)

The browser is being blocked by a CORS policy or the server is unreachable.

FIX THIS IN N8N:
Your n8n server needs to allow requests from this domain. 
Add this environment variable to your n8n setup:
N8N_RESPONSE_HEADERS_ANY_ORIGIN=true

After setting this, restart n8n and try again.`;
      } else {
        displayMsg = `⚠️ SYSTEM ERROR: ${error.message}. Ensure the n8n workflow is Active.`;
      }

      setMessages(prev => [...prev, { role: 'model', text: displayMsg, timestamp: new Date() }]);
    } finally {
      setIsTyping(false);
    }
  };

  const openTestLink = () => {
    window.open(CHAT_WEBHOOK_URL, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="dark-glass w-80 sm:w-96 h-[550px] rounded-[2.5rem] flex flex-col shadow-2xl overflow-hidden border border-slate-700/50 bg-slate-950/90 backdrop-blur-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-10">
          {/* Header */}
          <div className="bg-blue-600 p-6 flex items-center justify-between text-white shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700/50 to-transparent"></div>
            <div className="flex items-center space-x-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center font-black">J</div>
              <div>
                <h3 className="font-black text-[11px] uppercase tracking-widest opacity-90">Architect Core</h3>
                <div className="flex items-center space-x-2 mt-0.5">
                    <span className={`w-2 h-2 rounded-full animate-pulse ${
                      connectionStatus === 'error' ? 'bg-red-400' : 'bg-green-400'
                    }`}></span>
                    <p className="text-[9px] font-black uppercase tracking-widest opacity-70">
                      {connectionStatus === 'error' ? 'Link Failure' : 'Sync Active'}
                    </p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 rounded-lg p-2 transition-colors relative z-10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-950/40">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] font-medium leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none shadow-lg' 
                    : msg.text.includes('CONNECTION BLOCKED')
                      ? 'bg-red-900/40 text-red-100 border border-red-500/30 rounded-tl-none font-mono text-[10px]'
                      : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700 shadow-inner'
                }`}>
                  {msg.text}
                  {msg.text.includes('CONNECTION BLOCKED') && (
                    <button 
                      onClick={openTestLink}
                      className="mt-4 w-full bg-red-600 hover:bg-red-500 text-white font-black py-2.5 rounded-xl text-[9px] uppercase tracking-widest transition-all"
                    >
                      Verify Link Manually
                    </button>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-800 text-slate-400 p-4 rounded-2xl rounded-tl-none border border-slate-700 flex space-x-1.5">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 border-t border-slate-700/50 bg-slate-900/60">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Message the architect..."
                className="flex-1 bg-slate-800/80 border border-slate-700 text-white rounded-xl px-5 py-4 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 font-bold placeholder:text-slate-600"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping}
                className="bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-500 transition-all disabled:opacity-50 active:scale-90"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-5 rounded-[1.8rem] shadow-2xl hover:bg-slate-900 transition-all hover:scale-105 active:scale-95 group relative border-4 border-white/10"
        >
          <div className="relative">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${connectionStatus === 'error' ? 'bg-red-400' : 'bg-green-400'}`}></span>
          </div>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
