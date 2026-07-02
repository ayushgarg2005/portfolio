import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaMoon, FaSun, FaBars, FaTimes, FaFileDownload, 
  FaHome, FaUser, FaLaptopCode, FaCode, FaTrophy, FaEnvelope, 
  FaGithub, FaLinkedin, FaChevronRight 
} from 'react-icons/fa';

export const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home', icon: <FaHome /> },
    { name: 'About', id: 'about', icon: <FaUser /> },
    { name: 'Skills', id: 'skills', icon: <FaLaptopCode /> },
    { name: 'Projects', id: 'projects', icon: <FaCode /> },
    { name: 'Achievements', id: 'achievements', icon: <FaTrophy /> },
    { name: 'Contact', id: 'contact', icon: <FaEnvelope /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const scrollPosition = window.scrollY + 250;
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const wasOpen = mobileMenuOpen;
    setMobileMenuOpen(false);

    // Defer scroll slightly when mobile menu is open so height collapse transition doesn't interrupt scroll calculation
    const delay = wasOpen ? 250 : 0;
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      }
    }, delay);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-6">
      <nav
        className={`max-w-5xl mx-auto transition-all duration-500 ${
          mobileMenuOpen
            ? 'mt-4 py-4 px-5 rounded-3xl glass-panel border border-white/15 dark:border-white/15 light:border-slate-300 shadow-2xl bg-slate-950/95 dark:bg-slate-950/95 light:bg-white/95 backdrop-blur-2xl'
            : isScrolled
            ? 'mt-4 py-2.5 px-5 rounded-full glass-panel border border-white/10 dark:border-white/10 light:border-slate-200 shadow-2xl shadow-black/20 dark:shadow-black/20 light:shadow-slate-200/50'
            : 'mt-6 py-4 px-6 rounded-full bg-transparent border border-transparent'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2.5 text-xl font-black tracking-tight group focus:outline-none cursor-pointer"
          >
            <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-md shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300 font-display text-sm">
              AG
            </span>
            <span className="font-display font-bold tracking-tight text-base sm:text-lg text-white dark:text-white light:text-slate-900">
              Ayush<span className="text-blue-500">.Garg</span>
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 p-1 rounded-full border border-white/10 dark:border-white/10 light:border-slate-200 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-100/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white dark:text-slate-400 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-500/30 -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* Actions: Theme Toggle & Resume */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-white/10 dark:border-white/10 light:border-slate-200 bg-white/5 dark:bg-white/5 light:bg-slate-100 hover:scale-110 transition-all shadow-sm cursor-pointer"
              aria-label="Toggle Theme"
            >
              <motion.div animate={{ rotate: theme === 'dark' ? 0 : 180 }} transition={{ duration: 0.3 }}>
                {theme === 'dark' ? (
                  <FaSun className="text-amber-400 text-sm" />
                ) : (
                  <FaMoon className="text-blue-600 text-sm" />
                )}
              </motion.div>
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="flex items-center space-x-2 px-4.5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs transition-all shadow-md shadow-blue-500/25 transform hover:-translate-y-0.5"
            >
              <FaFileDownload className="text-xs" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-white/10 dark:border-white/10 light:border-slate-200 bg-white/5 dark:bg-white/5 light:bg-slate-100 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FaSun className="text-amber-400 text-sm" /> : <FaMoon className="text-blue-600 text-sm" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full border border-white/10 dark:border-white/10 light:border-slate-200 bg-white/5 dark:bg-white/5 light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <FaTimes className="text-sm" /> : <FaBars className="text-sm" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden mt-4 pt-3 border-t border-white/10 dark:border-white/10 light:border-slate-200 space-y-2 overflow-hidden flex flex-col"
            >
              <div className="grid grid-cols-1 gap-1.5 py-1">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.button
                      key={link.id}
                      type="button"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.id);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-600/20 to-indigo-600/20 text-blue-400 dark:text-blue-400 light:text-blue-600 border border-blue-500/30 shadow-sm'
                          : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3.5">
                        <span className={`text-base ${isActive ? 'text-blue-400' : 'text-slate-400'}`}>{link.icon}</span>
                        <span>{link.name}</span>
                      </div>
                      {isActive ? (
                        <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                      ) : (
                        <FaChevronRight className="text-xs text-slate-500 opacity-50" />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Mobile CTA Resume Button */}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="flex items-center justify-center space-x-2.5 w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-500/25 cursor-pointer mt-2"
              >
                <FaFileDownload />
                <span>Download Resume</span>
              </motion.a>

              {/* Quick Social Row inside mobile menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-3 pb-1 flex items-center justify-center space-x-5 border-t border-white/10 dark:border-white/10 light:border-slate-200 text-slate-400"
              >
                <a
                  href="https://github.com/ayushgarg2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl hover:bg-white/5 hover:text-white transition-colors"
                  title="GitHub"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ayushgarg2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl hover:bg-white/5 hover:text-blue-500 transition-colors"
                  title="LinkedIn"
                >
                  <FaLinkedin className="text-lg text-blue-500" />
                </a>
                <a
                  href="mailto:asdgarg0729@gmail.com"
                  className="p-2.5 rounded-xl hover:bg-white/5 hover:text-sky-400 transition-colors"
                  title="Email"
                >
                  <FaEnvelope className="text-lg text-sky-400" />
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
