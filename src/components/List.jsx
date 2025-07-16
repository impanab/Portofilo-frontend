import React from 'react';
import { Link } from 'react-scroll';
import { FaTimes, FaHome, FaUser, FaGraduationCap, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import nav from './css/Navbar.module.css';

const List = ({ showList }) => {
  return (
    <div className={nav.mobileNav}>
      <button className={nav.closeBtn} onClick={showList} aria-label="Close Menu">
        <FaTimes />
      </button>

      <Link to="/" className={nav.link} smooth={true} duration={200} onClick={showList}>
        <FaHome /> Home
      </Link>

      <Link to="about" className={nav.link} smooth={true} duration={200} onClick={showList}>
        <FaUser /> About
      </Link>

      <Link to="education" className={nav.link} smooth={true} duration={200} onClick={showList}>
        <FaGraduationCap /> Education
      </Link>

      <Link to="skill" className={nav.link} smooth={true} duration={200} onClick={showList}>
        <FaTools /> Skills
      </Link>

      <Link to="project" className={nav.link} smooth={true} duration={200} onClick={showList}>
        <FaProjectDiagram /> Projects
      </Link>

      <Link to="contact" className={nav.link} smooth={true} duration={200} onClick={showList}>
        <FaEnvelope /> Contact
      </Link>
    </div>
  );
};

export default List;
