import React from 'react';
import { Link, hashHistory } from 'react-router';


const ProjectIndexItem = ({ project }) => {
  return (
    <div>
      <h2>project</h2>
      <img src={project.image_url} />
    </div>
  );
};

export default ProjectIndexItem;
