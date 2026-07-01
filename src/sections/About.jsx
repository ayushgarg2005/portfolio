import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaCode, FaServer, FaTerminal } from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GlowCard } from '../components/common/GlowCard';

export const About = () => {
  const highlights = [
    {
      icon: FaUniversity,
      title: "NSUT Delhi (B.Tech CSE '27)",
      desc: "Rigorous computer science curriculum covering Operating Systems, DBMS, Computer Networks, and Object-Oriented Programming (CGPA: 7.35)."
    },
    {
      icon: FaServer,
      title: "Distributed Backend Focus",
      desc: "Experience building Kafka event pipelines, Redis Pub/Sub WebSocket routing, and high-performance PostgreSQL/MongoDB schemas."
    },
    {
      icon: FaCode,
      title: "Elite Problem Solving",
      desc: "Top 5% global competitive programmer on LeetCode (1825 rating, Rank 1,385) with over 1,000+ complex algorithmic problems mastered."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <h2 className="text-xs font-mono tracking-widest uppercase text-sky-400">
          // Background & Engineering Focus
        </h2>
        <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Engineering Philosophy
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {highlights.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlowCard className="p-6 h-full flex flex-col justify-between border-slate-800/80 bg-slate-950/60">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 text-lg shadow-inner">
                    <IconComp />
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-tight">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </GlowCard>
            </motion.div>
          );
        })}
      </div>

      <GlowCard className="p-8 sm:p-12 bg-slate-950/80 border-slate-800/80 relative overflow-hidden">
        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-purple-400 uppercase tracking-widest">
            <FaTerminal /> Architectural Rigor & Scalability
          </div>
          
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed whitespace-pre-line font-normal">
            {PERSONAL_INFO.aboutCopy}
          </p>
        </div>
      </GlowCard>
    </section>
  );
};
