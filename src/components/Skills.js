import React from "react";
import "./Skills.scss";

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
    //   icon: "💻",  // or use FontAwesome/Icon component if you like
      skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "HTML", "CSS", "VBA"],
    },
    {
      title: "Frameworks",
    //   icon: "🧱",
      skills: ["React", "Node.js", "Express.js", "Flask", "Plotly Dash", "SPFx", "Bootstrap"],
    },
    {
      title: "Libraries",
    //   icon: "📚",
      skills: ["NumPy", "Pandas", "Matplotlib", "Puppeteer", "Axios", "JWT", "SQLAlchemy"],
    },
    {
      title: "Technologies",
    //   icon: "🔧",
      skills: ["Git", "Docker", "AWS", "Cypress", "VS Code", "SQL Server", "MySQL"],
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
