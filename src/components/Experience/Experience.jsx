import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      type: 'internship',
      role: 'AWS Intern',
      company: 'Winsun Global Tech',
      date: 'Feb 2023 – May 2023',
      logs: [
        '[INFO] Provisioned and managed 10+ cloud compute, storage & network resources',
        '[INFO] Set up monitoring and alerting to track system health',
        '[PROCESS] Performed Linux administration and troubleshooting',
        '[SUCCESS] Resolved access issues to improve security and stability'
      ]
    }
  ];

  return (
    <div className="experience-section container" id="experience">
      <div className="section-header">
        <h2 className="mono glow-text">04. _EXP_LOGS</h2>
        <div className="header-line"></div>
      </div>

      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="exp-info">
              <span className="exp-date mono">{exp.date}</span>
              <h3 className="exp-role">{exp.role}</h3>
              <span className="exp-company mono">{exp.company}</span>
            </div>
            
            <div className="exp-logs">
              {exp.logs.map((log, lIndex) => (
                <div className="log-line mono" key={lIndex}>
                  <span className="log-timestamp">{`> [${new Date().toLocaleTimeString()}]`}</span>
                  <span className="log-text">{log}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
