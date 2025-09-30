import React from "react";
import './About.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function About() {
    return(
        <section id='about'>
            <img className='profile-pic' src={`${process.env.PUBLIC_URL}/images/profilepic.jpg`} alt="" />
            <h1>Patrick Bernacki</h1>
            <p>Student | Aspiring Developer</p>
            <hr />
            <ul className="socials">
                <li>
                    <a href="https://www.linkedin.com/in/patrickbernacki/">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                    <a href="https://github.com/patbernacki">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                    <a href="mailto: bern1600@mylaurier.ca">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default About