import React, { useState } from 'react';
import "../style/global.css";
import "../style/contact.css";
import { API } from '../config/api';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      const res = await fetch(API.sendMessage, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus({ type: 'success', message: '✅ Message sent successfully! I\'ll get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: '❌ Something went wrong. Please try again.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: '❌ Unable to send message. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title"><span>06.</span> Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">Let's Connect</h3>
            <p>
              If you have a question or just need to say hi, I'll get back to
              you as soon as possible!
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <i className="fas fa-envelope"></i>
                <span>pawarsachin11384@gmail.com</span>
              </div>
              <div className="contact-method">
                <i className="fas fa-phone"></i>
                <span>+91 8530939218</span>
              </div>
              <div className="contact-method">
                <i className="fas fa-map-marker-alt"></i>
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/sachin-pawar-089184220/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a 
                href="https://github.com/sachinspwr" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://www.instagram.com/_the_knownly_unknown_/?hl=en"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-status" id="formStatus">
              {status.message && (
                <div className={`form-status ${status.type}`}>{status.message}</div>
              )}
            </div>
            <button type="submit" className="btn" disabled={loading}>
              {loading ? <span className="btn-loader"></span> : <span className="btn-text">Send Message</span>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;