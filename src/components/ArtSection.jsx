import React from "react";
import "./css/ArtSection.css";

const ArtSection = () => {
  return (
    <section className="art-section">
      <div className="art-intro">
        <h3>I Love to Draw</h3>
        <p>
          Art has always been my passion and creative outlet. Through drawing,
          I explore different techniques, express emotions, and bring ideas to life.
        </p>
      </div>

      <div className="art-gallery">
        {[
          {
            emoji: "🎭",
            title: "Portrait Study",
            medium: "Charcoal on Paper",
            description:
              "A character study focusing on facial expression and shading.",
          },
          {
            emoji: "🌿",
            title: "Nature Sketch",
            medium: "Pencil & Ink",
            description:
              "Captures botanical details through careful observation.",
          },
          {
            emoji: "🖥️",
            title: "Digital Illustration",
            medium: "Digital Art",
            description:
              "Combines traditional techniques with modern design elements.",
          },
        ].map((art, index) => (
          <div key={index} className="art-card">
            <div className="art-icon">{art.emoji}</div>
            <div className="art-details">
              <h4>{art.title}</h4>
              <span>{art.medium}</span>
              <p>{art.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="art-text">🎨 Check out my art on</p>
  <a
    href="https://www.instagram.com/my__art_gal_lery_/"
    target="_blank"
    rel="noopener noreferrer"
    className="art-link"
  >
    @my__art_gal_lery_
  </a>
    </section>
  );
};

export default ArtSection;
