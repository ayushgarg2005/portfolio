import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712]"
    >
      <div className="w-72 sm:w-80 space-y-8 text-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-20 h-20"
        >
          {/* Rotating gradient ring */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500 via-violet-500 to-cyan-400 animate-spin-slow opacity-60 blur-md" />
          <div className="relative w-full h-full rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-violet-600 flex items-center justify-center shadow-2xl shadow-blue-500/20">
            <span className="text-3xl font-black font-display text-white tracking-tight">AG</span>
          </div>
        </motion.div>

        {/* Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-3"
        >
          <div className="flex justify-between text-xs font-mono tracking-widest text-slate-500 uppercase">
            <span>Loading</span>
            <span className="text-blue-400 font-semibold tabular-nums">{progress}%</span>
          </div>

          {/* Refined Progress Bar */}
          <div className="h-1 w-full bg-slate-900/80 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.15 }}
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-[11px] font-mono text-slate-600 tracking-wider"
        >
          Ayush Garg — Portfolio
        </motion.p>
      </div>
    </motion.div>
  );
};
