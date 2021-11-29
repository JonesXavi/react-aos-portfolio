import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="nf-container" id="nf-container">
    <div data-aos="fade-right" data-aos-delay="200" className="content">
      <h2>404</h2>
      <h4>Oops! Page not found</h4>
      <p>The page you are looking for, doesn't exist or you might have mistyped the address.</p>
      <Link to="/" className="nf-btn">
        <i className="fas fa-chevron-left"></i> Back to Main Page
      </Link>
    </div>
  </div>
);

export default NotFound;
