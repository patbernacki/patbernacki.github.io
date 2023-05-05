import React from 'react';
import './Header.scss';


function Header() {
  
  return (
    <header id="home">
      <nav id="nav-wrap">
        <ul id="nav" className="nav">
            <li><a href="#education">Education</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header