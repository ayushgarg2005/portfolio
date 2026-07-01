import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { PROJECTS_DATA } from '../data/projectsData';
import { GlowCard } from '../components/common/GlowCard';
import { Modal } from '../components/common/Modal';

export const ProjectsPage = ({ setActivePage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    return p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
           p.techStack.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="py-16 px-4 sm:px-6 max-w-6xl mx-auto space-y-12"
    >
      <div className="flex items-center justify-between">
        <button
          onClick={() => setActivePage('home')}
          className="inline-flex items-center space-x-2 text-slate-400 hover:text-white transition-colors text-sm font-mono"
        >
          <FaArrowLeft />
          <span>Back to Overview</span>
        </button>
        <span className="text-xs font-mono px-3 py-1 rounded bg-slate-900 border border-slate-800 text-sky-400">
          Projects Archive
        </span>
      </div>

      <div className="space-y-3">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          System & Web Applications
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl font-normal">
          Deep dives into event-driven backend architectures, real-time WebSockets, and full-stack MERN platforms.
        </p>
      </div>

      <div className="relative w-full max-w-md">
        <FaSearch className="absolute left-4 top-3.5 text-slate-500 text-sm" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search technologies (Kafka, Redis, React)..."
          className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-sky-500 text-sm placeholder-slate-600"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <GlowCard key={project.id} className="flex flex-col justify-between h-full bg-slate-950/80 border-slate-800/80 group">
            <div>
              <div className="relative h-56 overflow-hidden bg-slate-900 border-b border-slate-800">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-normal">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((t) => (
                    <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-8 pb-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(project)}
                className="text-xs font-mono font-semibold text-sky-400 hover:text-sky-300 transition-colors"
              >
                View Architecture & Case Study
              </button>
              <div className="flex items-center space-x-3 text-slate-400">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-white text-lg"><FaGithub /></a>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="hover:text-white text-lg"><FaExternalLinkAlt /></a>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} title={selectedProject?.title || ''}>
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
              <ul className="list-disc list-inside text-sm space-y-1.5 leading-relaxed text-slate-300">
                {selectedProject.caseStudy.challenges.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-mono uppercase tracking-wider text-emerald-400">Key Implementations</h4>
              <ul className="list-disc list-inside text-sm space-y-1.5 leading-relaxed text-slate-300">
                {selectedProject.caseStudy.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </motion.div>
  );
};
