import React from 'react';
import { Link } from 'react-router';

class ProjectShow extends React.Component {
  componentDidMount() {

    this.props.fetchProject(this.props.params.projectId);
  }


  render(){
    const project = this.props.project;
    if (!project) {
      return (<div>Loading...
      </div>);
    }

    return (
      <div>
        <h1>Hello</h1>
        <h2>{project.title}</h2>
        <h2>{project.subtitle}</h2>
        <h2>{project.body}</h2>
        <h2>{project.end_date}</h2>
        <h2>{project.category}</h2>
        <h2>{project.location}</h2>
        <h2><img src={project.image_url}/></h2>
      </div>
    );
  }
}

export default ProjectShow;
