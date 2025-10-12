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
                    I’m a recent <strong>Wilfrid Laurier University graduate</strong> with a strong passion for coding and building impactful digital solutions. 
                    Through various internship experiences, I’ve developed a solid foundation in <strong>full-stack development</strong>, 
                    working on projects that combine creativity, problem-solving, and user-focused design.
                </p>
                <p className="description">
                    I love exploring new technologies, improving my skills, and collaborating on meaningful projects. 
                    Outside of coding, I’m an avid soccer fan and enjoy playing video games in my free time.
                </p>
            </div>
        </section>
    )
}

export default About