import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { TESTIMONIALS_DATA } from '../data/portfolioData';
import { GlowCard } from '../components/common/GlowCard';

export const Testimonials = () => {
  return (
    <section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <h2 className="text-xs font-mono tracking-widest uppercase text-emerald-400">
          // Peer Endorsements
        </h2>
        <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          What Leaders Say
        </h3>
        <p className="text-slate-400 text-base sm:text-lg">
          Feedback from Engineering Directors and Lead Architects on cross-team collaboration and delivery speed.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS_DATA.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <GlowCard className="p-6 sm:p-8 h-full flex flex-col justify-between relative">
              <FaQuoteLeft className="text-4xl text-slate-800 absolute top-6 right-6 pointer-events-none" />
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed relative z-10 italic mb-6">
                "{item.quote}"
              </p>

              <div className="flex items-center space-x-4 pt-4 border-t border-slate-800/80">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-sky-500/40 shadow-md"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-white text-base">{item.author}</h4>
                  <p className="text-xs font-mono text-sky-400">{item.role}</p>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
