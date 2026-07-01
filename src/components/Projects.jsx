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
        className="text-center space-y-4 mb-16"
      >
        <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase">
          // 03. FEATURED WORK
        </span>
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight">
          Production <span className="text-blue-500">Projects</span>
        </h2>
        <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
          Architected from the ground up to solve complex concurrency bottlenecks, deliver low-latency real-time data, and enforce scalable cloud infrastructures.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, idx) => {
          const isBuilding = project.status === 'Currently Building';

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="glass-panel rounded-3xl overflow-hidden flex flex-col justify-between group relative border border-white/10 dark:border-white/10 light:border-black/10 hover:border-blue-500/50 transition-all duration-500 shadow-xl"
            >
              {/* Gradient glow accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 via-transparent to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Screenshot Header & Status Badge */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

                  {/* Status Pill */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wide backdrop-blur-md border flex items-center space-x-1.5 shadow-lg ${
                        isBuilding
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 animate-pulse'
                          : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      }`}
                    >
                      {isBuilding ? <FaTools className="text-amber-400" /> : <FaCheckCircle className="text-emerald-400" />}
                      <span>{project.status.toUpperCase()}</span>
                    </span>
                  </div>

                  {/* Title & Tagline overlay */}
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-xl sm:text-2xl font-black font-display text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-mono line-clamp-1 mt-0.5">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 space-y-6">
                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features List */}
                  {project.features && (
                    <div className="space-y-2 pt-2 border-t border-white/5 dark:border-white/5 light:border-black/5">
                      <span className="text-[11px] font-mono font-bold uppercase text-slate-400 tracking-wider">
                        Key Highlights:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                        {project.features.slice(0, 3).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start space-x-2">
                            <span className="text-blue-500 mt-0.5">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 text-[11px] font-mono text-blue-400 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-6 sm:px-8 pb-6 pt-2 flex items-center justify-between gap-4 border-t border-white/5 dark:border-white/5 light:border-black/5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 border border-white/10 dark:border-white/10 light:border-black/10 text-xs font-bold font-mono text-center flex items-center justify-center space-x-2 text-white dark:text-white light:text-slate-900 transition-all"
                >
                  <FaGithub className="text-sm" />
                  <span>Codebase</span>
                </a>

                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold font-mono text-center flex items-center justify-center space-x-2 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all"
                >
                  <span>Live Demo</span>
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
