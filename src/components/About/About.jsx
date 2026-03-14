import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-section container" id="about">
      <div className="section-header">
        <h2 className="mono glow-text">01. _ABOUT_ME</h2>
        <div className="header-line"></div>
      </div>
      
      <div className="about-grid">
        <div className="about-text">
          <p>
            Hello! I'm Mahammad Akhil, a passionate Cloud & DevOps Engineer. 
            I specialize in bridging the gap between development and operations by 
            building robust, scalable, and automated cloud infrastructure.
          </p>
          <p>
            As a recent entrant to the field, I spend my time orchestrating Kubernetes 
            clusters, writing Terraform scripts, and ensuring every commit 
            flows through a secure CI/CD pipeline to deliver reliable software.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
