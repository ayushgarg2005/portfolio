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
        className="text-center space-y-4 mb-16"
      >
        <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase">
          // 07. INITIATE CONNECTION
        </span>
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight">
          Let's Build Something <span className="text-blue-500">Extraordinary</span>
        </h2>
        <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
          Whether you're looking for a dedicated software engineering intern, full-time backend architect, or technical collaborator—my inbox is wide open.
        </p>
      </motion.div>

      {/* Recruiter CTA Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-purple-900/40 border border-blue-500/40 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl"
      >
        <div className="space-y-2 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider">
            <FaBuilding />
            <span>Recruiter & Hiring CTA</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            Searching for top-tier Backend & Distributed Systems Talent?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
            I bring proven problem-solving speed (1000+ DSA problems solved), deep system architecture knowledge, and immediate hands-on productivity across the modern React/Node/Cloud stack.
          </p>
        </div>

        <a
          href={`mailto:${PERSONAL_INFO.email}?subject=Interview Invitation - Ayush Garg`}
          className="px-6 py-3.5 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-200 transition-all shadow-lg whitespace-nowrap"
        >
          Schedule Interview
        </a>
      </motion.div>

      {/* Grid: Form & Contact Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Glass Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden shadow-2xl"
        >
          <h3 className="text-2xl font-bold font-display mb-6">Send a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 dark:bg-black/40 light:bg-white/60 border border-white/10 dark:border-white/10 light:border-black/10 focus:border-blue-500 focus:outline-none text-sm transition-all text-white dark:text-white light:text-slate-900 placeholder:text-slate-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 dark:bg-black/40 light:bg-white/60 border border-white/10 dark:border-white/10 light:border-black/10 focus:border-blue-500 focus:outline-none text-sm transition-all text-white dark:text-white light:text-slate-900 placeholder:text-slate-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Your Message</label>
              <textarea
                rows="5"
                required
                placeholder="Hi Ayush, we'd love to discuss a software engineering opportunity with our team..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black/40 dark:bg-black/40 light:bg-white/60 border border-white/10 dark:border-white/10 light:border-black/10 focus:border-blue-500 focus:outline-none text-sm transition-all text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading || submitted}
              className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold text-sm shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all flex items-center justify-center space-x-2 transform active:scale-98"
            >
              {loading ? (
                <span>Transmitting Data...</span>
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
        </motion.div>

        {/* Right Side: Contact Info & Socials */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="glass-panel p-8 sm:p-10 rounded-3xl space-y-8 shadow-2xl">
            <h3 className="text-2xl font-bold font-display">Contact Details</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3.5 rounded-2xl bg-blue-500/10 text-blue-500 border border-blue-500/20">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Direct Email</div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-semibold hover:text-blue-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3.5 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Base Location</div>
                  <div className="text-sm font-semibold">{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 dark:border-white/10 light:border-black/10 space-y-4">
              <div className="text-xs font-mono text-slate-400 uppercase">Connect on Socials</div>
              
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-blue-500/10 hover:border-blue-500/40 border border-white/10 dark:border-white/10 light:border-black/10 flex items-center space-x-2 text-xs font-bold transition-all"
                >
                  <FaGithub className="text-base" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-blue-500/10 hover:border-blue-500/40 border border-white/10 dark:border-white/10 light:border-black/10 flex items-center space-x-2 text-xs font-bold transition-all"
                >
                  <FaLinkedin className="text-base text-blue-500" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-amber-500/10 hover:border-amber-500/40 border border-white/10 dark:border-white/10 light:border-black/10 flex items-center space-x-2 text-xs font-bold transition-all"
                >
                  <span className="text-amber-500 font-mono">LC</span>
                  <span>LeetCode</span>
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-3.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-sky-500/10 hover:border-sky-500/40 border border-white/10 dark:border-white/10 light:border-black/10 flex items-center space-x-2 text-xs font-bold transition-all"
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
