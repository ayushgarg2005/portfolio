import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp, FaEnvelope } from 'react-icons/fa';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { name: 'GitHub', icon: FaGithub, href: PERSONAL_INFO.github },
    { name: 'LinkedIn', icon: FaLinkedin, href: PERSONAL_INFO.linkedin },
    { name: 'Email', icon: FaEnvelope, href: `mailto:${PERSONAL_INFO.email}` },
  ];

  return (
    <footer className="relative mt-24 border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-xl py-12 px-4 sm:px-6 z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left info */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold tracking-tight text-white flex items-center justify-center md:justify-start gap-2">
            <span>Ayush Garg</span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
              v2.5 Pro
            </span>
          </h4>
          <p className="text-slate-400 text-sm mt-1">
            Handcrafted with React, Vite, Tailwind CSS & Framer Motion.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-4">
          {socials.map((s) => {
            const IconComponent = s.icon;
            return (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 hover:scale-110 transition-all duration-300 shadow-md"
                aria-label={s.name}
              >
                <IconComponent className="text-lg" />
              </a>
            );
          })}
        </div>

        {/* Right copyright & Back to top */}
        <div className="flex items-center space-x-6">
          <span className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Ayush Garg. All rights reserved.
          </span>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl bg-gradient-to-tr from-sky-500 to-purple-600 text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-all duration-200"
            title="Back to top"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
