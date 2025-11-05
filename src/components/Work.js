import React from "react";
import "./Work.scss";

function Work() {
  return (
    <section id="work">
      <h1 className="section-title"><span>Work Experience</span></h1>

      <div className="work-card">
        <h2 className="title">Ollon</h2>
        <h3 className="subtitle">
          Software Developer, Co-op <span className="date">Sep. 2024 - Dec. 2024, Sep. 2023 - Dec. 2023</span>
        </h3>
        <ul className="achievements">
          <li>Developed a full-stack case management web application for a law firm using React, Node.js, and MySQL, featuring secure authentication, filterable record management, and customizable forms.</li>
          <li>Led ETL integration of project management and time-tracking APIs using JavaScript, creating data visualization dashboards in Metabase and improving past query performance by 50x.</li>
          <li>Resolved bugs and implemented new features for a clinic website, improving stability and user satisfaction.</li>
          <li>Developed and executed E2E tests in Cypress and Testmo to ensure a smooth PHP migration for a client.</li>
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
          Software Developer, Co-op <span className="date">Jan 2023 – Apr 2023</span>
        </h3>
        <ul className="achievements">
          <li>Created a Sales Dashboard web application that was used daily to discover outlying sales data (Flask, Dash, Bootstrap, and SQLAlchemy).</li>
          <li>Implemented a secure SQLite authentication and authorization system to manage dashboard user accounts.</li>
          <li>Built a Python RegEx scraper converting company invoices from PDF to CSV for faster SAP data entry.</li>
          <li>Automated SQL Server workflows with stored procedures and scheduled jobs, streamlining report generation and improving data accuracy for sales analysis.</li>
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
          Technology Consulting Assistant, Co-op <span className="date">May 2022 – Aug 2022</span>
        </h3>
        <ul className="achievements">
          <li>Developed three SharePoint Mini Apps (Adaptive Card Extensions) using TypeScript, Node.js, SPFx, and Microsoft Graph API, including a Recent Content Feed, a Company Holiday Calendar, and an internal Buy & Sell Marketplace with messaging and image uploads.</li>
          <li>Collaborated with UI/UX designers to refine app interfaces and improve user experience.</li>
          <li>Created functional specification documents for client-facing custom software.</li>
          <li>Delivered a company-wide webinar on hosting effective MS Teams meetings. A recording of the webinar was later adopted as a standard onboarding resource.</li>
        </ul>
        <div className="tech-stack">
          <h4>Technologies Used:</h4>
          <div className="tech-list">
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>SPFx</span>
            <span>SharePoint</span>
            <span>Microsoft Graph API</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
