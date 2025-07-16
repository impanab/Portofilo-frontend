import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList} from '@fortawesome/free-solid-svg-icons';
import nav from './css/Navbar.module.css';
import List from './List';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';
import { Projects } from './Projects';
import { Link } from 'react-scroll';
import HeroSection from './HeroSection';
import ArtSection from './ArtSection';
import WorkExperienceCard from './WorkExperienceCard';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
      if (window.innerWidth > 960) setShowMenu(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <div className={nav.maindiv} id="/">
        <nav className={nav.nv}>
          {isMobile ? (
            <FontAwesomeIcon
              icon={showMenu || faList}
              onClick={toggleMenu}
              className={nav.icon}
              aria-label={showMenu ? 'Close Menu' : 'Open Menu'}
            />
          ) : (
            <ul className={nav.desktopNav}>
              <li><Link to="home" smooth duration={200} className={nav.link}>Home</Link></li>
              <li><Link to="about" smooth duration={200} className={nav.link}>About</Link></li>
              <li><Link to="education" smooth duration={200} className={nav.link}>Education</Link></li>
              <li><Link to="skill" smooth duration={200} className={nav.link}>Skills</Link></li>
              <li><Link to="project" smooth duration={200} className={nav.link}>Projects</Link></li>
              <li><Link to="contact" smooth duration={200} className={nav.link}>Contact</Link></li>
            </ul>
          )}
          {isMobile && showMenu && <List showList={closeMenu} />}
        </nav>
      </div>
      <HeroSection/>
      <About />
      <WorkExperienceCard/>
      <Education />
      <Skills />
      <Projects />
      <ArtSection/>
      <Contact />
    </>
  );
};

export default Navbar;
