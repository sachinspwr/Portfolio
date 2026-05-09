import React, { useState } from 'react';
import "../style/global.css";
import "../style/hireme.css";
import { API } from '../config/api';

const HireMe = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', projectType: '', budget: '', timeline: '', description: ''
  });
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
      const res = await fetch(API.hireMe, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus({ type: 'success', message: '✅ Inquiry sent! I\'ll get back to you within 24 hours.' });
        setFormData({ name: '', email: '', company: '', projectType: '', budget: '', timeline: '', description: '' });
        setTimeout(() => {
          setIsFormVisible(false);
          setStatus({ type: '', message: '' });
        }, 4000);
      } else {
        setStatus({ type: 'error', message: '❌ Something went wrong. Please try again.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: '❌ Unable to send. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  const projectTypes = [
    'Web Development',
    'Mobile App',
    'API Development',
    'Database Design',
    'System Architecture',
    'Consultation',
    'Other'
  ];

  const budgets = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
    'To be discussed'
  ];

  const timelines = [
    'Urgent (1-2 weeks)',
    'Standard (3-4 weeks)',
    'Flexible (1-2 months)',
    'Long term (3+ months)',
    'To be discussed'
  ];

  if (!isVisible) return null;

  return (
    <div className="hire-me-widget">
      {!isFormVisible ? (
        <div className="hire-me-button" onClick={() => setIsFormVisible(true)}>
          <i className="fas fa-briefcase"></i>
          <span>Hire Me</span>
          <div className="notification-badge">💼</div>
        </div>
      ) : (
        <div className="hire-me-form-wrapper">
          <div className="hire-me-header">
            <h3>Let's Work Together</h3>
            <button className="close-btn" onClick={() => setIsFormVisible(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          {status.message && (
            <div className={`form-status ${status.type}`}>{status.message}</div>
          )}
          
          <form className="hire-me-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name *" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address *" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <input 
                type="text" 
                name="company" 
                placeholder="Company (Optional)" 
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <select 
                name="projectType" 
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Project Type *</option>
                {projectTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <select 
                  name="budget" 
                  value={formData.budget}
                  onChange={handleChange}
                  required
                >
                  <option value="">Budget Range *</option>
                  {budgets.map((budget, index) => (
                    <option key={index} value={budget}>{budget}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <select 
                  name="timeline" 
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                >
                  <option value="">Timeline *</option>
                  {timelines.map((timeline, index) => (
                    <option key={index} value={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <textarea 
                name="description" 
                placeholder="Project Description *"
                rows="4"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? '⏳ Sending...' : <><i className="fas fa-paper-plane"></i> Send Inquiry</>}
            </button>
          </form>
        
        </div>
      )}
    </div>
  );
};

export default HireMe;