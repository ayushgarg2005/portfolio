import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_TIMELINE } from '../data/portfolioData';
import { GlowCard } from '../components/common/GlowCard';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <h2 className="text-xs font-mono tracking-widest uppercase text-purple-400">
          // Career & Education
        </h2>
        <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Timeline & Milestones
        </h3>
      </div>

      <div className="space-y-6 relative border-l border-slate-800 ml-4 sm:ml-6 pl-6 sm:pl-8">
        {EXPERIENCE_TIMELINE.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-3 h-3 rounded-full bg-slate-700 group-hover:bg-sky-400 transition-colors ring-4 ring-slate-950" />

            <GlowCard className="p-6 bg-slate-950/60 border-slate-800/80 group-hover:border-slate-700 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-sky-400">
                  {exp.badge}
                </span>
                <span className="text-xs font-mono text-slate-500">{exp.year}</span>
              </div>

              <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight mt-1">
                {exp.title}
              </h4>
              <div className="text-xs font-mono text-slate-400 mb-3">
                {exp.company}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                {exp.description}
              </p>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
