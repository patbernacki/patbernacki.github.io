import React from "react";
import "./Skills.scss";

function Skills() {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "HTML", "CSS", "VBA"],
        },
        {
            title: "Frameworks",
            skills: ["React", "Node.js", "Express.js", "Flask", "Dash", "SPFx", "Bootstrap", "SQLAlchemy"],
        },
        {
            title: "Technologies",
            skills: ["Git", "Docker", "AWS", "Cypress", "Puppeteer", "VS Code", "SQL Server", "MySQL"],
        },
    ];

    return (
        <section id="skills">
            <h1 className="section-title"><span>Skills</span></h1>
            <div className="row">
                <div className="twelve columns collapsed">
                    <div id="skills-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                        {skillCategories.map((category, index) => (
                            <div key={index} className="columns skills-category">
                                <h3>{category.title}</h3>
                                <div className="skills-list">
                                    {category.skills.map((skill, idx) => (
                                        <span key={idx} className="skill-pill">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
