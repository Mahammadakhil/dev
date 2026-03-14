import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'DevSecOps Kubernetes Pipeline',
      desc: 'End-to-end DevSecOps pipeline using GitHub Actions, Docker, and Kubernetes. Automated vulnerability scanning and deployment, reducing manual release effort by ~80%.',
      tags: ['GH Actions', 'Docker', 'K8s', 'Trivy'],
      metrics: '80% Less Effort',
      github: 'https://github.com/Mahammadakhil/production-devsecops-kubernetes-pipeline/'
    },
    {
      title: 'AWS 3-Tier Production Infra',
      desc: 'Production-style three-tier architecture on AWS using Terraform. Automated infrastructure deployment, reducing manual configuration by ~70% and handling 100+ simulated users.',
      tags: ['AWS', 'Terraform', 'VPC', 'EC2', 'ALB'],
      metrics: '70% Faster Config',
      github: 'https://github.com/Mahammadakhil/AWS-3tier-terraform-production'
    },
    {
      title: 'Vagrant to AWS via Docker',
      desc: 'Cloud deployment pipeline migrating applications from local Vagrant environments to AWS EC2 using Docker containers, improving consistency and reducing setup errors by ~60%.',
      tags: ['Vagrant', 'Docker', 'AWS EC2', 'Git'],
      metrics: '60% Fewer Errors',
      github: 'https://github.com/Mahammadakhil/Cloud-Deployment-Pipeline-Vagrant-to-AWS-via-Docker'
    }
  ];

  return (
    <div className="projects-section container" id="projects">
      <div className="section-header">
        <h2 className="mono glow-text">03. _FEATURED_PROJECTS</h2>
        <div className="header-line"></div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-glare"></div>
            <div className="project-header">
              <div className="status-dot"></div>
              <span className="mono">0{index + 1}</span>
            </div>
            
            <div className="project-thumb">
              <div className="thumb-lines"></div>
              <div className="thumb-metrics mono">{project.metrics}</div>
            </div>

            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, tIndex) => (
                  <span className="tag mono" key={tIndex}>{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="link mono">
                  View Source <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
