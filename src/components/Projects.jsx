import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaTools } from 'react-icons/fa';
import { PROJECTS_DATA } from '../data/projectsData';

export const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative z-10 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3 mb-14"
      >
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold tracking-widest uppercase text-blue-500 dark:text-blue-400 light:text-blue-600">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span>// 03. FEATURED WORK</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white dark:text-white light:text-slate-900">
          Production <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Production-grade applications architected to solve complex concurrency bottlenecks, deliver low-latency real-time data, and enforce scalable cloud infrastructures.
        </p>
      </motion.div>

      {/* Projects Grid: 3-column compact responsive layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS_DATA.map((project, idx) => {
          const isBuilding = project.status === 'Currently Building';

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="glass-panel rounded-3xl overflow-hidden flex flex-col justify-between group relative border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-blue-500/40 transition-all duration-500 shadow-xl hover:-translate-y-1.5"
            >
              {/* Gradient accent glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 via-transparent to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Compact Screenshot Header */}
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />

                  {/* Top Row Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-slate-300">
                      0{idx + 1}
                    </span>

                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wide backdrop-blur-md border flex items-center space-x-1 shadow-md ${
                        isBuilding
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 animate-pulse'
                          : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      }`}
                    >
                      {isBuilding ? <FaTools className="text-amber-400 text-[10px]" /> : <FaCheckCircle className="text-emerald-400 text-[10px]" />}
                      <span>{project.status.toUpperCase()}</span>
                    </span>
                  </div>

                  {/* Overlay Title */}
                  <div className="absolute bottom-3.5 left-5 right-5">
                    <span className="text-[10px] font-mono font-semibold text-blue-400 uppercase tracking-wider block mb-0.5">
                      {project.tagline}
                    </span>
                    <h3 className="text-lg font-black font-display text-white group-hover:text-blue-400 transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Compact Body Content */}
                <div className="p-5 sm:p-6 space-y-4">
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed line-clamp-3 font-normal">
                    {project.description}
                  </p>

                  {/* Concise Key Highlights List */}
                  {project.features && (
                    <div className="space-y-1.5 pt-2 border-t border-white/10 dark:border-white/10 light:border-slate-200">
                      <span className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">
                        Highlights:
                      </span>
                      <ul className="space-y-1 text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600">
                        {project.features.slice(0, 2).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start space-x-2 leading-tight">
                            <span className="text-blue-500 mt-0.5 flex-shrink-0">•</span>
                            <span className="line-clamp-1">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.techStack.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-lg bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200 text-[10px] font-mono text-blue-400 dark:text-blue-400 light:text-blue-600 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Compact Action Buttons Footer */}
              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-between gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 hover:bg-white/10 border border-white/10 dark:border-white/10 light:border-slate-200 text-[11px] font-bold font-mono text-center flex items-center justify-center space-x-1.5 text-white dark:text-white light:text-slate-900 transition-all shadow-sm"
                >
                  <FaGithub className="text-xs" />
                  <span>Code</span>
                </a>

                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-[11px] font-bold font-mono text-center flex items-center justify-center space-x-1.5 text-white shadow-md shadow-blue-500/20 transition-all"
                >
                  <span>Live Demo</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
