import React, { useState, useEffect } from 'react';
import './BootLoader.css';

const BootLoader = ({ onComplete }) => {
  const [logs, setLogs] = useState([]);
  
  const bootSequence = [
    { text: 'INIT: version 2.88 booting', delay: 200 },
    { text: '[ OK ] Mounting Virtual File Systems', delay: 400 },
    { text: '[ OK ] Starting Network Manager', delay: 600 },
    { text: '[ OK ] Initializing Container Runtime', delay: 800 },
    { text: '> Pulling image registry.cloud.local/portfolio:latest...', delay: 1200 },
    { text: '> Image downloaded (Layers: 12, Size: 145MB)', delay: 1800 },
    { text: '[ OK ] Creating pod configuration', delay: 2100 },
    { text: '[ OK ] Starting pods: portfolio-ui-pod', delay: 2400 },
    { text: '[ OK ] Exposing service on port 443', delay: 2700 },
    { text: 'SYSTEM READY. ESTABLISHING CONNECTION...', delay: 3200 }
  ];

  useEffect(() => {
    let timeouts = [];
    bootSequence.forEach((log, index) => {
      const timeout = setTimeout(() => {
        setLogs(prev => [...prev, log.text]);
        if (index === bootSequence.length - 1) {
          setTimeout(onComplete, 800); // Wait a bit before removing loader
        }
      }, log.delay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="boot-loader">
      <div className="boot-terminal mono">
        {logs.map((log, index) => (
          <div key={index} className={`boot-log ${log.includes('[ OK ]') ? 'success' : ''} ${log.includes('READY') ? 'highlight' : ''}`}>
            {log}
          </div>
        ))}
        <div className="boot-cursor">_</div>
      </div>
    </div>
  );
};

export default BootLoader;
