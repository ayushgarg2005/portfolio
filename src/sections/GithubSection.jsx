import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaCode } from 'react-icons/fa';
import { STATS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { GlowCard } from '../components/common/GlowCard';

export const GithubSection = () => {
  // Generate a realistic 52-week by 7-day contribution grid placeholder
  const weeks = 52;
  const days = 7;
  const contributionLevels = [
    'bg-slate-900',
    'bg-emerald-950 border border-emerald-800/40',
    'bg-emerald-800',
    'bg-emerald-600',
    'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]',
  ];

  // Deterministic pattern generation so it looks realistic and stable
  const getLevel = (weekIdx, dayIdx) => {
    const hash = (weekIdx * 13 + dayIdx * 7) % 100;
    if (hash < 35) return 0; // Empty
    if (hash < 60) return 1; // Low
    if (hash < 80) return 2; // Medium
    if (hash < 93) return 3; // High
    return 4; // Max burst
  };

  const statCards = [
    { label: "Public Repositories", value: STATS_DATA.github.repositories, icon: FaGithub, color: "text-sky-400" },
    { label: "Total Stars Earned", value: STATS_DATA.github.stars, icon: FaStar, color: "text-amber-400" },
    { label: "Annual Commits", value: STATS_DATA.github.commits.toLocaleString() + "+", icon: FaCodeBranch, color: "text-emerald-400" },
    { label: "Languages Mastered", value: STATS_DATA.github.languages, icon: FaCode, color: "text-purple-400" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      <GlowCard className="p-6 sm:p-10 space-y-10">
        {/* Header & Stats Cards */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800 pb-8">
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-sky-400 font-mono text-xs uppercase tracking-widest">
              <FaGithub className="text-base" />
              <span>// Open Source Footprint</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              GitHub Activity & Contributions
            </h3>
            <p className="text-slate-400 text-sm sm:text-base">
              Consistent daily code pushes across cloud infrastructure, AI models, and UI frameworks.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-all shadow-md"
          >
            <span>Follow @ayushgarg</span>
          </a>
        </div>

        {/* Statistic Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statCards.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={i}
                className="p-4 sm:p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">{stat.label}</span>
                  <IconComponent className={`text-lg ${stat.color}`} />
                </div>
                <div className="text-2xl sm:text-4xl font-black text-white tracking-tight font-mono">
                  {stat.value}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contribution Graph Visual Placeholder */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>1,420 contributions in the last year</span>
            <div className="flex items-center space-x-1.5">
              <span>Less</span>
              {contributionLevels.map((lvl, idx) => (
                <div key={idx} className={`w-3 h-3 rounded-sm ${lvl}`} />
              ))}
              <span>More</span>
            </div>
          </div>

          {/* Grid matrix */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 overflow-x-auto">
            <div className="inline-grid grid-flow-col gap-1.5 min-w-[700px]">
              {Array.from({ length: weeks }).map((_, wIdx) => (
                <div key={wIdx} className="grid grid-rows-7 gap-1.5">
                  {Array.from({ length: days }).map((_, dIdx) => {
                    const levelClass = contributionLevels[getLevel(wIdx, dIdx)];
                    return (
                      <motion.div
                        key={dIdx}
                        whileHover={{ scale: 1.4 }}
                        className={`w-3 h-3 rounded-sm ${levelClass} transition-transform duration-100 cursor-pointer`}
                        title={`Week ${wIdx + 1}, Day ${dIdx + 1}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlowCard>
    </section>
  );
};
