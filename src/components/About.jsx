import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaCloud, FaRobot, FaRocket, FaTerminal } from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About = () => {
  const pillars = [
    {
      num: "01",
      icon: <FaServer className="text-xl text-blue-500" />,
      title: "Backend Engineering",
      desc: "Architecting high-throughput RESTful & WebSocket APIs, optimizing database schemas, and building resilient microservices.",
      accent: "from-blue-500 to-indigo-500"
    },
    {
      num: "02",
      icon: <FaTerminal className="text-xl text-indigo-400" />,
      title: "Distributed Systems",
      desc: "Decoupling heavy workloads using Apache Kafka event pipelines and horizontal Redis Pub/Sub cross-server routing.",
      accent: "from-indigo-500 to-violet-500"
    },
    {
      num: "03",
      icon: <FaCloud className="text-xl text-sky-400" />,
      title: "DevOps & Cloud",
      desc: "Containerizing microservices with Docker, automating deployment pipelines, and managing cloud infrastructures.",
      accent: "from-sky-400 to-blue-500"
    },
    {
      num: "04",
      icon: <FaRobot className="text-xl text-purple-400" />,
      title: "AI Integration",
      desc: "Integrating LLM intelligence such as Google Gemini API via LangChain with persistent context and structured outputs.",
      accent: "from-violet-500 to-purple-500"
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative z-10 max-w-6xl mx-auto">
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
          <span>// 01. ARCHITECTURAL FOCUS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white dark:text-white light:text-slate-900">
          Engineering Resilient <span className="text-gradient">Systems</span>
        </h2>
        <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
          A glimpse into who I am, my core technical pillars, and where my engineering passion drives me every day.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left Column: Who I Am & Career Goal */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div className="glass-panel p-8 sm:p-9 rounded-[2rem] h-full flex flex-col justify-between space-y-8 relative overflow-hidden accent-bar-left pl-10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-500/10 via-violet-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white dark:text-white light:text-slate-900 tracking-tight">
                Who I Am
              </h3>

              <div className="space-y-4 text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  I am <strong className="text-white dark:text-white light:text-slate-900 font-bold">{PERSONAL_INFO.name}</strong>, a Computer Science & Engineering undergraduate passionate about building scalable, high-performance software.
                </p>
                <p>
                  My engineering approach is rooted in understanding how data flows deep inside operating systems, networking stacks, and database engines. I don't just write code; I architect systems that withstand concurrency spikes and network faults.
                </p>
              </div>
            </div>

            {/* Career Goal Callout Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 border border-blue-500/30 space-y-2.5 shadow-lg relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl" />
              <div className="flex items-center space-x-2 text-blue-400 dark:text-blue-400 light:text-blue-600 font-mono text-xs font-bold uppercase tracking-wider">
                <FaRocket className="text-sm" />
                <span>Career Objective</span>
              </div>
              <p className="text-sm font-semibold text-white dark:text-white light:text-slate-900 italic leading-relaxed">
                "{PERSONAL_INFO.careerGoal}"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 4 Pillars Cards Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-7 rounded-[1.8rem] flex flex-col justify-between group relative overflow-hidden border border-white/10 dark:border-white/10 light:border-slate-200"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-slate-100 group-hover:scale-110 transition-transform duration-300 border border-white/10 dark:border-white/10 light:border-slate-200">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-xl font-bold text-slate-700 dark:text-slate-700 light:text-slate-300 group-hover:text-blue-400/50 transition-colors">
                    {pillar.num}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold font-display text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                  {pillar.title}
                </h4>
                
                <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              {/* Bottom gradient accent line */}
              <div className={`mt-6 h-0.5 w-12 rounded-full bg-gradient-to-r ${pillar.accent} opacity-60 group-hover:w-full transition-all duration-500`} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
