import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';
import { GlowCard } from '../components/common/GlowCard';

export const Achievements = () => {
  return (
    <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <h2 className="text-xs font-mono tracking-widest uppercase text-amber-400">
          // Recognition & Honors
        </h2>
        <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Academic Achievements
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ACHIEVEMENTS_DATA.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <GlowCard className="p-6 sm:p-8 h-full flex flex-col justify-between bg-slate-950/60 border-slate-800/80">
              <div className="space-y-3">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  {item.date}
                </span>
                <h4 className="text-xl font-bold text-white tracking-tight pt-2">
                  {item.title}
                </h4>
                <div className="text-xs font-mono text-slate-400">
                  {item.issuer}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed pt-1 font-normal">
                  {item.description}
                </p>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
