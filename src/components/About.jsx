import React from 'react';
import "../style/global.css";
import "../style/about.css";

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title"><span>01.</span> About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Software Developer with 3+ years of experience building scalable
              backend systems using Java, Spring Boot, Node.js, and SQL.
              Skilled in designing RESTful APIs, microservices, and
              third-party integrations. Experienced in optimizing performance,
              implementing secure authentication, and delivering reliable,
              high-performance solutions.
            </p>
            <div className="personal-info">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">Sachin Sanjay Pawar</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">pawarsachin11384@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Phone:</span>
                <span className="info-value">+91 8530939218</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">Pune, India</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <div className="glow"></div>
              <img
                src="/profile-pic.png"
                alt="Sachin Pawar"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;