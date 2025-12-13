import React, { useState } from 'react';
import "../style/global.css";
import "../style/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title"><span>05.</span> Get In Touch</h2>
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
              {status}
            </div>
            <button type="submit" className="btn">
              <span className="btn-text">Send Message</span>
              <span className="btn-loader"></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;