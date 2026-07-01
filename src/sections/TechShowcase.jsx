import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker, FaAws, FaPython, FaLinux, FaGitAlt } from 'react-icons/fa';
import { SiRedis, SiMongodb, SiPostgresql, SiFastapi, SiTensorflow, SiKubernetes } from 'react-icons/si';

export const TechShowcase = () => {
  const icons = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED' },
    { name: 'AWS', icon: FaAws, color: '#FF9900' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
    { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
    { name: 'Linux', icon: FaLinux, color: '#FCC624' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
  ];

  // Double the array for seamless infinite looping
  const duplicatedIcons = [...icons, ...icons];

  return (
    <section className="py-16 overflow-hidden relative z-10 border-y border-slate-800/80 bg-slate-950/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 mb-6 text-center">
        <span className="text-xs font-mono tracking-widest uppercase text-slate-500">
          POWERING NEXT-GENERATION CLOUD & AI APPLICATIONS
        </span>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Gradient edge masks for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          className="flex items-center space-x-12 sm:space-x-16 whitespace-nowrap px-6"
        >
          {duplicatedIcons.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div
                key={index}
                className="flex items-center space-x-3 px-5 py-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 shadow-md group hover:border-sky-500/40 transition-all duration-300"
              >
                <IconComp style={{ color: item.color }} className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base font-bold text-slate-300 font-mono group-hover:text-white">
                  {item.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
