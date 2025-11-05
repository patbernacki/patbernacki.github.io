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
            <p>WLU Graduate | Software Developer</p>
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
            <div className="about-section">
                <h2>About Me</h2>
                <p className="description">
                    I’m a recent <strong>Wilfrid Laurier University graduate</strong> with a strong passion for coding and building digital solutions that make an impact. 

                </p>
                <p className="description">
                    Through various co-op experiences, I honed my <strong>frontend</strong> and <strong>backend</strong> development skills in <strong>agile</strong> teams, contributing to projects that combined creativity, problem-solving, and user-centered design.
                </p>
                <p className="description">
                    I love exploring new technologies and building projects that help me grow as a developer. 
                    Outside of coding, I'm an avid soccer fan, enjoy playing video games, and dabble in some stock trading.
                </p>
            </div>
        </section>
    )
}

export default About