import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaTerminal, FaExclamationTriangle } from 'react-icons/fa';

export const NotFound = ({ setActivePage }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 space-y-8"
    >
      <div className="relative">
        <div className="text-8xl sm:text-9xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-sky-500 select-none animate-pulse">
          404
        </div>
        <div className="absolute -top-4 -right-4 p-3 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/40 animate-bounce">
          <FaExclamationTriangle className="text-2xl" />
        </div>
      </div>

      <div className="space-y-3 max-w-md">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          System Endpoint Not Found
        </h2>
        <p className="text-slate-400 text-sm sm:text-base font-mono">
          ERR_ROUTING_EXCEPTION: The requested virtual coordinate does not exist in Ayush Garg's portfolio cluster.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <button
          onClick={() => setActivePage('home')}
          className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-purple-600 text-white font-bold shadow-lg shadow-sky-500/20 hover:scale-105 transition-transform"
        >
          <FaHome />
          <span>Return to Dashboard</span>
        </button>

        <button
          onClick={() => setActivePage('projects')}
          className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-semibold transition-all"
        >
          <FaTerminal />
          <span>View Projects Archive</span>
        </button>
      </div>
    </motion.div>
  );
};
