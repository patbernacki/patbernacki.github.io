import React from "react";
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <section id='footer'>
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

export default Footer