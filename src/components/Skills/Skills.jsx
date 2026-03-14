import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillGroups = [
    {
      title: 'Cloud & Infrastructure',
      skills: [
        { name: 'AWS', level: '90%' },
        { name: 'OCI', level: '80%' },
        { name: 'IaC/Terraform', level: '85%' },
        { name: 'Ansible', level: '80%' }
      ]
    },
    {
      title: 'DevOps & CI/CD',
      skills: [
        { name: 'Jenkins', level: '85%' },
        { name: 'Git/GitHub', level: '90%' },
        { name: 'GH Actions', level: '85%' }
      ]
    },
    {
      title: 'Containers & Orchestration',
      skills: [
        { name: 'Docker', level: '90%' },
        { name: 'Kubernetes', level: '85%' }
      ]
    },
    {
      title: 'Systems & Monitoring',
      skills: [
        { name: 'Linux', level: '85%' },
        { name: 'Nginx', level: '80%' },
        { name: 'Networking', level: '80%' },
        { name: 'Prometheus', level: '75%' },
        { name: 'Grafana', level: '75%' }
      ]
    }
  ];

  return (
    <div className="skills-section container" id="skills">
      <div className="section-header">
        <h2 className="mono glow-text">02. _CORE_SKILLS</h2>
        <div className="header-line"></div>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, gIndex) => (
          <div className="skill-group" key={gIndex}>
            <h3 className="group-title mono">{group.title}</h3>
            <div className="hex-container">
              {group.skills.map((skill, sIndex) => (
                <div className="hex-wrapper" key={sIndex}>
                  <div className="hex">
                    <div className="hex-content">
                      <span className="skill-name mono">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                  </div>
                  <div className="hex-bg"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
