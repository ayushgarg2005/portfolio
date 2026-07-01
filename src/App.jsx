import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { useTheme } from './hooks/useTheme';
import { Loader } from './components/Loader';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className={`min-h-screen relative selection:bg-blue-500 selection:text-white overflow-x-hidden ${theme}`}>
      {/* Page Loader */}
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Animated Mesh Grid & Particles Background */}
      <Background />

      {/* Sticky Glass Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Single-Page Content */}
      <main className="relative z-10 pt-4">
        <Home />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
