import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Achievements } from '../components/Achievements';
import { GithubSection } from '../components/GithubSection';
import { Contact } from '../components/Contact';

export const Home = () => {
  return (
    <div className="space-y-12 sm:space-y-20 relative z-10">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <GithubSection />
      <Contact />
    </div>
  );
};
