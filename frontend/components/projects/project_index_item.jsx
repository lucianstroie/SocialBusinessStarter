import React from 'react';
import { Link, hashHistory } from 'react-router';
import Moment from 'moment';
import { Line } from 'rc-progress';


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
        <h2 className="user-project">by {project.owner_name}</h2>
        <h2 className="subtitle-project">{project.subtitle}</h2>
      </div>

      <div className="project-widget-summary">
        <h3 className="location-project">
          <i className="fa fa-map-marker fa-lg" aria-hidden="true"></i>
          {project.location}</h3>

        <div className="progress-bar">
          <Line percent={(project.percent > 100 ? 100 : project.percent)} strokeWidth="3"
            strokeColor="rgb(37,203,104)" trailWidth="3"/>
        </div>

        <div className="work-please">
        <ul>
          <li >
            <h4 className="summary-project">{project.percent}%</h4>
            <h2 className="user-project">funded</h2>
          </li>
          <li >
            <h4 className="summary-project">${project.sum_total}</h4>
            <h2 className="user-project">pledged</h2>
          </li>
          <li>
            <h4 className="summary-project">
              {Moment(project.days_left).diff(Moment(),'days')}

            </h4>
            <h2 className="user-project">days to go</h2>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default ProjectIndexItem;
