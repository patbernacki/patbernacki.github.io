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
      skills: ["React", "Node.js", "Express.js", "Flask", "Plotly Dash", "SPFx", "Bootstrap", "Cypress"],
    },
    {
      title: "Libraries",
      skills: ["Pandas", "NumPy", "Matplotlib", "OpenCV", "Puppeteer", "Axios", "Axios", "SQLAlchemy"],
    },
    {
      title: "Technologies",
      skills: ["Git", "Docker", "AWS", "Cypress", "Postman", "SQL Server", "MySQL", "Figma", "VS Code"],
    },
  ];

  return (
    <section id="skills">
      <h1 className="section-title"><span>Skills</span></h1>
      <div className="skills-wrapper">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills-category">
            <h3>
              {category.icon && <span className="cat-icon">{category.icon}</span>} 
              {category.title}
            </h3>
            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
