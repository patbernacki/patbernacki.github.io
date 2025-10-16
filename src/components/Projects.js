import React from "react";
import "./Projects.scss";

function Projects() {
  const projects = [
    {
      title: "Recipe Suggestor",
      description: "A full-stack recipe app that suggests dishes based on ingredients you have at home.",
      image: `${process.env.PUBLIC_URL}/images/recipe-suggestor.png`,
      link: "https://recipe-suggestor-chi.vercel.app/",
      technologies: ["React", "TailwindCSS", "Node.js", "Express.js", "MySQL"],
    },
    {
      title: "Type Racer",
      description: "A web app that tests typing speed and accuracy in real-time.",
      image: `${process.env.PUBLIC_URL}/images/type-racer.png`,
      link: "https://github.com/patbernacki/type_racer",
      technologies: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Clef",
      description: "A Discord bot that streams music from YouTube with queue management and controls.",
      image: `${process.env.PUBLIC_URL}/images/discord-music-bot.png`,
      link: "https://github.com/patbernacki/Discord-Music-Bot",
      technologies: ["JavaScript", "DiscordJS"],
    },
    {
      title: "Super Hexagon",
      description: "A minimal action/rhythm game inspired by the original Super Hexagon.",
      image: `${process.env.PUBLIC_URL}/images/super-hexagon.png`,
      link: "https://github.com/Patrick-Bernacki/super_hexagon",
      technologies: ["Python", "Pygame"],
    },
  ];

  return (
    <section id="projects">
      <h1 id="projects-section-title">
        <span>Projects</span>
      </h1>

      <div id="projects-grid">
        {projects.map((project, index) => (
          <div
            className={`project-card ${index % 2 !== 0 ? "reverse" : ""}`}
            key={index}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-pill">{tech}</span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
