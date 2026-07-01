import React from 'react';
import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 py-14 px-4 sm:px-6 border-t border-white/10 dark:border-white/10 light:border-slate-200 mt-20 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-100/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand & Copyright */}
        <div className="space-y-2.5 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2.5 text-lg font-black tracking-tight">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-violet-500 flex items-center justify-center text-white text-xs font-display shadow-md shadow-blue-500/20">
              AG
            </span>
            <span className="font-display font-bold text-white dark:text-white light:text-slate-900">
              Ayush<span className="text-blue-500">.Garg</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 font-mono">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Crafted with precision using React & Tailwind.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-slate-600">
          <button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition-colors cursor-pointer">Home</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors cursor-pointer">About</button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-blue-400 transition-colors cursor-pointer">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors cursor-pointer">Projects</button>
          <button onClick={() => scrollToSection('achievements')} className="hover:text-blue-400 transition-colors cursor-pointer">Achievements</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors cursor-pointer">Contact</button>
        </div>

        {/* Socials & Back To Top */}
        <div className="flex items-center space-x-3.5">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 hover:text-white dark:hover:text-white light:hover:text-blue-600 hover:bg-blue-600/20 transition-all shadow-sm"
          >
            <FaGithub />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 hover:text-white dark:hover:text-white light:hover:text-blue-600 hover:bg-blue-600/20 transition-all shadow-sm"
          >
            <FaLinkedin className="text-blue-500" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 hover:text-white dark:hover:text-white light:hover:text-blue-600 hover:bg-blue-600/20 transition-all shadow-sm"
          >
            <FaEnvelope className="text-sky-400" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25 transition-all ml-2 transform hover:-translate-y-0.5 cursor-pointer"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <FaArrowUp className="text-xs" />
          </button>
        </div>

      </div>
    </footer>
  );
};
