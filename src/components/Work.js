import React from "react";
import "./Work.scss";

function Work() {
  return (
    <section id="work">
      <h1 className="section-title"><span>Work Experience</span></h1>

      <div className="work-card">
        <h2 className="title">Ollon</h2>
        <h3 className="subtitle">
          Software Developer (Internship) <span className="date">Sep. 2024 - Dec. 2024, Sep. 2023 - Dec. 2023</span>
        </h3>
        <ul className="achievements">
          <li>Developed a full-stack web application from the ground up using React, Node.js, and MySQL to streamline data management for a law firm.</li>
          <li>Led backend integration of Tick and Runn APIs for visualization in Metabase, optimizing data processing logic and reducing runtime from 5 hours to ~10minutes.</li>
          <li>Collaborated on logical bug fixes and new features for a clinic’s website, improving stability and user experience.</li>
          <li>Wrote E2E tests in Cypress and documented test cases in Testmo to ensure a smooth PHP migration for a client.</li>
        </ul>
        <div className="tech-stack">
          <h4>Technologies Used:</h4>
          <div className="tech-list">
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>React</span>
            <span>Node.js</span>
            <span>MySQL</span>
            <span>Cypress</span>
            <span>Testmo</span>
            <span>AWS</span>
            <span>Docker</span>
            <span>Puppeteer</span>
          </div>
        </div>
      </div>

      <div className="work-card">
        <h2 className="title">Multi Flow Solutions</h2>
        <h3 className="subtitle">
          Software Developer (Internship) <span className="date">Jan 2023 – Apr 2023</span>
        </h3>
        <ul className="achievements">
          <li>Developed a Sales Dashboard web application used daily to analyze sales outliers (Flask, Dash, Bootstrap, SQLAlchemy).</li>
          <li>Built and maintained a SQLite database with secure user authentication.</li>
          <li>Deployed software with Waitress and hosted it as a Windows Service using NSSM.</li>
          <li>Created a Python RegEx scraper converting purchase order PDFs to CSV for faster SAP data entry.</li>
          <li>Wrote SQL Server queries to extract insights for the sales team and automated tasks with SQL Server Agent jobs.</li>
        </ul>
        <div className="tech-stack">
          <h4>Technologies Used:</h4>
          <div className="tech-list">
            <span>Python</span>
            <span>Flask</span>
            <span>Dash</span>
            <span>Bootstrap</span>
            <span>SQLAlchemy</span>
            <span>SQLite</span>
            <span>SQL Server</span>
            <span>Waitress</span>
            <span>NSSM</span>
          </div>
        </div>
      </div>

      <div className="work-card">
        <h2 className="title">Creospark</h2>
        <h3 className="subtitle">
          Technology Consulting Assistant (Internship) <span className="date">May 2022 – Aug 2022</span>
        </h3>
        <ul className="achievements">
          <li>Developed Adaptive Card Extensions (ACE) / Mini Apps using Node.js and SPFx.</li>
          <li>Collaborated with UI/UX designers to refine app interfaces and improve user experience.</li>
          <li>Created functional specification documents for client-facing custom software.</li>
          <li>Delivered a live webinar on hosting effective MS Teams meetings, now used for new employee onboarding.</li>
        </ul>
        <div className="tech-stack">
          <h4>Technologies Used:</h4>
          <div className="tech-list">
            <span>Node.js</span>
            <span>SPFx</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>SharePoint</span>
            <span>Microsoft Teams</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
