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
					<label>
						<input type="text"
							value={this.state.name}
							onChange={this.update("name")}
							placeholder="Name"
							className="login-input form-box" />
					</label>
					<br/>
					<label>
						<input type="text"
							value={this.state.location}
							onChange={this.update("location")}
							placeholder="Location"
							className="login-input form-box" />
					</label>
					<br/>
					<input type="file" onChange={this.updateFile}
						className="form-box"/>
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

					<br/>
					<h1 id="title">{this.props.formType}</h1>
					{this.renderErrors()}
					<div className="login-form">
						<br/>
						<label>
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input form-box"
								placeholder="Username"/>
						</label>
						<br/>
						<label>
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input form-box"
								placeholder="Password"/>
						</label>
						<br/>

							{ this.signupInput() }
						<br/>
						<input className="login-button form-box" type="submit" value={this.props.formType} />
						<button className="guest-button link-form-box form-box"
							onClick={ this.guestLogIn.bind(this) }>Guest Log In</button>
					</div>
					<div className="redirect">
						{this.navLink()}
					</div>
				</form>
		</div>
		);
	}

}

export default withRouter(SessionForm);
