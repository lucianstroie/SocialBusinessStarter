import React from 'react';
import { withRouter } from 'react-router';


class PledgeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      level: 0,
      project_id: this.props.params.projectId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPledge(this.state);
    const url = `/projects/${this.state.project_id}`;
    this.props.router.push(url);
  }

  render() {

    return (
      <div className="pledge-form-background">
        <div className="pledge-form-container">
          <form onSubmit={this.handleSubmit} className="pledge-form">
            <h1 className="pledge-title">Add a New Pledge!</h1>
            {this.renderErrors()}
            <div className="pledge-form">
              <input type="text"
                value={this.state.level}
                onChange={this.update("level")}
                className="pledge-input"
                placeholder="Pledge Level" />
              <input type="text"
                value={this.state.title}
                onChange={this.update("title")}
                className="pledge-input"
                placeholder="Pledge Title" />
              <input type="text"
                value={this.state.description}
                onChange={this.update("description")}
                className="pledge-input"
                placeholder="Description" />
                <br/>
                <input className="pledge-form pledge-submit-button"
                  type="submit" value={this.props.handleSubmit} />
              <br/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(PledgeForm);
