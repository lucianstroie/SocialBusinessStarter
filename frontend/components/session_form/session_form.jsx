import React from 'react';
import { Link, withRouter } from 'react-router';
import * as ApiUtil from "../../util/session_api_util";

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "",
			name: "", location: "", imageFile: null, imageURL: null }; // add inageFile and imageURL here?s
		this.handleSubmit = this.handleSubmit.bind(this);
		this.guestLogIn = this.guestLogIn.bind(this);
		this.updateFile = this.updateFile.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		if (this.props.formType === "login") {
				const user = this.state;
				this.props.processForm({user});
			}else{
				let formData = new FormData();
				formData.append("user[username]", this.state.username);
				formData.append("user[password]", this.state.password);
				formData.append("user[name]", this.state.name);
				formData.append("user[location]", this.state.location);
				formData.append("user[image]", this.state.imageFile);
				this.props.processForm(formData);
			}

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

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
	}


	signupInput() {
		if (this.props.formType === "signup") {
			return (
				<div className="signup-input">
					<label> Name:
						<input type="text"
							value={this.state.name}
							onChange={this.update("name")}
							className="login-input" />
					</label>
					<br/>
					<label> Location:
						<input type="text"
							value={this.state.location}
							onChange={this.update("location")}
							className="login-input" />
					</label>
					<input type="file" onChange={this.updateFile}/>
					<img src={this.state.imageUrl} />
				</div>
			);
		} else {
			return "";
		}
	}



	guestLogIn(e) {
		e.preventDefault();
		if (this.props.formType !== "login") {
			this.props.router.push("/login");
		}
		this.setState({username: "test", password: "starwars"}, () => {
			this.props.processForm({user: this.state});
		});
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

	render() {
		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					Welcome to Social Business Starter!
					<br/>
					Please {this.props.formType} or {this.navLink()}
					{this.renderErrors()}
					<div className="login-form">
						<br/>
						<label> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>
						<br/>
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>
						<br/>

							{ this.signupInput() }
						<br/>
						<input type="submit" value="Submit" />
					</div>
				</form>
				<button onClick={ this.guestLogIn.bind(this) }>Guest Log In</button>
			</div>
		);
	}

}

export default withRouter(SessionForm);
