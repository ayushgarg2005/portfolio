import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaStar, FaChartLine, FaGraduationCap, FaCodeBranch } from 'react-icons/fa';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const Achievements = () => {
  const icons = [
    <FaCodeBranch className="text-2xl text-blue-500" />,
    <FaTrophy className="text-2xl text-amber-400" />,
    <FaChartLine className="text-2xl text-sky-400" />,
    <FaGraduationCap className="text-2xl text-purple-400" />,
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 relative z-10 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4 mb-14"
      >
        <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase">
          // 05. RECORD OF EXCELLENCE
        </span>
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight">
          Key <span className="text-blue-500">Achievements</span>
        </h2>
        <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
          Proven problem-solving rigor across nationwide examinations and algorithmic leaderboards.
        </p>
      </motion.div>

      {/* Grid of Animated Counter Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {ACHIEVEMENTS_DATA.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="glass-panel p-6 sm:p-7 rounded-3xl flex flex-col justify-between space-y-5 hover:border-blue-500/60 transition-all shadow-xl group cursor-default relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl pointer-events-none group-hover:bg-blue-500/15 transition-all" />

            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 group-hover:scale-110 transition-transform">
                {idx === 0 ? <FaTrophy className="text-blue-500 text-xl" /> :
                 idx === 1 ? <FaChartLine className="text-sky-400 text-xl" /> :
                 <FaGraduationCap className="text-purple-400 text-xl" />}
              </div>
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                VERIFIED
              </span>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black font-display text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors flex items-baseline">
                <span>{item.value}</span>
                <span className="text-xl sm:text-2xl text-blue-500 ml-0.5">{item.suffix}</span>
              </div>
              <p className="text-xs font-mono font-bold text-slate-400 dark:text-slate-400 light:text-slate-600 uppercase tracking-wider">
                {item.label}
              </p>
            </div>

            <div className="space-y-1 pt-3 border-t border-white/5 dark:border-white/5 light:border-black/5">
              <p className="text-xs font-bold text-white dark:text-white light:text-slate-800">
                {item.issuer}
              </p>
              <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 leading-normal">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
