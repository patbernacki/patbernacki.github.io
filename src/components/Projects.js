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
                                <a href="https://github.com/Patrick-Bernacki/type_racer">
                                    <img src="images/type_racer.png" alt="" className="item-img"/>
                                    <div className="overlay">
                                        <div className="project-item-meta">
                                            <h5>Type Racer</h5>
                                            <p>Tests typing speed</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="columns project-item">
                            <div className="item-wrap">
                                <a href="https://github.com/Patrick-Bernacki/type_racer">
                                    <img src="images/type_racer.png" alt="" className="item-img"/>
                                    <div className="overlay">
                                        <div className="project-item-meta">
                                            <h5>Type Racer</h5>
                                            <p>Tests typing speed</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="columns project-item">
                            <div className="item-wrap">
                                <a href="https://github.com/Patrick-Bernacki/type_racer">
                                    <img src="images/type_racer.png" alt="" className="item-img"/>
                                    <div className="overlay">
                                        <div className="project-item-meta">
                                            <h5>Type Racer</h5>
                                            <p>Tests typing speed</p>
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