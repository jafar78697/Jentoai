
import React, { useState, useEffect } from 'react';
import { Page } from './types';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; value: Page }[] = [
    { label: 'AI Agents', value: 'agents' },
    { label: 'Services', value: 'services' },
    { label: 'Use Cases', value: 'use-cases' },
    { label: 'Industries', value: 'industries' },
    { label: 'Pricing', value: 'pricing' },
    { label: 'Case Studies', value: 'case-studies' },
    { label: 'FAQ', value: 'faq' },
  ];

  const handleNavClick = (page: Page) => {
    setPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled || mobileMenuOpen ? 'glass py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer group z-[110]"
          onClick={() => handleNavClick('home')}
        >
          <div className="relative w-10 h-10 flex items-center justify-center bg-blue-600 rounded-xl shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
            <svg viewBox="0 0 100 100" className="w-6 h-6 fill-white">
              <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z M50 25 L30 40 L30 60 L50 75 L70 60 L70 40 Z" />
              <circle cx="50" cy="50" r="8" className="animate-pulse" />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors uppercase">
            Jento<span className="text-blue-600 font-light">AI</span>
          </span>
        </div>

        {/* Desktop Navigation - Visible from Medium screens up */}
        <div className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              className={`text-[11px] font-black uppercase tracking-widest transition-all hover:text-blue-600 relative group ${currentPage === item.value ? 'text-blue-600' : 'text-slate-600'}`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${currentPage === item.value ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
          <button
            onClick={() => handleNavClick('book-call')}
            className="bg-blue-600 text-white px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl hover:shadow-blue-500/20 active:scale-95"
          >
            Schedule Call
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-900 z-[110] hover:bg-slate-100 rounded-xl transition-colors"
        >
          <div className="w-6 h-5 flex flex-col justify-between overflow-hidden">
            <span className={`w-full h-0.5 bg-current transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-current transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Navigation Overlay */}
        <div className={`fixed inset-0 bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8 transition-all duration-500 lg:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-[-10px]'}`}>
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              className={`text-2xl font-black uppercase tracking-tighter transition-all ${currentPage === item.value ? 'text-blue-600 scale-110' : 'text-slate-400 hover:text-slate-900'}`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('book-call')}
            className="bg-blue-600 text-white px-10 py-5 rounded-3xl text-sm font-black uppercase tracking-widest shadow-2xl shadow-blue-500/30"
          >
            Schedule Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
