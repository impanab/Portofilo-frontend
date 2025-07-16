import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./css/Herosection.css";
import { Link } from "react-scroll";
import ChatBot from "./ChatBot";
import Icons from "./Icons";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="background-elements">
        <div className="bg-circle"></div>
        <div className="bg-circle"></div>
        <div className="bg-circle"></div>
      </div>

      <div className="hero-content">
        <div className="name-sec">
          <p className="hero-title">Impana B</p>
          <TypeAnimation
            sequence={[
              " Frontend Developer",
              1000,
              " Backend Developer",
              1000,
              " Fullstack Developer",
              1000,
            ]}
            wrapper="span"
            speed={20}
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              display: "inline-block",
              color: "#02131e",
            }}
            repeat={Infinity}
          />
        </div>

        <p className="hero-description">
          I build responsive web applications with clean code, stunning design,
          and user-focused experiences.
        </p>
        <div className="hero-buttons">
          <a
            href="https://drive.google.com/file/d/1mQDy1rPocCBFaZ4785dDArBjnbEpLBR4/view?usp=drive_link"
            className="btn btn-primary"
          >
            View My Resume
          </a>
          <Link
            to="contact"
            smooth
            duration={200}
            className="btn btn-secondary"
          >
            Get In Touch
          </Link>
        </div>
        <div className="hero-icons-wrapper">
          <Icons />
        </div>
      </div>
      <ChatBot />
      <div className="scroll-indicator">
        <span className="scroll-text">SCROLL</span>
        <div className="scroll-arrow"></div>
      </div>
    </div>
  );
};

export default HeroSection;
