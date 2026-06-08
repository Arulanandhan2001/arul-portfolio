import { useState, useCallback } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import MouseGlow from './components/MouseGlow';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const handleLoaderComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      <Loader onComplete={handleLoaderComplete} />

      {!loading && (
        <div className="relative min-h-screen bg-void-900 overflow-x-hidden">
          {/* Layers */}
          <ParticleBackground />
          <MouseGlow />

          {/* Gradient overlays */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cosmic-500/50 to-transparent" />
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-cosmic-600/5 rounded-full blur-[100px]" />
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-nebula-600/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-aurora-500/4 rounded-full blur-[80px]" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Certifications />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
