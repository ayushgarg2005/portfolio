import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowLeft, FaGraduationCap, FaCode, FaUniversity, FaTrophy } from 'react-icons/fa';
import { PERSONAL_INFO, SKILLS_DATA, ACHIEVEMENTS_DATA, EDUCATION_DATA } from '../data/portfolioData';
import { PROJECTS_DATA } from '../data/projectsData';
import { GlowCard } from '../components/common/GlowCard';
import { Badge } from '../components/common/Badge';

export const ResumePage = ({ setActivePage }) => {
  const handleDownload = () => {
    alert("Simulating high-resolution PDF download of Ayush Garg's Official Resume.");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="py-16 px-4 sm:px-6 max-w-5xl mx-auto space-y-12"
    >
      {/* Navigation & Actions Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => setActivePage('home')}
          className="inline-flex items-center space-x-2 text-slate-400 hover:text-sky-400 transition-colors font-semibold"
        >
          <FaArrowLeft />
          <span>Back to Home Overview</span>
        </button>

        <button
          onClick={handleDownload}
          className="inline-flex items-center space-x-3 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-purple-600 text-white font-bold shadow-lg shadow-sky-500/20 hover:scale-105 transition-transform"
        >
          <FaDownload />
          <span>Download PDF Resume</span>
        </button>
      </div>

      {/* Resume Document Sheet */}
      <GlowCard className="p-8 sm:p-14 space-y-12 bg-slate-950/95 border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        {/* Header Title */}
        <div className="border-b border-slate-800 pb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sky-400 font-mono text-base sm:text-lg mt-1">
              B.Tech Computer Science & Engineering (NSUT '27)
            </p>
          </div>
          <div className="text-left md:text-right text-xs sm:text-sm font-mono text-slate-400 space-y-1">
            <div>📍 {PERSONAL_INFO.location}</div>
            <div>📞 {PERSONAL_INFO.phone}</div>
            <div>📧 {PERSONAL_INFO.email}</div>
            <div>🔗 {PERSONAL_INFO.github.replace('https://', '')}</div>
          </div>
        </div>

        {/* Education Section Table */}
        <div className="space-y-4">
          <h2 className="text-lg font-mono text-sky-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-800/80 pb-2">
            <FaUniversity /> Academic Education
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-xs font-mono uppercase text-slate-400">
                  <th className="py-3 pr-4">Year</th>
                  <th className="py-3 px-4">Degree / Examination</th>
                  <th className="py-3 px-4">Institution / Board</th>
                  <th className="py-3 pl-4 text-right">CGPA / %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm">
                {EDUCATION_DATA.map((edu, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-4 pr-4 font-mono text-sky-400 font-bold whitespace-nowrap">{edu.year}</td>
                    <td className="py-4 px-4 font-semibold text-white">
                      <div>{edu.degree}</div>
                      <div className="text-xs font-mono text-slate-400 mt-0.5">{edu.highlight}</div>
                    </td>
                    <td className="py-4 px-4 text-slate-300">{edu.institution}</td>
                    <td className="py-4 pl-4 font-mono font-bold text-purple-400 text-right whitespace-nowrap">{edu.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Technical Competencies */}
        <div className="space-y-4">
          <h2 className="text-lg font-mono text-purple-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-800/80 pb-2">
            <FaCode /> Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SKILLS_DATA.map((cat) => (
              <div key={cat.category} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <div className="text-sm font-bold text-white mb-2">{cat.category}</div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <Badge key={s.name} variant="cyan">{s.name}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Summary */}
        <div className="space-y-6">
          <h2 className="text-lg font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-800/80 pb-2">
            <FaCode /> Projects
          </h2>
          <div className="space-y-6 border-l-2 border-slate-800 pl-6 ml-2">
            {PROJECTS_DATA.map((project, i) => (
              <div key={i} className="space-y-1 relative">
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-sky-400 ring-4 ring-slate-950" />
                <div className="flex flex-wrap items-center justify-between text-sm">
                  <span className="font-bold text-white text-base">{project.title}</span>
                  <span className="font-mono text-sky-400 text-xs">{project.tagline}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="cyan">{tech}</Badge>
                  ))}
                </div>
                <p className="text-sm text-slate-300 pt-1 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Achievements */}
        <div className="space-y-4 pt-2">
          <h2 className="text-lg font-mono text-amber-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-800/80 pb-2">
            <FaTrophy /> Academic Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ACHIEVEMENTS_DATA.map((ach, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-900/30 border border-slate-800 flex justify-between items-center">
                <div>
                  <div className="font-bold text-white text-sm">{ach.title}</div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">{ach.issuer}</div>
                </div>
                <Badge variant="purple">{ach.value}{ach.suffix}</Badge>
              </div>
            ))}
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
};
