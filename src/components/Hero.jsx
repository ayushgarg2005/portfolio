import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaFileDownload, FaPaperPlane } from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/portfolioData';
import profileImg from '../assets/profile.png';

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Animated typing effect logic
  useEffect(() => {
    const roles = PERSONAL_INFO.titles;
    const fullText = roles[roleIndex];
    let typingSpeed = isDeleting ? 35 : 75;

    if (!isDeleting && currentText === fullText) {
      typingSpeed = 2500; // Pause at end
      setTimeout(() => setIsDeleting(true), typingSpeed);
      return;
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT SIDE: Content & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 space-y-8 text-center lg:text-left"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 dark:bg-blue-500/10 light:bg-blue-50 text-blue-400 dark:text-blue-400 light:text-blue-600 text-xs font-mono tracking-wide shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </motion.div>

          {/* Main Headings */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-display tracking-tight leading-[1.08] text-white dark:text-white light:text-slate-900">
              Hi, I'm <br className="hidden sm:inline" />
              <span className="text-gradient">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Typing Role Display */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start text-xl sm:text-2xl md:text-3xl font-bold font-mono text-slate-300 dark:text-slate-300 light:text-slate-700">
              <span className="text-blue-500 dark:text-blue-400 light:text-blue-600 mr-3 font-normal opacity-80">/</span>
              <span>{currentText}</span>
              <span className="w-0.5 h-6 sm:h-7 bg-blue-500 ml-1.5 animate-blink" />
            </div>
          </div>

          {/* Short Bio Description */}
          <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] hover:bg-[position:right_center] text-white font-bold text-sm shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] transition-all duration-500 transform hover:-translate-y-0.5 flex items-center space-x-2.5"
            >
              <FaCode className="group-hover:rotate-12 transition-transform duration-300" />
              <span>Explore Projects</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="px-7 py-4 rounded-2xl border border-white/10 dark:border-white/10 light:border-slate-300 bg-white/5 dark:bg-white/5 light:bg-white hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-slate-50 text-white dark:text-white light:text-slate-900 font-semibold text-sm transition-all flex items-center space-x-2.5 shadow-sm"
            >
              <FaFileDownload className="text-blue-400" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-4 rounded-2xl border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 font-semibold text-sm transition-all flex items-center space-x-2"
            >
              <FaPaperPlane className="text-xs" />
              <span>Contact</span>
            </button>
          </div>

          {/* Social Links Row */}
          <div className="pt-6 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-center lg:justify-start space-x-4 text-slate-400">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl border border-white/5 dark:border-white/5 light:border-slate-200 bg-white/5 dark:bg-white/5 light:bg-white hover:border-blue-500/50 hover:text-white dark:hover:text-white light:hover:text-blue-600 hover:bg-blue-500/10 transition-all shadow-sm"
              title="GitHub"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl border border-white/5 dark:border-white/5 light:border-slate-200 bg-white/5 dark:bg-white/5 light:bg-white hover:border-blue-500/50 hover:text-white dark:hover:text-white light:hover:text-blue-600 hover:bg-blue-500/10 transition-all shadow-sm"
              title="LinkedIn"
            >
              <FaLinkedin className="text-lg text-blue-500" />
            </a>
            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3.5 rounded-xl border border-white/5 dark:border-white/5 light:border-slate-200 bg-white/5 dark:bg-white/5 light:bg-white hover:border-amber-500/50 hover:text-white dark:hover:text-white light:hover:text-amber-600 hover:bg-amber-500/10 transition-all font-mono font-bold text-xs text-amber-500 shadow-sm flex items-center space-x-2"
              title="LeetCode Profile"
            >
              <span>LeetCode</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-3.5 rounded-xl border border-white/5 dark:border-white/5 light:border-slate-200 bg-white/5 dark:bg-white/5 light:bg-white hover:border-blue-500/50 hover:text-white dark:hover:text-white light:hover:text-blue-600 hover:bg-blue-500/10 transition-all shadow-sm"
              title="Email Me"
            >
              <FaEnvelope className="text-lg text-sky-400" />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Animated Centerpiece Profile Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Ambient Background Soft Glow */}
          <div className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-500 rounded-full blur-[100px] opacity-25 dark:opacity-25 light:opacity-15 animate-pulse" />

          {/* Rotating Outer Gradient Back-Glow */}
          <div className="relative w-72 h-88 sm:w-84 sm:h-[26rem] flex items-center justify-center">
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-blue-500 via-violet-500 to-cyan-400 opacity-40 blur-xl group-hover:opacity-70 transition-opacity duration-500 animate-pulse" />
            <div className="absolute -inset-[2px] rounded-[2.3rem] bg-gradient-to-tr from-blue-500 via-indigo-500 to-violet-500 p-[1.5px] opacity-80 shadow-2xl" />

            {/* Glass Showcase Frame */}
            <div className="w-full h-full rounded-[2.2rem] overflow-hidden glass-panel relative group cursor-pointer shadow-2xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-white/90 flex items-center justify-center">
              {/* Profile Image */}
              <img
                src={profileImg}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-contain sm:object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-105"
              />
              
              {/* Overlay info on hover */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                <span className="text-base font-bold font-display text-white">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-xs font-mono text-blue-400">
                  NSUT Delhi • B.Tech CSE ('27)
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
