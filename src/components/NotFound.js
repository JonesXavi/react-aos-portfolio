import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="nf-container" id="nf-container">
    <div data-aos="fade-right" data-aos-delay="200" className="content">
      <h2>404</h2>
      <h4>Oops! Page not found</h4>
      <p>The page you were lookking for doesn't exist. You may have mistyped the address or the page may have moved.</p>
      <Link to="/" className="nf-btn">
        <i className="fas fa-chevron-left"></i> Back to Main Page
      </Link>
    </div>
  </div>
);

export default NotFound;
