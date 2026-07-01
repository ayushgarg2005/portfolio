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
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === fullText) {
      typingSpeed = 2000; // Pause at end
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT SIDE: Content & Actions */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono tracking-wide">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-blue-500 absolute" />
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          {/* Main Headings */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight leading-tight">
              Hi, I'm <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-sky-400">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Typing Role Display */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start text-xl sm:text-3xl font-bold font-mono text-slate-300 dark:text-slate-300 light:text-slate-700">
              <span className="text-blue-500 mr-2">&gt;</span>
              <span>{currentText}</span>
              <span className="w-0.5 h-7 sm:h-8 bg-blue-500 ml-1 animate-blink" />
            </div>
          </div>

          {/* Short Bio Description */}
          <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] transition-all transform hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <FaCode />
              <span>View Projects</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="px-6 py-3.5 rounded-xl border border-white/10 dark:border-white/10 light:border-black/10 bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 text-white dark:text-white light:text-slate-900 font-semibold text-sm transition-all flex items-center space-x-2"
            >
              <FaFileDownload className="text-blue-500" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3.5 rounded-xl border border-blue-500/40 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 font-semibold text-sm transition-all flex items-center space-x-2"
            >
              <FaPaperPlane />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Social Links Row */}
          <div className="pt-6 border-t border-white/10 dark:border-white/10 light:border-black/10 flex items-center justify-center lg:justify-start space-x-5 text-slate-400">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-white/5 bg-white/5 hover:border-blue-500/50 hover:text-white hover:bg-blue-500/10 transition-all shadow-sm"
              title="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-white/5 bg-white/5 hover:border-blue-500/50 hover:text-white hover:bg-blue-500/10 transition-all shadow-sm"
              title="LinkedIn"
            >
              <FaLinkedin className="text-xl text-blue-500" />
            </a>
            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl border border-white/5 bg-white/5 hover:border-amber-500/50 hover:text-white hover:bg-amber-500/10 transition-all font-mono font-bold text-xs text-amber-500 shadow-sm flex items-center space-x-1.5"
              title="LeetCode Profile"
            >
              <span>LeetCode</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-3 rounded-xl border border-white/5 bg-white/5 hover:border-blue-500/50 hover:text-white hover:bg-blue-500/10 transition-all shadow-sm"
              title="Email Me"
            >
              <FaEnvelope className="text-xl text-sky-400" />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Animated Centerpiece Profile Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Ambient Background Soft Glow */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-full blur-[90px] opacity-30 animate-pulse" />

          {/* Rotating Outer Gradient Back-Glow */}
          <div className="relative w-72 h-88 sm:w-88 sm:h-[26rem] flex items-center justify-center">
            <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-blue-500 via-indigo-500 to-sky-400 opacity-30 blur-2xl group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
            <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-tr from-blue-600 via-transparent to-indigo-600 p-[2px] opacity-80 shadow-[0_0_30px_rgba(59,130,246,0.3)]" />

            {/* Glass Showcase Frame */}
            <div className="w-full h-full rounded-[2rem] overflow-hidden glass-panel border border-white/20 dark:border-white/20 light:border-black/10 relative group cursor-pointer shadow-2xl bg-slate-900/40 flex items-center justify-center">
              {/* Profile Image (src/assets/profile.png) */}
              <img
                src={profileImg}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-contain sm:object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-105"
              />
              
              {/* Overlay info on hover */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                <span className="text-sm font-bold font-display text-white">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-xs font-mono text-blue-400">
                  NSUT Delhi • Class of 2027
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
