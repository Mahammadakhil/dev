import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const formDataObj = new FormData(e.target);
    // TODO: Replace with your actual Web3Forms access key
    // Get one for free at https://web3forms.com
    formDataObj.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");

    const object = Object.fromEntries(formDataObj);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const data = await res.json();
      
      if (data.success) {
        setStatus('Sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        alert('Thank you for reaching out, Akhil will get back to you soon!');
      } else {
        setStatus('Failed to send');
        console.error("Error from Web3Forms:", data);
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus('Failed to send');
      alert('Network error. Please try again later.');
    }
    
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
            <button type="submit" className="btn btn-primary mono" disabled={status === 'Sending...'}>
              {status === 'Sending...' ? 'SENDING...' : 'SEND_PACKET'}
            </button>
            {status && status !== 'Sending...' && (
              <div className="form-status mono" style={{ marginTop: '15px', color: status === 'Sent successfully!' ? '#4ade80' : '#f87171', fontSize: '0.9rem' }}>
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
