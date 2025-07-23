import React from 'react';
import '../Footer.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-socials">
          <a href="mailto:meserettse47@gmail.com" className="social-link">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/meseret-tsega" target="_blank" rel="noreferrer" className="social-link">
            <FaLinkedin />
          </a>
          <a href="https://github.com/meserettsega" target="_blank" rel="noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="https://twitter.com/meserett" target="_blank" rel="noreferrer" className="social-link">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/meserett" target="_blank" rel="noreferrer" className="social-link">
            <FaInstagram />
          </a>
        </div>

        <p className="footer-copy">&copy; {new Date().getFullYear()} Meseret Tsega. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
