import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    
    // Construct the mailto link
    // We encode the URI components so that spaces and newlines are formatted correctly
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:mdakhil.ib@gmail.com?subject=${subject}&body=${body}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
    
    // Show a quick success message giving feedback to the user and clear the form
    setStatus('Email client opened successfully!');
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div className="contact-section container" id="contact">
      <div className="section-header">
        <h2 className="mono glow-text">05. _INITIALIZE_CONTACT</h2>
        <div className="header-line"></div>
      </div>

      <div className="contact-grid">
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="mono">NAME</label>
              <input 
                type="text" 
                name="name"
                placeholder="Mahammad Akhil"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label className="mono">EMAIL</label>
              <input 
                type="email" 
                name="email"
                placeholder="mdakhil.ib@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label className="mono">MESSAGE</label>
              <textarea 
                name="message"
                placeholder="Write your message here..."
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary mono">
              SEND_PACKET
            </button>
            {status && (
              <div className="form-status mono" style={{ marginTop: '15px', color: '#4ade80', fontSize: '0.9rem' }}>
                {status}
              </div>
            )}
          </form>
        </div>

        <div className="contact-info">
          <div className="social-links">
            <a href="https://github.com/Mahammadakhil" target="_blank" rel="noopener noreferrer" className="social-orb github">
              <span className="mono">GH</span>
            </a>
            <a href="https://www.linkedin.com/in/mahammadakhil" target="_blank" rel="noopener noreferrer" className="social-orb linkedin">
              <span className="mono">LI</span>
            </a>
            <a href="https://x.com/_iakhil" target="_blank" rel="noopener noreferrer" className="social-orb twitter">
              <span className="mono">TW</span>
            </a>
          </div>
          
          <div className="contact-details mono">
            <p>{">"} PHONE: +91 7090595714</p>
            <p>{">"} EMAIL: mdakhil.ib@gmail.com</p>
            <p>{">"} STATUS: Available for opportunities</p>
            <p>{">"} TZ: IST (UTC+5:30)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
