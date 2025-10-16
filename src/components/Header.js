import React, { useState, useEffect } from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header id="home" className={showHeader ? 'visible' : ''}>
      <nav id="nav-wrap">
        <div className="logo">
          <a href="#about">Patrick Bernacki</a>
        </div>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <ul id="nav" className={`nav ${menuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={handleLinkClick}>About Me</a></li>
          <li><a href="#education" onClick={handleLinkClick}>Education</a></li>
          <li><a href="#work" onClick={handleLinkClick}>Experience</a></li>
          <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
