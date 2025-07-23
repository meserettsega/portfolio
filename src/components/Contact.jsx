import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import "../Contact.css";

const Contact = () => (
  <section className="contact-section" id="contact">
    <div className="contact-overlay">
      <div className="contact-content">
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-container">
          {/* Animated Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p><FaEnvelope /> meserettse47@gmail.com</p>
            <p><FaPhone /> +251-953-244-189</p>
            
            <p><FaTelegramPlane style={{ color: "#0088cc" }} /> <a href="https://t.me/meseret_tsega" target="_blank" rel="noopener noreferrer">@meseret_tsega</a></p>
          </motion.div>

          {/* Animated Contact Form */}
          
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
