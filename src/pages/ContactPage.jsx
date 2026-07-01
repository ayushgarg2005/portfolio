import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { Contact } from '../sections/Contact';

export const ContactPage = ({ setActivePage }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="py-16 px-4 sm:px-6 max-w-6xl mx-auto space-y-6"
    >
      <div className="flex items-center justify-between">
        <button
          onClick={() => setActivePage('home')}
          className="inline-flex items-center space-x-2 text-slate-400 hover:text-sky-400 transition-colors font-semibold"
        >
          <FaArrowLeft />
          <span>Back to Home Overview</span>
        </button>
      </div>

      <Contact />
    </motion.div>
  );
};
