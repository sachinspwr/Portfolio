import React from 'react';
import "../style/global.css";
import "../style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">Sachin Pawar</div>
          <p className="footer-text">
            Full Stack Developer specializing in Java, Spring Boot, React & Node.js
          </p>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-social">
            <a 
              href="https://www.linkedin.com/in/sachin-pawar-089184220/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              href="https://github.com/sachinspwr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://www.instagram.com/_the_knownly_unknown_/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Sachin Pawar. All rights reserved.</p>
          <p>Designed & Built with ❤️ by Sachin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;