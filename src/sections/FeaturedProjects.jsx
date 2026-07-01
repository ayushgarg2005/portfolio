import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLayerGroup } from 'react-icons/fa';
import { PROJECTS_DATA } from '../data/projectsData';
import { GlowCard } from '../components/common/GlowCard';
import { Modal } from '../components/common/Modal';

export const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <h2 className="text-xs font-mono tracking-widest uppercase text-sky-400">
          // Systems & Web Applications
        </h2>
        <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Featured Projects
        </h3>
        <p className="text-slate-400 text-sm sm:text-base">
          Production-grade applications architected with modern backend pipelines and responsive UIs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <GlowCard className="h-full flex flex-col justify-between bg-slate-950/80 border-slate-800/80 group overflow-hidden">
              <div>
                {/* Image Header */}
                <div className="relative h-56 overflow-hidden bg-slate-900 border-b border-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <h4 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors tracking-tight">
                    {project.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="px-6 sm:px-8 pb-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <FaLayerGroup />
                  <span>View Architecture & Case Study</span>
                </button>

                <div className="flex items-center space-x-3 text-slate-400">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors text-lg"
                    title="Source Code"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors text-lg"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>

      {/* Case Study Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
      >
        {selectedProject && (
          <div className="space-y-6 text-slate-300">
            <div className="space-y-2">
              <h4 className="text-sm font-mono uppercase tracking-wider text-sky-400">System Architecture</h4>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre overflow-x-auto leading-relaxed">
                {selectedProject.architecture}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-mono uppercase tracking-wider text-purple-400">Engineering Challenges</h4>
              <ul className="list-disc list-inside space-y-1.5 text-sm leading-relaxed text-slate-300">
                {selectedProject.caseStudy.challenges.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-mono uppercase tracking-wider text-emerald-400">Key Implementations</h4>
              <ul className="list-disc list-inside space-y-1.5 text-sm leading-relaxed text-slate-300">
                {selectedProject.caseStudy.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
