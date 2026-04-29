import React from 'react';
import './Sidebar.css';
import avatarImg from '../assets/avatar.png';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile-img-container">
        <img src={avatarImg} alt="Chaitanya Singh" className="profile-img" />
      </div>
      
      <h1 className="profile-name">Chaitanya Singh</h1>
      <h2 className="profile-handle">@chaitanya_singh</h2>
      
      <p className="profile-bio">
        Passionate front-end developer and data analyst. Experienced in creating user-friendly web applications and building data-driven insights. Eager to apply my skills to build impactful digital solutions.
      </p>
      
      <button className="btn btn-follow">Follow / Contact</button>
      
      <div className="contact-info">
        <div className="contact-item">
          <svg className="icon" viewBox="0 0 16 16" width="16" height="16"><path fill="currentColor" d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-0l-1.06-1.060zM8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path></svg>
          <span>India</span>
        </div>
        <div className="contact-item">
          <svg className="icon" viewBox="0 0 16 16" width="16" height="16"><path fill="currentColor" d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.872L8.73 9.227a1.25 1.25 0 0 1-1.46 0L1.5 5.872ZM14.5 4.07v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"></path></svg>
          <a href="mailto:chaitanya.singh2024@nst.rishihood.edu.in">chaitanya.singh2024@nst.rishihood.edu.in</a>
        </div>
        <div className="contact-item">
          <svg className="icon" viewBox="0 0 16 16" width="16" height="16"><path fill="currentColor" d="M2 10.5a1.5 1.5 0 1 1 3 0v4a1.5 1.5 0 1 1-3 0v-4Zm1.5-8.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM6.5 10.5a1.5 1.5 0 1 1 3 0v4a1.5 1.5 0 1 1-3 0v-4Zm1.5-8.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM11 10.5a1.5 1.5 0 1 1 3 0v4a1.5 1.5 0 1 1-3 0v-4Zm1.5-8.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path></svg>
          <span>+91-8708146731</span>
        </div>
      </div>
      
      <div className="skills-section">
        <h3 className="skills-heading">Skills</h3>
        <div className="skills-list">
          {['Python', 'JavaScript', 'HTML', 'CSS', 'React', 'Tableau', 'Excel', 'Data Analytics', 'Data Visualization', 'SQL'].map(skill => (
            <span key={skill} className="chip chip-neutral">{skill}</span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
