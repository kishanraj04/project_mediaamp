import React from 'react';
import { Link } from 'react-router-dom';
import '../style/footer.css';
import { FaFacebookF, FaTwitter, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>🎮 GameZone</h2>
          <p>
            Powered by{' '}
            <a
              href="https://rawg.io/apidocs"
              target="_blank"
              rel="noopener noreferrer"
            >
              RAWG API
            </a>
          </p>
        </div>

        <div className="footer-sections">
          <div className="footer-links">
            <h4>Navigate</h4>
            <Link to="/">Home</Link>
            <Link to="/searching-page">Search</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-socials">
            <h4>Follow Us</h4>
            <div className="icons">
              <Link to="/facebook"><FaFacebookF /></Link>
              <Link to="/twitter"><FaTwitter /></Link>
              <Link to="/discord"><FaDiscord /></Link>
            </div>
          </div>
        </div>

        <p className="footer-copy">&copy; 2025 GameZone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
