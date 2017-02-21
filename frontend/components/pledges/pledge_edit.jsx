import React from 'react';
import { withRouter } from 'react-router';

class PledgeEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.pledge || {level: 0, title: "", description: ""};

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

  componentDidMount() {
    this.props.fetchPledge(this.props.params.pledgeId);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.pledge);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePledge(this.state);
    const url = `/projects/${this.state.project_id}`;
    this.props.router.push(url);
  }

  render() {

    return (
      <div className="pledge-form-background">
        <div className="pledge-form-container">
          <form onSubmit={this.handleSubmit} className="pledge-form">
            <h1 className="pledge-title">Edit Your Pledge!</h1>
            {this.renderErrors()}
            <div className="pledge-form">
              <input type="text"
                value={this.state.level}
                onChange={this.update("level")}
                className="pledge-input"
                 />
              <input type="text"
                value={this.state.title}
                onChange={this.update("title")}
                className="pledge-input"
                 />
              <input type="text"
                value={this.state.description}
                onChange={this.update("description")}
                className="pledge-input"
                 />
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

export default PledgeEdit;
