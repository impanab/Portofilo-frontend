import React from 'react';
import './css/FeaturedProjects.css';

const projects = [
  {
    icon: '🚀',
    title: 'E-Commerce Platform',
    description: 'Full-stack solution with inventory management, Stripe integration, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    live: '#',
    github: '#',
  },
  {
    icon: '🔧',
    title: 'Selenium Test Suite',
    description: 'Automated test framework for web apps with CI/CD and reporting.',
    tech: ['Selenium', 'Python', 'Jenkins', 'Docker'],
    live: '#',
    github: '#',
  },
  {
    icon: '☁️',
    title: 'Cloud Task Manager',
    description: 'Task manager with Azure deployment, real-time collaboration, and file sharing.',
    tech: ['Next.js', 'Azure', 'PostgreSQL', 'Socket.io'],
    live: '#',
    github: '#',
  },
];

const FeaturedProjects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, index) => (
            <div key={index} className="project-card">
              <div className="project-header">{proj.icon}</div>
              <div className="project-content">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-description">{proj.description}</p>
                <div className="project-tech">
                  {proj.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={proj.live} className="project-link">Live Demo</a>
                  <a href={proj.github} className="project-link">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
