import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { CustomCursor } from './components/ui/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { TechStack } from './components/sections/TechStack';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Journey } from './components/sections/Journey';
// import { GithubDashboard } from './components/sections/GithubDashboard';
import { AchievementsAndCertifications } from './components/sections/AchievementsAndCertifications';
import { Contact } from './components/sections/Contact';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-moon-primary selection:text-white overflow-x-hidden">
      <AnimatedBackground />
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Journey />
        {/* <GithubDashboard /> */}
        <AchievementsAndCertifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
