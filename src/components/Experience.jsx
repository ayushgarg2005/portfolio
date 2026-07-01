import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCodeBranch, FaTrophy, FaLaptopCode } from 'react-icons/fa';
import { EXPERIENCE_TIMELINE } from '../data/portfolioData';

export const Experience = () => {
  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Open Source':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'Freelancing':
        return 'bg-sky-500/20 text-sky-300 border-sky-500/30';
      case 'Hackathons':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      default:
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    }
  };

  const getIcon = (badge) => {
    switch (badge) {
      case 'Open Source':
        return <FaCodeBranch />;
      case 'Freelancing':
        return <FaLaptopCode />;
      case 'Hackathons':
        return <FaTrophy />;
      default:
        return <FaBriefcase />;
    }
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative z-10 max-w-5xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4 mb-20"
      >
        <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase">
          // 04. CAREER MILESTONES
        </span>
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight">
          Experience & <span className="text-blue-500">Timeline</span>
        </h2>
        <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
          A track record spanning open-source architectural contributions, intensive hackathon leadership, and client-focused freelance engineering.
        </p>
      </motion.div>

      {/* Vertical Animated Timeline */}
      <div className="relative border-l border-blue-500/30 ml-4 sm:ml-32 space-y-12">
        {EXPERIENCE_TIMELINE.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative pl-8 sm:pl-12 group"
          >
            {/* Timeline Glowing Node Dot */}
            <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-slate-900 border-2 border-blue-500 flex items-center justify-center text-blue-400 text-xs shadow-[0_0_15px_#3b82f6] group-hover:scale-125 transition-transform duration-300">
              {getIcon(item.badge)}
            </div>

            {/* Year Stamp on Desktop */}
            <div className="hidden sm:block absolute -left-32 top-2 text-right w-24 text-xs font-mono font-bold text-slate-400 dark:text-slate-400 light:text-slate-600">
              {item.year}
            </div>

            {/* Content Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4 group-hover:border-blue-500/50 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold border ${getBadgeColor(
                    item.badge
                  )}`}
                >
                  {item.badge}
                </span>
                
                {/* Year Stamp on Mobile */}
                <span className="sm:hidden text-xs font-mono text-slate-400">
                  {item.year}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold font-display text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-slate-400 dark:text-slate-400 light:text-slate-600">
                  {item.company}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
