import React, { useState, useEffect, useRef } from 'react';

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '👋 **Protocol initialized.** Jento AI Core is online.\n\nI can build custom automation agents for you. How can I help? 🚀' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setInput('');
    
    // Create new array to avoid mutating state directly in unpredictable ways during async
    const newHistory = [...messages];
    
    // Add user message to UI immediately
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    try {
      const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
      const response = await fetch(`${baseUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userText,
          history: newHistory.filter(m => m.role === 'model' || m.role === 'user') // pass valid history
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'model', text: data.response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: 'Sorry, I encountered a system error. Please try again later.' }]);
    } finally {
      setLoading(false);
    }
  };

  // Convert basic markdown to HTML for bolding (used in welcome message)
  const formatText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold">{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-blue-700 transition-all z-[100] group"
        aria-label="Toggle Chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[380px] h-[600px] max-h-[80vh] bg-[#020617] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[100] animate-in slide-in-from-bottom-5 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-[#0f172a] p-4 border-b border-slate-800 flex justify-between items-center shrink-0">
            <div>
              <h3 className="text-white font-bold text-lg flex items-center gap-2">
                Jento Architect 🧠
              </h3>
              <p className="text-emerald-400 text-xs font-medium flex items-center gap-1 mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Value Stream Online
              </p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-sm' 
                      : 'bg-[#1e293b] text-slate-200 rounded-tl-sm'
                  }`}
                >
                  {formatText(msg.text)}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#1e293b] rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1">
                  <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-[#0f172a] border-t border-slate-800 shrink-0">
            <form onSubmit={handleSend} className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your challenge..."
                className="w-full bg-[#1e293b] text-white rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-slate-500 text-sm"
              />
              <button 
                type="submit"
                disabled={!input.trim() || loading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-blue-500 hover:text-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </form>
          </div>

        </div>
      )}
    </>
  );
};

export default ChatWidget;
