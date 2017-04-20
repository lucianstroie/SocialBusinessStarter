import React from 'react';
import { withRouter } from 'react-router';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateFile = this.updateFile.bind(this);

    this.state = this.props.project || {title: "", subtitle: "", goal: "", body: "",
      end_date: Date.today , category: "", location: "", imageFile: null};
  }

  renderErrors() {
		return(
			<ul id="errors">
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

  componentDidMount() {
      if (this.props.formType !== "/projects/new") {

        this.props.fetchProject(this.props.params.projectId);
      }
    }

  componentWillReceiveProps(newProps) {

    this.setState(newProps.project);
  }


  handleSubmit(e){
    e.preventDefault();

    let formData = new FormData();
    formData.append("project[title]", this.state.title);
    formData.append("project[subtitle]", this.state.subtitle);
    formData.append("project[goal]", this.state.goal||1);
    formData.append("project[body]", this.state.body);
    formData.append("project[end_date]", this.state.end_date);
    formData.append("project[category]", this.state.category);
    formData.append("project[end_date]", this.state.end_date);
    formData.append("project[location]", this.state.location);
    if (this.state.imageFile) formData.append("project[image]", this.state.imageFile);

    if (this.props.project) {

      formData.append("project[id]", this.props.project.id);
    }
    let clearErrors = this.props;

    this.props.processForm(formData).then((project) => {
      this.props.router.push(`/projects/${project.project.id}`);
    });
  }

  handleChange(e) {
    this.setState({category: e.target.value});
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  updateFile(e) {
		let file = e.currentTarget.files[0];
		var fileReader = new FileReader();
		fileReader.onloadend = function () {
			this.setState({ imageFile: file, imageUrl: fileReader.result });
		}.bind(this);

		if (file) {
			fileReader.readAsDataURL(file);
		}
	}


  render() {

    let title = (this.props.formType === "/projects/new") ? "Start A New Project!" : "Edit Your Project!";



    return(
      <div>
        <div className="project-form-background">
          <div className="project-form-container">
            <form onSubmit={this.handleSubmit} className="project-form">
              <h1 className="project-title">{title}</h1>
              {this.renderErrors()}
              <div className="projects-form">
                <input type="text"
                  value={this.state.title}
                  onChange={this.update("title")}
                  className="project-input projects-form-box"
                  placeholder="Project Title" />
                <br/>
                <input type="text"
                  value={this.state.subtitle}
                  onChange={this.update("subtitle")}
                  className="project-input"
                  placeholder="Subtitle" />
                  <br/>
                <input type="integer"
                  value={this.state.goal}
                  onChange={this.update("goal")}
                  className="project-input"
                  placeholder="Fundraising Goal"
                  min="1"
                   />
                  <br/>
        					<input type="file" onChange={this.updateFile}
        						className="form-box" id='photo-upload-btn'/>
                  <div className='project-upload-button projects-form-box'
                    onClick={() => document.querySelector('#photo-upload-btn').click()}>
        						Upload Your Photo
        					</div>
        					<img className='user-uploaded-photo' src={this.state.imageUrl} />
                <br/>
                  <select value={this.state.category} onChange={this.handleChange}
                    className="projects-input category-dropdown">
                    <option defaultValue="default">Choose A Category</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="EcoTourism">EcoTourism</option>
                    <option value="Entrepreneurship">Entrepreneurship</option>
                    <option value="Education">Education</option>
                  </select>
                <br/>
                <input type="text"
                  value={this.state.location}
                  onChange={this.update("location")}
                  className="project-input"
                  placeholder="Location" />
                <br/>
                <input type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={this.state.end_date}
                  onChange={this.update("end_date")}
                  className="project-input"/>
                <br/>
                <input type="textarea"
                  value={this.state.body}
                  onChange={this.update("body")}
                  className="project-input"
                  placeholder="Add your project's description here" />
                <br/>
                <input className="projects-form project-submit-button" type="submit" value={this.props.handleSubmit} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(ProjectForm);
