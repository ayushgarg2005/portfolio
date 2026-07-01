import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaServer, FaLaptopCode, FaDatabase, FaCloud, 
  FaBrain, FaTerminal, FaCheckCircle, FaTools, FaBolt, FaLayerGroup,
  FaNodeJs, FaReact, FaPython, FaDocker, FaAws, FaLinux, FaGitAlt, FaCode, FaHtml5, FaCss3Alt, FaJs, FaLock, FaNetworkWired, FaRobot
} from 'react-icons/fa';
import { 
  SiExpress, SiTailwindcss, SiPostgresql, SiMongodb, SiRedis, SiPrisma, 
  SiApachekafka, SiVite, SiRedux, SiSocketdotio, SiFirebase, SiCloudinary,
  SiNumpy, SiPandas, SiScikitlearn, SiLangchain, SiCplusplus 
} from 'react-icons/si';
import { SKILLS_DATA } from '../data/portfolioData';

const getSkillIcon = (name) => {
  const lower = name.toLowerCase();
  if (lower.includes('node')) return <FaNodeJs className="text-[#339933]" />;
  if (lower.includes('express')) return <SiExpress className="text-slate-200 dark:text-slate-200 light:text-slate-800" />;
  if (lower.includes('restful') || lower.includes('api')) return <FaNetworkWired className="text-blue-400" />;
  if (lower.includes('jwt') || lower.includes('auth')) return <FaLock className="text-amber-400" />;
  if (lower.includes('socket.io')) return <SiSocketdotio className="text-slate-200 dark:text-slate-200 light:text-slate-800" />;
  if (lower.includes('microservice')) return <FaServer className="text-indigo-400" />;
  if (lower.includes('react')) return <FaReact className="text-[#61DAFB]" />;
  if (lower.includes('vite')) return <SiVite className="text-[#646CFF]" />;
  if (lower.includes('redux')) return <SiRedux className="text-[#764ABC]" />;
  if (lower.includes('tailwind')) return <SiTailwindcss className="text-[#06B6D4]" />;
  if (lower === 'javascript' || lower === 'js') return <FaJs className="text-[#F7DF1E]" />;
  if (lower.includes('postgres')) return <SiPostgresql className="text-[#4169E1]" />;
  if (lower.includes('mongo')) return <SiMongodb className="text-[#47A248]" />;
  if (lower.includes('redis')) return <SiRedis className="text-[#DC382D]" />;
  if (lower.includes('firebase')) return <SiFirebase className="text-[#FFCA28]" />;
  if (lower.includes('prisma')) return <SiPrisma className="text-slate-200 dark:text-slate-200 light:text-slate-800" />;
  if (lower.includes('docker')) return <FaDocker className="text-[#2496ED]" />;
  if (lower.includes('kafka')) return <SiApachekafka className="text-slate-200 dark:text-slate-200 light:text-slate-800" />;
  if (lower === 'git' || lower === 'github') return <FaGitAlt className="text-[#F05032]" />;
  if (lower.includes('cloudinary')) return <SiCloudinary className="text-[#3448C5]" />;
  if (lower.includes('multer')) return <FaCloud className="text-sky-400" />;
  if (lower === 'python') return <FaPython className="text-[#3776AB]" />;
  if (lower.includes('numpy')) return <SiNumpy className="text-[#013243]" />;
  if (lower.includes('pandas')) return <SiPandas className="text-[#150458]" />;
  if (lower.includes('scikit')) return <SiScikitlearn className="text-[#F7931E]" />;
  if (lower.includes('langchain')) return <SiLangchain className="text-[#1C3C3C]" />;
  if (lower.includes('gemini')) return <FaRobot className="text-[#8E75B2]" />;
  if (lower.includes('c++')) return <SiCplusplus className="text-[#00599C]" />;
  if (lower.includes('sql')) return <FaDatabase className="text-[#00758F]" />;
  return <FaCode className="text-blue-400" />;
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...SKILLS_DATA.map((s) => s.category)];

  const getCategoryDetails = (cat) => {
    switch (cat) {
      case 'Languages':
        return {
          icon: <FaTerminal className="text-2xl text-amber-400" />,
          border: 'hover:border-amber-500/60',
          glow: 'group-hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]',
          badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
          barGradient: 'from-amber-500 to-yellow-400',
          accentColor: 'text-amber-400',
          tagline: 'Core Algorithmic Rigor & Systems Programming',
          highlights: [
            '1000+ competitive data structure & algorithm problems solved',
            'Writing optimal space/time complexity solutions in C++ & Python',
            'Deep understanding of systems programming and SQL databases'
          ]
        };
      case 'Frontend':
        return {
          icon: <FaLaptopCode className="text-2xl text-cyan-400" />,
          border: 'hover:border-cyan-500/60',
          glow: 'group-hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]',
          badgeBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
          barGradient: 'from-cyan-500 to-teal-400',
          accentColor: 'text-cyan-400',
          tagline: 'Reactive & Modern User Interfaces',
          highlights: [
            'Building responsive UIs with React.js and Vite',
            'Implementing design systems with Tailwind CSS',
            'Managing complex state with Redux Toolkit'
          ]
        };
      case 'Backend & APIs':
        return {
          icon: <FaServer className="text-2xl text-blue-500" />,
          border: 'hover:border-blue-500/60',
          glow: 'group-hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]',
          badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
          barGradient: 'from-blue-600 to-sky-400',
          accentColor: 'text-blue-400',
          tagline: 'High-Throughput & Low-Latency Architecture',
          highlights: [
            'Architecting RESTful APIs and real-time WebSocket communication',
            'Building real-time features with Socket.io',
            'Designing scalable microservice architectures'
          ]
        };
      case 'Databases & Caching':
        return {
          icon: <FaDatabase className="text-2xl text-emerald-400" />,
          border: 'hover:border-emerald-500/60',
          glow: 'group-hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]',
          badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
          barGradient: 'from-emerald-500 to-green-400',
          accentColor: 'text-emerald-400',
          tagline: 'Reliable Persistence & Sub-Millisecond Caching',
          highlights: [
            'Designing relational schemas in PostgreSQL and document stores in MongoDB',
            'Accelerating lookups via Redis Pub/Sub, Rate Limiting, and Caching',
            'Integrating Firebase for authentication and real-time data'
          ]
        };
      case 'DevOps & Tools':
        return {
          icon: <FaCloud className="text-2xl text-purple-400" />,
          border: 'hover:border-purple-500/60',
          glow: 'group-hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]',
          badgeBg: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
          barGradient: 'from-purple-600 to-indigo-400',
          accentColor: 'text-purple-400',
          tagline: 'Containerization, Streaming & Developer Tooling',
          highlights: [
            'Containerizing multi-tier deployments using Docker',
            'Orchestrating event-driven streaming pipelines with Apache Kafka',
            'Managing media uploads with Cloudinary and Multer'
          ]
        };
      case 'Machine Learning':
        return {
          icon: <FaBrain className="text-2xl text-rose-400" />,
          border: 'hover:border-rose-500/60',
          glow: 'group-hover:shadow-[0_0_35px_rgba(244,63,94,0.25)]',
          badgeBg: 'bg-rose-500/10 text-rose-300 border-rose-500/30',
          barGradient: 'from-rose-500 to-pink-400',
          accentColor: 'text-rose-400',
          tagline: 'Applied LLM Intelligence & Data Pipelines',
          highlights: [
            'Integrating Google Gemini API intelligence into applications',
            'Structuring LangChain conversation buffers and tool agents',
            'Processing numerical datasets using NumPy, Pandas & Scikit-Learn'
          ]
        };
      default:
        return {
          icon: <FaTerminal className="text-2xl text-amber-400" />,
          border: 'hover:border-amber-500/60',
          glow: 'group-hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]',
          badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
          barGradient: 'from-amber-500 to-yellow-400',
          accentColor: 'text-amber-400',
          tagline: 'Core Engineering Skills',
          highlights: [
            'Building production-ready software systems',
            'Writing optimal solutions across multiple languages',
            'Deep understanding of computer science fundamentals'
          ]
        };
    }
  };

  const filteredData = activeCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative z-10 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3 mb-16"
      >
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold tracking-widest uppercase text-blue-500 dark:text-blue-400 light:text-blue-600">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span>// 02. TECHNICAL ARSENAL</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white dark:text-white light:text-slate-900">
          Enterprise-Grade <span className="text-gradient">Tech Stack</span>
        </h2>
        <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          A deeply verified engineering stack built to withstand high concurrency, deliver seamless UI interactions, and maintain robust infrastructure.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold font-mono tracking-wide transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : 'glass-panel text-slate-400 hover:text-white dark:text-slate-400 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900 hover:scale-[1.02]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Bento Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredData.map((group, idx) => {
          const theme = getCategoryDetails(group.category);

          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-panel p-7 sm:p-9 rounded-[2rem] flex flex-col justify-between space-y-8 transition-all duration-500 group relative overflow-hidden border border-white/10 dark:border-white/10 light:border-slate-200 ${theme.glow}`}
            >
              {/* Top Gradient Line Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-4 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    {theme.icon}
                  </div>
                  <span className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold border ${theme.badgeBg}`}>
                    {group.skills.length} TECHNOLOGIES
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black font-display text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                    {group.category}
                  </h3>
                  <p className={`text-xs font-mono font-bold ${theme.accentColor} mt-1 uppercase tracking-wider`}>
                    {theme.tagline}
                  </p>
                </div>
              </div>

              {/* Skills Proficiency Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 py-2">
                {group.skills.map((skill) => {
                  const isLearning = skill.name.includes('(Learning)');
                  const cleanName = skill.name.replace(' (Learning)', '');

                  return (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-slate-100/80 border border-white/5 dark:border-white/5 light:border-slate-200/80 hover:border-white/20 transition-all flex items-center justify-between group/skill shadow-sm"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2.5 rounded-xl bg-slate-950/40 dark:bg-slate-950/40 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 text-lg flex items-center justify-center group-hover/skill:scale-110 transition-transform shadow-inner">
                          {getSkillIcon(cleanName)}
                        </div>
                        <span className="text-xs font-bold text-white dark:text-white light:text-slate-900 tracking-wide">
                          {cleanName}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-white/5 dark:bg-white/5 light:bg-white text-slate-400 dark:text-slate-400 light:text-slate-600 border border-white/5 dark:border-white/5 light:border-slate-200 font-semibold">
                        {isLearning ? 'Learning' : 'Expert'}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Core Capabilities Checklist */}
              <div className="pt-5 border-t border-white/10 dark:border-white/10 light:border-slate-200 space-y-2.5">
                <div className="text-[11px] font-mono font-bold text-slate-400 dark:text-slate-400 light:text-slate-500 uppercase tracking-wider">
                  Core Engineering Focus:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium">
                  {theme.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-center space-x-2">
                      <FaCheckCircle className={`text-xs ${theme.accentColor} flex-shrink-0`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
