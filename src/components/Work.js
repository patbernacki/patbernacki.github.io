import React from "react";
import './Work.scss';

function Work() {
    return (
        <section id='work'>
            <div className="row">
                <div className="three columns header-col">
                    <h1 className="section-title"><span>Work</span></h1>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            <h1 className="subtitle">UMI Solutions</h1>
                            <p><em>Business Administration & IT Assistant • Jan 2023 - Apr 30</em></p>
                            <p>• some achievements</p>
                        </div>
                    </div>
                    <div className="row item">
                        <div className="twelve columns">
                            <h1 className="subtitle">Creospark</h1>
                            <p><em>Technology Consulting Assistant • May 2022 - Aug 31</em></p>
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