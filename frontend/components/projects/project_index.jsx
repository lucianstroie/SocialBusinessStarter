
import React from 'react';
import ProjectIndexItem from './project_index_item';


class ProjectIndex extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render () {

    return (
      <div className="index-background">

      <div className="index-background">
        <div className="index-container">
              {
                this.props.projects.map((project, idx )=> (

                    <ProjectIndexItem
                      key={project.id}
                      project={project} />

                ))
              }
        </div>
      </div>
    </div>
    );
  }
}
// { idx % 3 === 0 ? <h1>Some Text</h1> : null }

export default ProjectIndex;
