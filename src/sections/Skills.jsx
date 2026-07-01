import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../data/portfolioData';
import { GlowCard } from '../components/common/GlowCard';

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <h2 className="text-xs font-mono tracking-widest uppercase text-sky-400">
          // Technical Stack
        </h2>
        <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Core Competencies
        </h3>
        <p className="text-slate-400 text-sm sm:text-base">
          Languages, backend infrastructure, databases, and AI tools used in production environments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS_DATA.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <GlowCard className="p-6 h-full flex flex-col justify-between bg-slate-950/60 border-slate-800/80">
              <h4 className="text-base font-bold text-white mb-4 pb-3 border-b border-slate-800 font-mono tracking-tight">
                {group.category}
              </h4>
              <div className="space-y-3">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between text-sm">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="font-mono text-xs text-slate-500">{skill.level}</span>
                  </div>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
