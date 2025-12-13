import React from 'react';
import "../style/global.css";
import "../style/hero.css";

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Sachin Pawar</h1>
        <h2 className="hero-subtitle">
          Full-Stack Developer | MERN-Stack Developer
        </h2>
        <p className="hero-text">
          Software Engineer with Expertise in API Development & System Design, Spring Boot , REST APIs ,Cloud-Ready Systems
        </p>
        <div className="hero-technologies">
          <span className="tech-badge">Java</span>
          <span className="tech-badge">Spring Boot</span>
          <span className="tech-badge">Node.js</span>
          <span className="tech-badge">React</span>
          <span className="tech-badge">My Sql/Pg Sql</span>
          <span className="tech-badge">AWS</span>
        </div>
        <br />
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">Get In Touch</a>
          <a href="#experience" className="btn btn-primary">Work Experience</a>
        </div>
      </div>

      <div className="scroll-down">
        <span>Scroll Down</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </header>
  );
};

export default Hero;