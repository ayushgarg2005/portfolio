import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400); // Give smooth pause at 100%
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white"
    >
      <div className="w-64 sm:w-80 space-y-6 text-center">
        {/* Animated Brand Logo / Initial */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-3xl font-black shadow-2xl shadow-blue-500/30"
        >
          A
        </motion.div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono tracking-widest text-slate-400 uppercase">
            <span>System Initialization</span>
            <span className="text-blue-400 font-bold">{progress}%</span>
          </div>

          {/* Premium Apple-like Progress Bar */}
          <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-400 to-sky-400 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.8)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            />
          </div>
        </div>

        <p className="text-[11px] font-mono text-slate-500 tracking-wider animate-pulse">
          LOADING PORTFOLIO ENVIRONMENT...
        </p>
      </div>
    </motion.div>
  );
};
