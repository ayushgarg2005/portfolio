import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode } from 'react-icons/si';
import { FaCheckCircle } from 'react-icons/fa';
import { STATS_DATA } from '../data/portfolioData';
import { GlowCard } from '../components/common/GlowCard';

const AnimatedCounter = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * endValue));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [endValue, duration]);

  return <span>{count}</span>;
};

export const LeetCodeSection = () => {
  const { leetcode } = STATS_DATA;

  const difficultyBreakdown = [
    { label: "Easy", solved: leetcode.easy, total: 600, color: "text-emerald-400", bg: "bg-emerald-500" },
    { label: "Medium", solved: leetcode.medium, total: 1000, color: "text-amber-400", bg: "bg-amber-500" },
    { label: "Hard", solved: leetcode.hard, total: 400, color: "text-rose-400", bg: "bg-rose-500" },
  ];

  return (
    <section id="stats" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      <GlowCard className="p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Title & Total Solved */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-slate-800 pb-8 lg:pb-0 lg:pr-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono">
              <SiLeetcode className="text-base" />
              <span>// Competitive Programming</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              LeetCode & Algorithms
            </h3>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Solved 1000+ Data Structures and Algorithms problems, focusing heavily on Dynamic Programming and Graphs.
            </p>

            {/* Total Solved Badge */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">Total Problems Solved</div>
                <div className="text-4xl sm:text-5xl font-black text-white font-mono mt-1">
                  <AnimatedCounter endValue={1000} />
                  <span className="text-sky-400 text-3xl">+</span>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 text-3xl">
                <FaCheckCircle />
              </div>
            </div>
          </div>

          {/* Right Column: Easy / Medium / Hard Progress Bars */}
          <div className="lg:col-span-7 space-y-6 pl-0 lg:pl-4">
            <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-4">
              Algorithmic Problem Breakdown
            </h4>

            <div className="space-y-6">
              {difficultyBreakdown.map((diff) => {
                const percentage = Math.min(Math.round((diff.solved / diff.total) * 100), 100);
                return (
                  <div key={diff.label} className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className={`w-3 h-3 rounded-full ${diff.bg}`} />
                        <span className={`font-bold text-lg ${diff.color}`}>{diff.label}</span>
                      </div>
                      <div className="font-mono text-sm sm:text-base font-bold text-white">
                        <span>{diff.solved}+</span>
                        <span className="text-slate-500"> problems</span>
                      </div>
                    </div>

                    <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className={`h-full rounded-full ${diff.bg} shadow-sm`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-xs font-mono text-slate-400 leading-relaxed">
              💡 <span className="text-white font-semibold">Core Focus Areas:</span> Dynamic Programming (Memoization & Tabulation), Graph Algorithms (Dijkstra, Topological Sort, Disjoint Set), Trees, and Bit Manipulation.
            </div>
          </div>
        </div>
      </GlowCard>
    </section>
  );
};
