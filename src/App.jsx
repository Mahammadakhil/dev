import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import AnimatedBackground from './components/Background/AnimatedBackground';
import BootLoader from './components/BootLoader/BootLoader';

function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [inputBuffer, setInputBuffer] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const char = e.key.toLowerCase();
      const newBuffer = (inputBuffer + char).slice(-16); // "kubectl get pods" is 16 chars
      setInputBuffer(newBuffer);
      
      if (newBuffer.includes('kubectl get pods')) {
        setEasterEggActive(true);
        setTimeout(() => setEasterEggActive(false), 5000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inputBuffer]);

  if (isBooting) {
    return <BootLoader onComplete={() => setIsBooting(false)} />;
  }

  return (
    <div className="app-container">
      <AnimatedBackground />
      {easterEggActive && (
        <div className="easter-egg-overlay mono">
          <p>{">"} KUBECTL GET PODS</p>
          <p>{">"} NAME                 READY   STATUS    RESTARTS   AGE</p>
          <p>{">"} portfolio-v2-pod     1/1     Running   0          2s</p>
          <p>{">"} secret-project-pod   1/1     Running   0          1s</p>
          <p className="glow-text">{">"} UNLOCKED: Premium DevOps Skills Activated!</p>
        </div>
      )}

      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo mono">AKHIL.DEVOPS</div>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></div>
          </button>
          <ul className={`nav-links mono ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>ABOUT</a></li>
            <li><a href="#skills" onClick={() => setMobileMenuOpen(false)}>SKILLS</a></li>
            <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>PROJECTS</a></li>
            <li><a href="#experience" onClick={() => setMobileMenuOpen(false)}>EXPERIENCE</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>CONTACT</a></li>
          </ul>
        </div>
      </nav>
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <footer className="footer">
        <div className="container">
          <p className="mono">© 2026 AKHIL</p>
          <p className="footer-sub mono">Orchestrating the Cloud with Passion</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
