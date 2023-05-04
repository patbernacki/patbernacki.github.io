import React from 'react';
import './Header.scss';


function Header() {
  return (
    <header id="home">
      <nav id="navbar">
          <a className="smoothscroll" href="#education">Education</a>
          <a className="smoothscroll" href="#work">Work</a>
          <a className="smoothscroll" href="#skills">Skills</a>
          <a className="smoothscroll" href="#projects">Projects</a>
      </nav>
    </header>
  )
}

export default Header