// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-text">
          <h5>© 2024 RagulRS. All Rights Reserved.</h5>
        </div>
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/ragul-singh-d-6a2b4c5/" target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/RagulRS" target="_blank" rel="noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href="mailto:ragulsingh6245@gmail.com" target="_blank" rel="noreferrer">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
