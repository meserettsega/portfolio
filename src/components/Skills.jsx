import React from "react";
import "../../src/skill.css";
import {
  FaPaintBrush,
  FaVideo,
  FaCode,
  FaUsers,
  FaBriefcase,
  FaLaptopCode,
} from "react-icons/fa";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
     
      <h2 className="section-title" style={{ marginTop: "80px" }}>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          {/* <div className="project-status ongoing">Ongoing</div> */}
          <FaUsers className="project-icon" />
          <h3>Alumni Management System</h3>
          <p>
            Role-based web app with messaging, events, donations, and admin verification. Built with React & Node.
          </p>
        </div>

        <div className="project-card">
          {/* <div className="project-status complete">Completed</div> */}
          <FaLaptopCode className="project-icon" />
          <h3>Portfolio Website</h3>
          <p>
            Modern, animated, responsive portfolio built with Vite + React featuring routing, theme toggle, and CV download.
          </p>
        </div>

        <div className="project-card">
          {/* <div className="project-status prototype">Prototype</div> */}
          <FaBriefcase className="project-icon" />
          <h3>Job Portal System</h3>
          <p>
            Secure job portal app with login, job post/apply features, and role-based access control.
          </p>
        </div>
      </div>
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        <div className="skill-row">
          <FaPaintBrush className="skill-icon" />
          <div className="skill-details">
            <div className="skill-title">
              <span>Graphics Design</span>
              <span>85%</span>
            </div>
            <div className="skill-bar-container">
              <div className="skill-bar-fill skill-bar graphics"></div>
            </div>
          </div>
        </div>

        <div className="skill-row">
          <FaVideo className="skill-icon" />
          <div className="skill-details">
            <div className="skill-title">
              <span>Video Editing</span>
              <span>80%</span>
            </div>
            <div className="skill-bar-container">
              <div className="skill-bar-fill skill-bar video"></div>
            </div>
          </div>
        </div>

        <div className="skill-row">
          <FaCode className="skill-icon" />
          <div className="skill-details">
            <div className="skill-title">
              <span>Frontend Web Development</span>
              <span>90%</span>
            </div>
            <div className="skill-bar-container">
              <div className="skill-bar-fill skill-bar code"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
