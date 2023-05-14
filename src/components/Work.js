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
                            <h1 className="subtitle"><em>Business Administration & IT Assistant • Jan 2023 - Apr 30</em></h1>
                            <div className="achievements">
                                <p>• Developed a Sales Dashboard web application that was used daily to discover outlying sales data (Flask, Dash, Bootstrap, and SQLAlchemy).</p>
                                <p>• Manufactured and maintained a SQLite database with user account information to employ a custom and secure user authentication system for the Sales Dashboard.</p>
                                <p>• Deployed software with Waitress and hosted code on company’s server as a Windows Service using NSSM.</p>
                                <p>• Built a scraper tool using RegEx in Python that converts purchase orders from PDF to CSV format for faster SAP data entry.</p>
                                <p>• Built a scraper tool using RegEx in Python that converts information from PDF purchase orders into CSV format for faster SAP data entry.</p>
                                <p>• Wrote complex queries inside of SQL Server to extract data into insightful Excel reports for the sales team to analyze.</p>
                                <p>• Created scheduled jobs in SQL Server Agent to improve automation practices.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row item extend-row">
                        <div className="twelve columns">
                            <h1 className="title">Creospark</h1>
                            <h1 className="subtitle"><em>Technology Consulting Assistant • May 2022 - Aug 31</em></h1>
                            <div className="achievements">
                                <p>• Designed and developed Adaptive Card Extensions (ACE) / Mini Apps using NodeJS and SPFx.</p>
                                <p>• Improved app designs by collaborating with UI/UX designers and collecting user feedback.</p>
                                <p>• Created functional specification documents on custom software for clients to reference. </p>
                                <p>• Delivered a live webinar on hosting effective MS Teams meetings to the entire company to improve business meeting practices. A recording of the webinar is now being used as an onboarding resource for new employees to watch.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work