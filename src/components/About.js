import React from "react";
import './About.scss';

function About() {
    return(
        <section id='about'>
            <img className='profile-pic' src="images/profilepic.jpg" alt="" />
            <h1>Patrick Bernacki</h1>
            <p>Student | Aspiring Developer</p>
            <hr />
            <button>Download CV</button>
            <div id='socials'></div>
        </section>
    )
}

export default About