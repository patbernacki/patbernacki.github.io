import React from "react";
import './Work.scss';

function Work() {
    return (
        <section id='work'>
            <div className="row row-break">
                <div className="three columns header-col">
                    <h1 className="section-title"><span>Work</span></h1>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            <h1 className="title">UMI Solutions</h1>
                            <p className="subtitle"><em>Business Administration & IT Assistant • Jan 2023 - Apr 30</em></p>
                            <p>• some achievements</p>
                        </div>
                    </div>
                    <div className="row item extend-row">
                        <div className="twelve columns">
                            <h1 className="title">Creospark</h1>
                            <p className="subtitle"><em>Technology Consulting Assistant • May 2022 - Aug 31</em></p>
                            <p>• some achievements</p>
                            <p>• some achievements</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work