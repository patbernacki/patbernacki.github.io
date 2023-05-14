import React from "react";
import './Projects.scss';

function Projects() {
    return (
        <section id='projects'>
            <div className="row">
                <div className="twelve columns collapsed">
                    <h3 id='projects-section-title'>Check out my projects:</h3>
                    <div id="projects-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                        <div className="columns project-item">
                            <div className="item-wrap">
                                <a href="https://github.com/patbernacki/type_racer">
                                    <img src="images/type-racer.png" alt="" className="item-img"/>
                                    <div className="overlay">
                                        <div className="project-item-meta">
                                            <h5>Type Racer</h5>
                                            <p>A web app that tests typing speed</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="columns project-item">
                            <div className="item-wrap">
                                <a href="https://github.com/patbernacki/Discord-Music-Bot">
                                    <img src="images/discord-music-bot.png" alt="" className="item-img"/>
                                    <div className="overlay">
                                        <div className="project-item-meta">
                                            <h5>Clef</h5>
                                            <p>A discord bot that streams music from youtube</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="columns project-item">
                            <div className="item-wrap">
                                <a href="https://github.com/Patrick-Bernacki/super_hexagon">
                                    <img src="images/super-hexagon.png" alt="" className="item-img"/>
                                    <div className="overlay">
                                        <div className="project-item-meta">
                                            <h5>Super Hexagon</h5>
                                            <p>A minimal action/rhythm game, inspired by the original Super Hexagon</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects