import React from 'react';

export const Badge = ({ children, variant = 'cyan', className = '' }) => {
  const styles = {
    cyan: 'bg-sky-500/10 text-sky-400 border-sky-500/20 shadow-[0_0_12px_rgba(56,189,248,0.1)]',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20 shadow-[0_0_12px_rgba(168,85,247,0.1)]',
    gray: 'bg-slate-800/80 text-slate-300 border-slate-700/60',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${styles[variant] || styles.cyan} ${className}`}
    >
      {children}
    </span>
  );
};
