import React from "react";
import './Education.scss';

function Education() {
    return (
        <section id='education'>
            <h1 className="section-title"><span>Education</span></h1>
            <div className="education-card">
                <h1 className="title">Wilfrid Laurier University</h1>
                <h1 className="subtitle">
                    <div className="degrees">
                        <em>Honours Bachelor of Science in Computer Science</em>
                        <em>Honours Bachelor of Business Administration (Double-Degree)</em>
                    </div>
                    <em className="date">Sep. 2020 - Aug. 2025</em>
                </h1>
                <div className="achievements">
                    <li>10.96 GPA out of 12</li>
                    <li>Spring 2024 ICE Finalist</li>
                    <li>Entrance scholarship - 95% admission average</li>
                </div>

            </div>

        </section>
    )
}

export default Education