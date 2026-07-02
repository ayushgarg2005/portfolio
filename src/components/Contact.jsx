import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCheck, FaBuilding } from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative z-10 max-w-6xl mx-auto">
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
          <span>// 06. INITIATE CONNECTION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white dark:text-white light:text-slate-900">
          Let's Build Something <span className="text-gradient">Extraordinary</span>
        </h2>
        <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Whether you're looking for a dedicated software engineering intern, full-time backend engineer, or technical collaborator—my inbox is wide open.
        </p>
      </motion.div>

      {/* Recruiter CTA Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14 p-8 sm:p-10 rounded-[2rem] bg-gradient-to-r from-blue-900/30 via-indigo-900/30 to-purple-900/30 border border-blue-500/40 backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="space-y-3 text-center lg:text-left relative z-10">
          <div className="flex items-center justify-center lg:justify-start space-x-2 text-blue-400 dark:text-blue-400 light:text-blue-600 font-mono text-xs font-bold uppercase tracking-wider">
            <FaBuilding className="text-sm" />
            <span>Recruiter & Hiring Notice</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-display text-white dark:text-white light:text-slate-900 tracking-tight">
            Searching for Top-Tier Backend & Full-Stack Talent?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 max-w-2xl leading-relaxed">
            I bring proven algorithmic speed (1000+ DSA problems solved), deep system architecture knowledge, and immediate hands-on productivity across modern React, Node.js, distributed databases, and cloud infrastructures.
          </p>
        </div>

        <a
          href={`mailto:${PERSONAL_INFO.email}?subject=Interview Invitation - Ayush Garg`}
          className="w-full sm:w-auto justify-center px-8 py-4 rounded-2xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl whitespace-nowrap transform hover:-translate-y-0.5 relative z-10 flex items-center space-x-2"
        >
          <span>Schedule Interview</span>
        </a>
      </motion.div>

      {/* Grid: Form & Contact Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left Side: Glass Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-[2rem] relative overflow-hidden border border-white/10 dark:border-white/10 light:border-slate-200 shadow-2xl flex flex-col justify-between"
        >
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black font-display text-white dark:text-white light:text-slate-900 tracking-tight">
              Send a Direct Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4.5 py-3.5 rounded-2xl bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none text-sm transition-all text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4.5 py-3.5 rounded-2xl bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none text-sm transition-all text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">Your Message</label>
                <textarea
                  rows="5"
                  required
                  placeholder="Hi Ayush, we'd love to discuss a software engineering role with our engineering team..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4.5 py-3.5 rounded-2xl bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none text-sm transition-all text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 resize-none font-medium leading-relaxed"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading || submitted}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center space-x-2.5 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                {loading ? (
                  <span>Transmitting Message...</span>
                ) : submitted ? (
                  <>
                    <FaCheck className="text-emerald-300" />
                    <span>Message Transmitted Successfully!</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Right Side: Contact Info & Socials */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div className="glass-panel p-8 sm:p-10 rounded-[2rem] space-y-8 shadow-2xl border border-white/10 dark:border-white/10 light:border-slate-200 h-full flex flex-col justify-between">
            <div className="space-y-8">
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white dark:text-white light:text-slate-900 tracking-tight">
                Contact Details
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-500 border border-blue-500/20 shadow-inner">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">Direct Email</div>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm sm:text-base font-bold text-white dark:text-white light:text-slate-900 hover:text-blue-400 transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shadow-inner">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">Base Location</div>
                    <div className="text-sm sm:text-base font-bold text-white dark:text-white light:text-slate-900">{PERSONAL_INFO.location}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 dark:border-white/10 light:border-slate-200 space-y-4">
              <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">Connect on Social Networks</div>
              
              <div className="grid grid-cols-2 gap-3.5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-slate-100 hover:bg-blue-500/10 hover:border-blue-500/40 border border-white/10 dark:border-white/10 light:border-slate-200 flex items-center space-x-2.5 text-xs font-bold text-white dark:text-white light:text-slate-900 transition-all shadow-sm"
                >
                  <FaGithub className="text-base" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-slate-100 hover:bg-blue-500/10 hover:border-blue-500/40 border border-white/10 dark:border-white/10 light:border-slate-200 flex items-center space-x-2.5 text-xs font-bold text-white dark:text-white light:text-slate-900 transition-all shadow-sm"
                >
                  <FaLinkedin className="text-base text-blue-500" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-slate-100 hover:bg-amber-500/10 hover:border-amber-500/40 border border-white/10 dark:border-white/10 light:border-slate-200 flex items-center space-x-2.5 text-xs font-bold text-white dark:text-white light:text-slate-900 transition-all shadow-sm"
                >
                  <span className="text-amber-500 font-mono font-black">LC</span>
                  <span>LeetCode</span>
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-4 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-slate-100 hover:bg-sky-500/10 hover:border-sky-500/40 border border-white/10 dark:border-white/10 light:border-slate-200 flex items-center space-x-2.5 text-xs font-bold text-white dark:text-white light:text-slate-900 transition-all shadow-sm"
                >
                  <FaEnvelope className="text-base text-sky-400" />
                  <span>Email Me</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
