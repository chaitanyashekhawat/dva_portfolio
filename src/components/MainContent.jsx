import React from 'react';
import ProjectCard from './ProjectCard';
import './MainContent.css';

const projects = [
  {
    id: 1,
    title: 'Steam Games Analytics: Predicting Game Success',
    description: 'A data analytics project focused on identifying the key factors that drive the commercial success of games on Steam and building a decision framework for developers and publishers.',
    color: '#3182ce', // Blue
    repoLink: 'https://github.com/chaitanyashekhawat/E_G10_SteamVision',
    demoLink: 'https://public.tableau.com/views/SteamVisionAnalysis/Dashboard3?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
    tags: ['data-analytics', 'dashboard', 'success-prediction'],
    technologies: [
      { name: 'Tableau', color: '#e66100' },
      { name: 'Python', color: '#3572A5' }
    ]
  },
  {
    id: 2,
    title: 'Strategic Analysis of Loan Default Risk Factors',
    description: 'Comprehensive analysis to identify and understand the various risk factors contributing to loan defaults using advanced Excel techniques.',
    color: '#dd6b20', // Orange
    repoLink: 'https://github.com/Mystic-commits/DVA_G-8_SectionE.git',
    tags: ['data-analysis', 'risk-assessment', 'finance'],
    technologies: [
      { name: 'Excel', color: '#217346' },
      { name: 'Python', color: '#3572A5' }
    ]
  },
];

const MainContent = ({ activeTab, setActiveTab }) => {
  const tabs = ['All', 'Python', 'Tableau', 'Excel'];

  const filteredProjects = projects.filter(project => {
    if (activeTab === 'All') return true;
    return project.technologies.some(tech => tech.name === activeTab);
  });

  return (
    <main className="main-content">
      <div className="tabs-header">
        <h2 className="section-title">
          <svg className="icon" viewBox="0 0 16 16" width="16" height="16"><path fill="currentColor" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path></svg>
          Repositories <span className="badge">{projects.length}</span>
        </h2>
        
        <div className="filters">
          <input type="text" placeholder="Find a repository..." className="search-input" />
          <div className="tab-buttons">
            {tabs.map(tab => (
              <button 
                key={tab} 
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
};

export default MainContent;
