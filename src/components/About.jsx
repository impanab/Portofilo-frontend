// import React, { useEffect } from "react";
import PropTypes from "prop-types";
// import AOS from "aos";
import "./css/About.css";


function About({ showList }) {
  return (
<div className="about">
<section
      className="about-section"
      aria-labelledby="about-heading"
      data-aos="fade-up"
      onClick={showList}
    >
      <header className="about-section__header">
        <h1 id="about-heading" className="about-section__title">
          About Me
        </h1>
      </header>

      <div className="about-section__wrapper">
        <div className="about-section__avatar">
          <img src="/impana.jpeg" alt="Impana" />
        </div>


        <div className="about-section__content">
          <p className="about-section__text">
            Hi, I'm <strong>Impana B</strong> — a developer who started this
            journey with a love for creating intuitive, real-world web apps.
            What began with curiosity quickly became passion, and now I’m
            focused on full-stack development using modern technologies and
            tools.
          </p>

          <p className="about-section__text">
            I enjoy working on scalable web applications, integrating AI-driven
            features, and continuously sharpening my skills in both frontend and
            backend systems. I'm currently diving deeper into cloud platforms
            like <strong>Microsoft Azure</strong> and exploring how AI agents
            can enhance digital experiences.
          </p>

          <div className="tech-icons" aria-label="Technology Stack Icons">
            <img src="/react.svg" alt="React" title="React" />
            <img src="/nextjs.svg" alt="Next.js" title="Next.js" />
            <img src="/nodejs.svg" alt="Node.js" title="Node.js" />
            <img src="/mongodb.svg" alt="MongoDB" title="MongoDB" />
            <img src="/sql.svg" alt="sql" title="SQL" />
            <img src="/docker.svg" alt="Docker" title="Docker" />
            <img src="/azure.svg" alt="Azure" title="Azure" />
          </div>

          <div className="fun-fact-card">
            <p>🗣️ Talks a lot with close ones. Quiet otherwise 😄</p>
          </div>
        </div>
      </div>
    </section>
</div>
  );
}

About.propTypes = {
  showList: PropTypes.func.isRequired,
};

export default About;
