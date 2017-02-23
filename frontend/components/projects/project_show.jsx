import React from 'react';
import { Link } from 'react-router';
import PledgeItem from '../pledges/pledge';
import Moment from 'moment';

import PledgeFormContainer from '../pledges/pledge_form_container';


class ProjectShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.params.projectId);
  }



  render(){


    let addpledge = "";
    const project = this.props.project;
    if (!project) {
      return (<div>Loading...
      </div>);
    } else {
      if (window.currentUser && window.currentUser.id === project.user_id) {
        const link = `/projects/${project.id}/addpledge`;
        addpledge = <Link to={link}>Add A Pledge Level</Link>;
      }
    }



    return (
      <div className="background">
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
                <h1>${project.sum_total} RAISED</h1>
                <h2>pledged of ${project.goal}</h2>
              </div>

              <div className="backers">
                <h1>{project.backers}</h1>
                <h2>backers</h2>
              </div>

              <div className="days-left">
                <h1>{Moment(project.days_left).diff(Moment(),'days')}</h1>
                <h2>days left</h2>
              </div>
              <button className="contribute-button">Back This Project</button>
            </div>
          </div>

          <h2 className="project-location">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
              {project.location}
          </h2>

          <div className="project-body">
            <div className="project-body-text">
              <h1 className="project-body-title">About this project</h1>
              <h2>{project.body}</h2>
            </div>

            <div className="project-body-right">
              <h1 className="project-body-title">Support this project</h1>
              <div className="add-pledge pledge-button">
                { addpledge }
              </div>

              <div>
                {
                  this.props.project.pledges.map((pledge, idx) => (
                    <PledgeItem
                      key={pledge.id}
                      pledge={pledge}
                      project={project}
                      createGiving={this.props.createGiving}/>
                  ))
                }
              </div>
            </div>

          </div>

          <h2>{project.category}</h2>
        </div>
      </div>
    );
  }
}



export default ProjectShow;
