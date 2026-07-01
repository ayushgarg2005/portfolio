import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaTimes, FaMinus } from 'react-icons/fa';
import { PERSONAL_INFO, SKILLS_DATA } from '../../data/portfolioData';
import { PROJECTS_DATA } from '../../data/projectsData';

export const DeveloperTerminal = ({ isOpen, onClose, setActivePage }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', content: "Welcome to Ayush Garg's Interactive Developer Terminal (v2.5.0)." },
    { type: 'output', content: "Type 'help' to view all available interactive commands." },
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'command', content: cmd }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          content: `Available commands:
  help       - Display available terminal commands
  about      - Read Ayush's professional engineering bio
  skills     - List technical skill proficiency categories
  projects   - Output featured engineering projects summary
  resume     - Navigate directly to interactive Resume page
  contact    - Output direct email and social endpoints
  clear      - Clear terminal console output`
        });
        break;
      case 'about':
        newHistory.push({
          type: 'output',
          content: `${PERSONAL_INFO.name} - Full Stack & AI Engineer\n${PERSONAL_INFO.bio}\nLocation: ${PERSONAL_INFO.location}`
        });
        break;
      case 'skills':
        const skillsFormatted = SKILLS_DATA.map(
          (cat) => `[${cat.category}]: ${cat.skills.map((s) => s.name).join(', ')}`
        ).join('\n');
        newHistory.push({ type: 'output', content: skillsFormatted });
        break;
      case 'projects':
        const projFormatted = PROJECTS_DATA.map(
          (p, i) => `${i + 1}. ${p.title} (${p.techStack.slice(0, 3).join(', ')}) - ${p.tagline}`
        ).join('\n');
        newHistory.push({ type: 'output', content: projFormatted });
        break;
      case 'resume':
        newHistory.push({ type: 'output', content: "Navigating to Resume page..." });
        setActivePage('resume');
        setTimeout(() => onClose(), 1000);
        break;
      case 'contact':
        newHistory.push({
          type: 'output',
          content: `Email: ${PERSONAL_INFO.email}\nGitHub: ${PERSONAL_INFO.github}\nLinkedIn: ${PERSONAL_INFO.linkedin}`
        });
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        newHistory.push({
          type: 'error',
          content: `Command not found: '${cmd}'. Type 'help' to see valid commands.`
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="w-full max-w-3xl rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-[0_0_50px_rgba(56,189,248,0.15)] font-mono text-sm flex flex-col h-[500px]"
          >
            {/* Terminal Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 text-slate-400 select-none">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose} />
                <div className="w-3 h-3 rounded-full bg-amber-500/80 cursor-pointer" onClick={onClose} />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs flex items-center gap-1 text-slate-300 font-semibold">
                  <FaTerminal className="text-sky-400" /> ayush@dev-os:~ (bash)
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            {/* Terminal Output Window */}
            <div
              className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-950/90 text-slate-300"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((item, index) => (
                <div key={index} className="leading-relaxed whitespace-pre-wrap">
                  {item.type === 'command' ? (
                    <div className="flex items-center space-x-2 text-sky-400 font-semibold">
                      <span>ayush@dev-os:~$</span>
                      <span>{item.content}</span>
                    </div>
                  ) : item.type === 'error' ? (
                    <div className="text-rose-400">{item.content}</div>
                  ) : (
                    <div className="text-slate-300 border-l-2 border-slate-800 pl-3 py-0.5">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Terminal Input Form */}
            <form onSubmit={handleCommand} className="flex items-center px-4 py-3 bg-slate-900/80 border-t border-slate-800">
              <span className="text-sky-400 font-bold mr-2">ayush@dev-os:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type 'help' or 'projects'..."
                className="flex-1 bg-transparent text-white focus:outline-none placeholder-slate-600 font-mono"
              />
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
