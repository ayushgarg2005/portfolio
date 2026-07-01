import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export const Navbar = ({ activePage, setActivePage, onOpenTerminal }) => {
  const scrollProgress = useScrollProgress();
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    // In our futuristic portfolio, dark mode is primary; switching pulses a visual accent feedback
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Scroll Indicator */}
      <div className="w-full h-1 bg-slate-900/40">
        <motion.div
          className="h-full bg-gradient-to-r from-sky-400 via-purple-500 to-sky-400"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navbar bar */}
      <nav
        className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-300 mt-4 rounded-2xl ${
          isScrolled
            ? 'bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => setActivePage('home')}
            className="flex items-center space-x-2 text-xl font-extrabold tracking-tight group focus:outline-none"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform duration-200">
              A
            </span>
            <span className="text-white group-hover:text-sky-400 transition-colors duration-200">
              Ayush<span className="text-sky-400">.dev</span>
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1 bg-slate-950/60 p-1.5 rounded-full border border-slate-800/60 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/20 to-purple-500/20 border border-sky-500/40 shadow-[0_0_15px_rgba(56,189,248,0.2)] -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenTerminal}
              className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-sky-400 border border-slate-700/60 transition-all duration-200 text-xs font-mono shadow-sm"
              title="Open Developer Terminal (CLI)"
            >
              <FaTerminal />
              <span>CLI</span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-amber-400 border border-slate-700/60 transition-all duration-200 shadow-sm"
              aria-label="Toggle Theme"
            >
              <motion.div animate={{ rotate: theme === 'dark' ? 0 : 180 }} transition={{ duration: 0.3 }}>
                {theme === 'dark' ? <FaMoon className="text-purple-400" /> : <FaSun className="text-amber-400" />}
              </motion.div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg bg-slate-800 text-sky-400 border border-slate-700"
              title="CLI"
            >
              <FaTerminal />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 focus:outline-none"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-4 pt-4 border-t border-slate-800 space-y-2 flex flex-col"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-2.5 rounded-xl font-medium ${
                  activePage === item.id
                    ? 'bg-gradient-to-r from-sky-500/20 to-purple-500/20 text-sky-400 border border-sky-500/30'
                    : 'text-slate-300 hover:bg-slate-800/50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
};
