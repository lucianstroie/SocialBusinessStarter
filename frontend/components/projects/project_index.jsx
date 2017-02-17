
import React from 'react';
import ProjectIndexItem from './project_index_item';


class ProjectIndex extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render () {
  
    return (
      <div>
        <h1>Project Index</h1>
          <ul>
            {
              this.props.projects.map(project => (
                <ProjectIndexItem
                  key={project.id}

                  project={project} />
              ))
            }
          </ul>
      </div>
    );
  }
}

export default ProjectIndex;
