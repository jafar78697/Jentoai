
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

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const currentInput = inputValue;
    const userMessage: Message = { role: 'user', text: currentInput, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setConnectionStatus('online');

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Thank you for your interest in Jento AI. Our autonomous workflow engine can help streamline your operations. Would you like to schedule a consultation?",
        "Jento AI specializes in building custom AI agents for sales, support, and operations. How can we help transform your business?",
        "Our Professional plan includes 3 custom agents, full n8n integration, and dedicated support. Would you like to learn more?",
        "We've helped businesses across multiple industries automate their workflows. What industry are you in?",
        "Jento AI agents work 24/7 to handle repetitive tasks, allowing your team to focus on strategic work. What processes would you like to automate?"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { role: 'model', text: randomResponse, timestamp: new Date() }]);
      setIsTyping(false);
      setConnectionStatus('online');
    }, 1500);
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
