import React, { useState } from 'react';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { DeveloperTerminal } from '../components/terminal/DeveloperTerminal';

export const MainLayout = ({ children, activePage, setActivePage }) => {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative overflow-hidden">
      {/* Ambient Floating Blobs & Radial Glow Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-sky-600/10 blur-[140px] animate-float" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[160px] animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-emerald-600/10 blur-[150px] animate-float" style={{ animationDelay: '-1.5s' }} />
      </div>

      {/* Floating Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Main Page Content View */}
      <main className="flex-1 relative z-10 pt-16">
        {children}
      </main>

      {/* Interactive Terminal Modal */}
      <DeveloperTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        setActivePage={setActivePage}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};
