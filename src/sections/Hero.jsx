import React from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaFileDownload, FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero = ({ setActivePage }) => {
  return (
    <section id="home" className="min-h-[85vh] flex flex-col justify-center items-center px-4 sm:px-6 relative z-10 pt-10 pb-16">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-sky-500/10 to-purple-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 shadow-sm hover:border-slate-700 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span>B.Tech CSE @ NSUT Delhi ('27)</span>
          <span className="text-slate-600">|</span>
          <span className="text-sky-400 font-semibold">LeetCode 1825</span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tight leading-[1.08]">
            Architecting <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Distributed Systems
            </span>
          </h1>
          <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Hi, I'm <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>. I build high-throughput event-driven microservices, real-time WebSocket applications, and scalable full-stack platforms.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <button
            onClick={() => setActivePage('projects')}
            className="px-7 py-3.5 rounded-xl bg-white text-slate-950 font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:bg-slate-200 transition-all transform hover:-translate-y-0.5 flex items-center space-x-2"
          >
            <FaCode className="text-slate-800" />
            <span>Explore Projects</span>
          </button>

          <button
            onClick={() => setActivePage('resume')}
            className="px-7 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-sm sm:text-base border border-slate-800 transition-all flex items-center space-x-2"
          >
            <FaFileDownload className="text-sky-400" />
            <span>View Resume</span>
          </button>
        </motion.div>

        {/* Social Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center space-x-6 pt-8 text-slate-400"
        >
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-2 text-sm font-mono">
            <FaGithub className="text-lg" />
            <span>GitHub</span>
          </a>
          <span className="text-slate-800">•</span>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-2 text-sm font-mono">
            <FaLinkedin className="text-lg text-sky-400" />
            <span>LinkedIn</span>
          </a>
          <span className="text-slate-800">•</span>
          <a href={PERSONAL_INFO.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-2 text-sm font-mono">
            <span className="font-bold text-amber-400">LC</span>
            <span>1,000+ Solved</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
