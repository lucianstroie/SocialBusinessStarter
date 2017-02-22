import React from 'react';
import { Link, hashHistory } from 'react-router';


const ProjectIndexItem = ({ project }) => {

  const linkToProject = (e) => {
    e.preventDefault();
    hashHistory.push(`projects/${project.id}`);
  };

  return (
    <div className="project-widget" onClick={linkToProject}>
      <img className="pic-project" src={project.image_url} />

      <div className="text-container">
        <h3 className="title-project">{project.title}</h3>
        <h2 className="user-project">by {project.user_id}</h2>
        <h2 className="subtitle-project">{project.subtitle}</h2>
      </div>

      <div className="project-widget-summary">
        <h3 className="location-project">{project.location}</h3>
        <h4>{project.goal}% funded</h4>
        <h4>{project.sum_total} pledged</h4>
        <h4>{project.days_left} days to go</h4>
      </div>
    </div>
  );
};

export default ProjectIndexItem;
