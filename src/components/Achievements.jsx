import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaChartLine, FaGraduationCap, FaCheckCircle } from 'react-icons/fa';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const Achievements = () => {
  const getIconAndAccent = (idx) => {
    switch (idx) {
      case 0:
        return {
          icon: <FaTrophy className="text-xl text-amber-400" />,
          accent: "from-amber-500 to-orange-500",
          glow: "group-hover:shadow-[0_0_35px_rgba(245,158,11,0.2)]",
          badgeBg: "bg-amber-500/10 text-amber-300 border-amber-500/30"
        };
      case 1:
        return {
          icon: <FaChartLine className="text-xl text-blue-400" />,
          accent: "from-blue-500 to-indigo-500",
          glow: "group-hover:shadow-[0_0_35px_rgba(59,130,246,0.2)]",
          badgeBg: "bg-blue-500/10 text-blue-300 border-blue-500/30"
        };
      default:
        return {
          icon: <FaGraduationCap className="text-xl text-purple-400" />,
          accent: "from-purple-500 to-pink-500",
          glow: "group-hover:shadow-[0_0_35px_rgba(168,85,247,0.2)]",
          badgeBg: "bg-purple-500/10 text-purple-300 border-purple-500/30"
        };
    }
  };

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 relative z-10 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3 mb-16"
      >
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold tracking-widest uppercase text-blue-500 dark:text-blue-400 light:text-blue-600">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span>// 04. RECORD OF EXCELLENCE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white dark:text-white light:text-slate-900">
          Key <span className="text-gradient">Achievements</span>
        </h2>
        <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Proven problem-solving rigor across nationwide examinations, competitive programming, and academic excellence.
        </p>
      </motion.div>

      {/* Grid of Achievement Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {ACHIEVEMENTS_DATA.map((item, idx) => {
          const theme = getIconAndAccent(idx);
          const spanClass = idx === 2 ? 'sm:col-span-2 lg:col-span-1' : '';

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -5 }}
              className={`glass-panel p-6 sm:p-8 rounded-[2rem] flex flex-col justify-between space-y-6 transition-all duration-500 group cursor-default relative overflow-hidden border border-white/10 dark:border-white/10 light:border-slate-200 ${theme.glow} ${spanClass}`}
            >
              {/* Background ambient radial */}
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-gradient-to-br from-blue-500/10 via-violet-500/5 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

              {/* Top Row: Icon & Verified Badge */}
              <div className="flex items-center justify-between relative z-10">
                <div className="p-3.5 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  {theme.icon}
                </div>
                <span className={`inline-flex items-center space-x-1 text-[10px] font-mono font-bold px-3 py-1 rounded-full border ${theme.badgeBg}`}>
                  <FaCheckCircle className="text-[10px]" />
                  <span>VERIFIED</span>
                </span>
              </div>

              {/* Middle Row: Big Number & Label */}
              <div className="space-y-1 relative z-10">
                <div className="text-4xl sm:text-5xl font-black font-display text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors flex items-baseline tracking-tight">
                  <span>{item.value}</span>
                  <span className="text-2xl sm:text-3xl text-gradient ml-0.5 font-bold">{item.suffix}</span>
                </div>
                <p className="text-xs font-mono font-bold text-slate-400 dark:text-slate-400 light:text-slate-600 uppercase tracking-wider">
                  {item.label}
                </p>
              </div>

              {/* Bottom Row: Issuer & Details */}
              <div className="space-y-2 pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 relative z-10">
                <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900 leading-snug">
                  {item.issuer}
                </h4>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom gradient accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${theme.accent} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
