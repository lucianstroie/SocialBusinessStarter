import React from 'react';
import { Link } from 'react-router';
import PledgeItem from '../pledges/pledge';

import PledgeFormContainer from '../pledges/pledge_form_container';


class ProjectShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {

    this.props.fetchProject(this.props.params.projectId);
  }



  render(){
    const project = this.props.project;
    if (!project) {
      return (<div>Loading...
      </div>);
    }
    console.log(this.props.project)

    return (
      <div className="project-show-page">
        <div className="project-show-top">

          <div className="project-user">
            <img className="owner-pic"
              src={project.owner_pic}/>
            <h3>by {project.owner_name}</h3>
          </div>
          <div className="project-title-container">
            <h1>{project.title}</h1>
            <h2>{project.subtitle}</h2>
          </div>
        </div>

        <div className="project-summary">
          <img src={project.image_url}/>

          <div className="project-summary-details">
            <div className="raised">
              <h1>$AMOUNT RAISED</h1>
              <h2>pledged of $50,000</h2>
            </div>

            <div className="backers">
              <h1>1,234</h1>
              <h2>backers</h2>
            </div>

            <div className="days-left">
              <h1>{project.days_left}</h1>
              <h2>days left</h2>
            </div>
            <button className="contribute-button">Back This Project</button>
          </div>
        </div>

        <div className="project-body">
          <h2>{project.body}</h2>
        </div>

        <div>
          {
            this.props.project.pledges.map((pledge, idx) => (
              <PledgeItem
                key={pledge.id}
                pledge={pledge}/>
            ))
          }
        </div>

        <h2>{project.location}</h2>
        <h2>{project.category}</h2>
      </div>
    );
  }
}

            // <PledgeFormContainer />

export default ProjectShow;
