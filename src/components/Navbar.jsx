import React from 'react';
import "../style/global.css";
import "../style/navbar.css";


const Navbar = () => {
  const handleMenuToggle = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="logo">Sachin Pawar</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
          <li className="resume-download">
            <a
              href="https://www.dropbox.com/scl/fi/4cz829l7f6ph1bidwpjar/Resume.SachinPawar.docx?rlkey=ldr5xiibbqef2lpe3y81y8y4c&st=x9b1uim9&dl=1"
              download
            >
              <i className="fas fa-download"></i> Download Resume
            </a>
          </li>
        </ul>
        <div className="menu-toggle" onClick={handleMenuToggle}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;