// WorkExperienceCard.jsx
import React from 'react';
import './css/WorkExperienceCard.css';

const WorkExperienceCard = () => {
  return (
    <div className="experience-card">
      <h2 className="section-title">Work Experience</h2>

      <div className="job-card">
        <div className="job-header">
          <div>
            <h3 className="job-title">Senior Associate Software Engineer</h3>
            <p className="company-name">AT&amp;T</p>
          </div>
          <span className="job-duration">Apr 2025 – Present</span>
        </div>
        <p className="job-description">
          Currently working full-time on scalable web applications and feature development using the MERN stack. Collaborating with cross-functional teams to deliver production-ready solutions.
        </p>
        <div className="tech-stack">
          <span className="tech-tag">React.js</span>
          <span className="tech-tag">Next.js</span>
          <span className="tech-tag">MongoDB</span>
          <span className="tech-tag">Node.js</span>
        </div>
      </div>

      <div className="job-card">
        <div className="job-header">
          <div>
            <h3 className="job-title">Software Engineering Apprentice</h3>
            <p className="company-name">AT&amp;T</p>
          </div>
          <span className="job-duration">Apr 2024 – Mar 2025</span>
        </div>
        <p className="job-description">
          Completed a year-long apprenticeship program where I gained hands-on experience building modern web applications, collaborating on agile teams, and improving problem-solving skills.
        </p>
        <div className="tech-stack">
          <span className="tech-tag">JavaScript</span>
          <span className="tech-tag">HTML/CSS</span>
          <span className="tech-tag">Git</span>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCard;