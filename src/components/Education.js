import React from "react";
import './Education.scss';

function Education() {
    return (
        <section id='education'>
            <div className="row">
                <div className="three columns header-col">
                    <h1 className="section-title"><span>Education</span></h1>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            <h1 className="subtitle">Wilfrid Laurier University</h1>
                            <p><em>Business and Computer Science • Fall 2020 - Present</em></p>
                            <p>• 11.05 GPA out of 12</p>
                            <p>• Entrance scholarship - 95% admission average</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education