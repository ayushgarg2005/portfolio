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
    <footer className="relative z-10 py-12 px-4 sm:px-6 border-t border-white/10 dark:border-white/10 light:border-black/10 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand & Copyright */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2 text-lg font-black tracking-tight">
            <span className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs">
              A
            </span>
            <span>Ayush<span className="text-blue-500">.Garg</span></span>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 font-mono">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. Handcrafted with React & Tailwind.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-slate-600">
          <button onClick={() => scrollToSection('home')} className="hover:text-blue-500 transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-blue-500 transition-colors">About</button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-blue-500 transition-colors">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-blue-500 transition-colors">Projects</button>
          <button onClick={() => scrollToSection('github')} className="hover:text-blue-500 transition-colors">GitHub</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-blue-500 transition-colors">Contact</button>
        </div>

        {/* Socials & Back To Top */}
        <div className="flex items-center space-x-4">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 hover:text-white hover:bg-blue-600/20 transition-all">
            <FaGithub />
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 hover:text-white hover:bg-blue-600/20 transition-all">
            <FaLinkedin className="text-blue-500" />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="p-2.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 hover:text-white hover:bg-blue-600/20 transition-all">
            <FaEnvelope className="text-sky-400" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all ml-2"
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
