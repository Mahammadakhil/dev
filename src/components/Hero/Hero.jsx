import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [terminalText, setTerminalText] = useState('');
  const fullText = "echo 'Deploying scalable infrastructure at lightspeed...'";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTerminalText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container container">
      <div className="hero-content">
        <div className="terminal-window">
          <div className="terminal-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="terminal-title mono">bash — akhil@cloud-orchestrator</span>
          </div>
          <div className="terminal-body mono">
            <span className="prompt">$</span> {terminalText}<span className="cursor">|</span>
          </div>
        </div>

        <h1 className="hero-title">
          Mahammad Akhil<br/>
          <span className="title-slash">//</span> 
          <span className="glow-text"> Cloud / DevOps</span>
        </h1>
        <p className="hero-tagline">
          Passionate about building scalable infrastructure and automating CI/CD pipelines.
        </p>
        
        <div className="hero-stats">
          <div className="stat-card">
            <span className="stat-value mono">80%</span>
            <span className="stat-label">Less DevSecOps Config Effort</span>
          </div>
          <div className="stat-card">
            <span className="stat-value mono">70%</span>
            <span className="stat-label">Faster AWS IaC Deployments</span>
          </div>
          <div className="stat-card">
            <span className="stat-value mono">3+</span>
            <span className="stat-label">Production Graded Pipelines</span>
          </div>
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">EXPLORE PROJECTS</a>
          <a href="https://docs.google.com/document/d/1w0LLvb9Mo_rfp2dtcUONNWIohRiYjBGG/edit?usp=sharing&ouid=113560994215053959928&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="btn btn-outline">DOWNLOAD RESUME</a>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="pod-container">
          <div className="pod cyan"></div>
          <div className="pod orange"></div>
          <div className="pod blue"></div>
          <div className="pod-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
