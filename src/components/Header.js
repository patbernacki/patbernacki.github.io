import React from 'react';
import './Header.scss';


function Header() {
  return (
    <header id="home">
      <nav id="navbar">
          <a className="current" href="#home">Home</a>
          <a href="#education">Education</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
      </nav>
    </header>
  )
}

export default Header