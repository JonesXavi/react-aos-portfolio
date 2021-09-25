import React from 'react'

// Styles
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => (
  <footer className="copyright">
    <div className="up" id="up">
      <i className="fas fa-chevron-up"></i>
    </div>
    <p>Portfolio made with  <i className="fas fa-heart" style={{color: 'red'}}></i></p>
  </footer>
);

export default Footer;
