import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-banner" style={{ backgroundColor: project.color }}></div>
      <div className="project-content">
        <div className="project-header">
          <svg className="icon" viewBox="0 0 16 16" width="16" height="16"><path fill="currentColor" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path></svg>
          <h3 className="project-title"><a href={project.repoLink} target="_blank" rel="noopener noreferrer">{project.title}</a></h3>
        </div>
        <p className="project-desc">{project.description}</p>
        
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="chip">{tag}</span>
          ))}
        </div>
        
        <div className="project-footer">
          <div className="project-tech">
            {project.technologies.map(tech => (
              <span key={tech.name} className="tech-item">
                <span className="tech-dot" style={{ backgroundColor: tech.color }}></span>
                {tech.name}
              </span>
            ))}
          </div>
          <div className="project-links">
            {project.repoLink && <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
            {project.demoLink && <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo ↗</a>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
