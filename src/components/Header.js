import React, { Component } from 'react';

function Header() {
  return (
    <header id="home">
      <nav id="navbar">
          <a className="current" href="#home">Home</a>
          <a href="#education">Education</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
      </nav>
    </header>
  )
}

export default Header