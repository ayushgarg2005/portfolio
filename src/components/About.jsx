import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaCloud, FaRobot, FaRocket, FaTerminal } from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About = () => {
  const pillars = [
    {
      icon: <FaServer className="text-2xl text-blue-500" />,
      title: "Passion for Backend Engineering",
      desc: "Architecting high-throughput RESTful & WebSocket APIs, optimizing SQL/NoSQL schemas, and enforcing robust authentication boundaries.",
    },
    {
      icon: <FaTerminal className="text-2xl text-indigo-400" />,
      title: "Distributed Systems Interest",
      desc: "Decoupling heavy ingestion workloads using Apache Kafka event pipelines and horizontal Redis Pub/Sub cross-server routing.",
    },
    {
      icon: <FaCloud className="text-2xl text-sky-400" />,
      title: "DevOps Learning Journey",
      desc: "Containerizing microservices with Docker Compose, automating AWS EC2 deployments via GitHub Actions CI/CD, and learning Kubernetes & Terraform.",
    },
    {
      icon: <FaRobot className="text-2xl text-purple-400" />,
      title: "AI Enthusiast",
      desc: "Integrating LLM intelligence such as Google Gemini 2.0 Flash via LangChain with persistent ConversationBufferMemory.",
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
        className="text-center space-y-4 mb-16"
      >
        <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase">
          // 01. ABOUT ME
        </span>
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight">
          Engineering Resilient <span className="text-blue-500">Systems</span>
        </h2>
        <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
          A glimpse into who I am, my architectural focus, and where my engineering passion drives me.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Who I Am & Career Goal */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="glass-panel p-8 rounded-3xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="text-2xl font-bold font-display flex items-center space-x-3">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              <span>Who I Am</span>
            </h3>

            <div className="space-y-4 text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                I am <strong className="text-white dark:text-white light:text-slate-900 font-semibold">{PERSONAL_INFO.name}</strong>, a B.Tech Computer Science undergraduate at NSUT Delhi (Class of 2027).
              </p>
              <p>
                My engineering approach is rooted in understanding how data flows deep inside operating systems, networking stacks, and database engines. I don't just write code; I design systems that withstand concurrency spikes and network faults.
              </p>
            </div>

            {/* Career Goal Callout Box */}
            <div className="p-5 rounded-2xl bg-blue-600/10 border border-blue-500/30 space-y-2">
              <div className="flex items-center space-x-2 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider">
                <FaRocket />
                <span>Ultimate Career Goal</span>
              </div>
              <p className="text-sm font-semibold text-white dark:text-white light:text-slate-900">
                "{PERSONAL_INFO.careerGoal}"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 4 Pillars Cards Timeline */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-7 rounded-3xl space-y-4 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1.5 group cursor-default relative overflow-hidden"
            >
              <div className="p-3.5 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 w-fit group-hover:scale-110 transition-transform duration-300 border border-white/10 dark:border-white/10 light:border-black/10">
                {pillar.icon}
              </div>
              
              <h4 className="text-lg font-bold font-display text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                {pillar.title}
              </h4>
              
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
