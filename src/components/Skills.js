import React from "react";
import './Skills.scss';

function Skills() {
    return (
        <section id='skills'>
            <div className="row">
                <div className="three columns header-col">
                    <h1 className="section-title"><span>Skills</span></h1>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            <h3>Python</h3>
                            <span className="bar"><span className="bar-fill python"></span></span>
                            <h3>JavaScript</h3>
                            <span className="bar"><span className="bar-fill javascript"></span></span>
                            <h3>Java</h3>
                            <span className="bar"><span className="bar-fill java"></span></span>
                            <h3>HTML</h3>
                            <span className="bar"><span className="bar-fill html"></span></span>
                            <h3>CSS</h3>
                            <span className="bar"><span className="bar-fill css"></span></span>
                            <h3>SQL</h3>
                            <span className="bar"><span className="bar-fill sql"></span></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills