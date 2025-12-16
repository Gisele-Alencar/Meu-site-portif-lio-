import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Career } from './components/Career';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center p-0 md:p-4 lg:p-8 bg-bg selection:bg-accent selection:text-white">
      {/* Main Container Frame - Mimicking the paper/grid look */}
      <div className="w-full max-w-7xl border-x border-t border-dark/80 bg-bg shadow-2xl relative">
        
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        <main className="divide-y divide-dark/80 border-b border-dark/80">
          <Hero />
          <About />
          <Skills />
          <Career />
          <Portfolio />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}