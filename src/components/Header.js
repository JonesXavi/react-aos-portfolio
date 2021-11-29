import React from 'react';

// document
import resumeFile from '../resume.pdf';
import { HeaderData } from '../en';

const Header = () => (
  <header>
    <div className="menu-toggler">
      <div className="bar half start"></div>
      <div className="bar"></div>
      <div className="bar half end"></div>
    </div>
    <nav className="top-nav">
      <ul className="nav-list">
        <li>
          <a href="index.html" className="nav-link">Home</a>
        </li>
        <li>
          <a href="#about" className="nav-link">About</a>
        </li>
        <li>
          <a href="#skills" className="nav-link">Skills</a>
        </li>
        <li>
          <a href="#projects" className="nav-link">Projects</a>
        </li>
        <li>
          <a href="#experience" className="nav-link">Experience</a>
        </li>
        <li>
          <a href="#contact" className="nav-link">Connect</a>
        </li>
      </ul>
    </nav>
    <div className="landing-text">
      <h1 data-aos="fade-up" data-aos-delay="200">{HeaderData.name}</h1>
      <h6>{HeaderData.role}</h6>
      <a href={resumeFile} target="_blank"  rel="noreferrer" download="Jones_Resume" className="neon-button">Download Resume</a>
    </div>
  </header>
);

export default Header;
