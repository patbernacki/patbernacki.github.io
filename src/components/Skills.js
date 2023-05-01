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
                            <h3>Java</h3>
                            <h3>SQL</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills