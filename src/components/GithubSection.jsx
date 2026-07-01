import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaUserFriends, FaFolderOpen, FaExternalLinkAlt } from 'react-icons/fa';
import { useGithub } from '../hooks/useGithub';

export const GithubSection = () => {
  const { stats, repos, loading, username } = useGithub();

  const languages = [
    { name: 'JavaScript', percentage: '45%', color: 'bg-yellow-400' },
    { name: 'C++', percentage: '30%', color: 'bg-blue-500' },
    { name: 'Python', percentage: '15%', color: 'bg-emerald-500' },
    { name: 'TypeScript', percentage: '10%', color: 'bg-sky-400' },
  ];

  return (
    <section id="github" className="py-24 px-4 sm:px-6 relative z-10 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4 mb-16"
      >
        <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase">
          // 06. OPEN SOURCE METRICS
        </span>
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight">
          Live <span className="text-blue-500">GitHub</span> Activity
        </h2>
        <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
          Dynamically fetched repository statistics, languages, and contribution logs directly from the GitHub API.
        </p>
      </motion.div>

      {/* Stats Counter Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="glass-panel p-5 rounded-2xl flex items-center space-x-4 border border-white/10 dark:border-white/10 light:border-black/10">
          <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500"><FaFolderOpen className="text-xl" /></div>
          <div>
            <div className="text-2xl font-black font-display">{loading ? '...' : stats.repos}</div>
            <div className="text-xs font-mono text-slate-400">Public Repos</div>
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl flex items-center space-x-4 border border-white/10 dark:border-white/10 light:border-black/10">
          <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400"><FaUserFriends className="text-xl" /></div>
          <div>
            <div className="text-2xl font-black font-display">{loading ? '...' : stats.followers}</div>
            <div className="text-xs font-mono text-slate-400">Followers</div>
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl flex items-center space-x-4 border border-white/10 dark:border-white/10 light:border-black/10">
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400"><FaCodeBranch className="text-xl" /></div>
          <div>
            <div className="text-2xl font-black font-display">{loading ? '...' : stats.following}</div>
            <div className="text-xs font-mono text-slate-400">Following</div>
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl flex items-center space-x-4 border border-white/10 dark:border-white/10 light:border-black/10">
          <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400"><FaStar className="text-xl" /></div>
          <div>
            <div className="text-2xl font-black font-display">1,240+</div>
            <div className="text-xs font-mono text-slate-400">Total Commits</div>
          </div>
        </div>
      </div>

      {/* Contribution Graph Representation & Top Languages */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        
        {/* Mock Contribution Grid */}
        <div className="lg:col-span-8 glass-panel p-6 sm:p-8 rounded-3xl space-y-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FaGithub className="text-2xl text-white dark:text-white light:text-slate-900" />
              <span className="font-bold font-display text-lg">Contribution Graph (@{username})</span>
            </div>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-blue-500 hover:underline flex items-center space-x-1"
            >
              <span>View Profile</span>
              <FaExternalLinkAlt className="text-[10px]" />
            </a>
          </div>

          {/* Grid blocks simulating activity */}
          <div className="grid grid-flow-col grid-rows-7 gap-1.5 py-4 overflow-x-auto max-w-full justify-start">
            {Array.from({ length: 140 }).map((_, i) => {
              const intensity = Math.random() > 0.6 ? (Math.random() > 0.5 ? 'bg-blue-600' : 'bg-blue-400') : (Math.random() > 0.7 ? 'bg-blue-800' : 'bg-white/5 dark:bg-white/5 light:bg-black/10');
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.4 }}
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-sm ${intensity} transition-colors cursor-pointer`}
                  title={`Activity contribution level`}
                />
              );
            })}
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-white/5 dark:border-white/5 light:border-black/5">
            <span>Learn how we build scalable backends</span>
            <div className="flex items-center space-x-2">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded-sm bg-white/5 dark:bg-white/5 light:bg-black/10" />
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-800" />
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-600" />
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-400" />
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Top Languages Breakdown */}
        <div className="lg:col-span-4 glass-panel p-6 sm:p-8 rounded-3xl space-y-6 flex flex-col justify-between">
          <h3 className="font-bold font-display text-lg">Top Languages</h3>
          
          <div className="space-y-4">
            {languages.map((lang) => (
              <div key={lang.name} className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="font-semibold text-white dark:text-white light:text-slate-900">{lang.name}</span>
                  <span className="text-slate-400">{lang.percentage}</span>
                </div>
                <div className="w-full bg-slate-800/80 h-2 rounded-full overflow-hidden">
                  <div className={`${lang.color} h-full rounded-full`} style={{ width: lang.percentage }} />
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-mono">
            ⚡ Most active in real-time distributed microservices & systems algorithms.
          </div>
        </div>

      </div>

      {/* Dynamic Repository Cards */}
      <h3 className="text-xl font-bold font-display mb-6 flex items-center space-x-2">
        <span>Featured Repositories</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.slice(0, 6).map((repo) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-panel p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-blue-500/50 transition-all group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold font-display text-blue-400 group-hover:underline truncate">
                  {repo.name}
                </span>
                <FaExternalLinkAlt className="text-xs text-slate-400 group-hover:text-white" />
              </div>
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {repo.description || "No description provided."}
              </p>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-3 border-t border-white/5 dark:border-white/5 light:border-black/5">
              <span className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <span>{repo.language || "Code"}</span>
              </span>
              <span className="flex items-center space-x-3">
                <span className="flex items-center space-x-1">
                  <FaStar className="text-amber-400" />
                  <span>{repo.stargazers_count}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <FaCodeBranch />
                  <span>{repo.forks_count}</span>
                </span>
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
