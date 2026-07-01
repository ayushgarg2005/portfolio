import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GlowCard } from '../components/common/GlowCard';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const contactLinks = [
    { name: "Email Directly", value: PERSONAL_INFO.email, icon: FaEnvelope, href: `mailto:${PERSONAL_INFO.email}`, color: "text-rose-400", bg: "bg-rose-500/10" },
    { name: "GitHub Profile", value: "github.com/ayushgarg", icon: FaGithub, href: PERSONAL_INFO.github, color: "text-sky-400", bg: "bg-sky-500/10" },
    { name: "LinkedIn Network", value: "in/ayushgarg", icon: FaLinkedin, href: PERSONAL_INFO.linkedin, color: "text-purple-400", bg: "bg-purple-500/10" },
    { name: "Current Location", value: PERSONAL_INFO.location, icon: FaMapMarkerAlt, href: "#", color: "text-emerald-400", bg: "bg-emerald-500/10" },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <h2 className="text-xs font-mono tracking-widest uppercase text-purple-400">
          // Get In Touch
        </h2>
        <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Let's Build Something Extraordinary
        </h3>
        <p className="text-slate-400 text-base sm:text-lg">
          Currently open for senior full-stack roles, AI architectures consulting, and innovative startup ventures.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Contact Endpoints & Info */}
        <div className="lg:col-span-5 space-y-4">
          <h4 className="text-xl font-bold text-white tracking-tight mb-6">
            Direct Communication Channels
          </h4>
          
          <div className="space-y-4">
            {contactLinks.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/40 transition-all duration-300 group"
                >
                  <div className={`p-3 rounded-xl ${item.bg} ${item.color} text-xl group-hover:scale-110 transition-transform`}>
                    <IconComp />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">{item.name}</div>
                    <div className="text-sm sm:text-base font-semibold text-white group-hover:text-sky-400 transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-sky-900/20 to-purple-900/20 border border-sky-500/20 mt-6">
            <h5 className="font-bold text-white text-sm mb-1">⚡ Fast Response Guarantee</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              I actively monitor inquiries and reply within 12 business hours. For urgent deployments, mention "Production Priority" in your message.
            </p>
          </div>
        </div>

        {/* Right Column: Glassmorphism Interactive Form */}
        <div className="lg:col-span-7">
          <GlowCard className="p-6 sm:p-10">
            <h4 className="text-2xl font-bold text-white tracking-tight mb-6">
              Send a Secure Message
            </h4>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-4xl mx-auto border border-emerald-500/40">
                  <FaCheckCircle />
                </div>
                <h5 className="text-2xl font-bold text-white">Transmission Successful!</h5>
                <p className="text-slate-400 text-sm max-w-md mx-auto">
                  Thank you for reaching out, Ayush Garg has received your dispatch and will respond shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Elon Musk"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:border-sky-500 transition-colors placeholder-slate-600 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. elon@x.ai"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:border-sky-500 transition-colors placeholder-slate-600 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Message / Project Inquiry
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project requirements, architecture goals, or role specifics..."
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:border-sky-500 transition-colors placeholder-slate-600 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-purple-600 text-white font-bold text-base shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 transform hover:-translate-y-0.5"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Dispatch</span>
                      <FaPaperPlane className="text-sm" />
                    </>
                  )}
                </button>
              </form>
            )}
          </GlowCard>
        </div>
      </div>
    </section>
  );
};
