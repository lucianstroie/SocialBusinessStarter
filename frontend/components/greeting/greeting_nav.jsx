import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {
	constructor(props) {
		super(props);

  }

  sessionLinks () {
    return(
      <nav className="login-signup">
        <li><Link to="/login" activeClassName="current">Login</Link></li>

        <li><Link to="/signup" activeClassName="current">Sign up!</Link></li>
      </nav>
    );
  }

  personalGreeting (currentUser, logout) {
    return(
    <hgroup className="header-group">
      <li><img src={currentUser.image_url} /></li>
      <li><h2 className="header-name">Hi, {currentUser.username}!</h2></li>
      <li><button className="header-button" onClick={logout}>Log Out</button></li>
    </hgroup>
  );}

  rightNav ({ currentUser, logout }) {
    return(
      currentUser ? this.personalGreeting(currentUser, logout) : this.sessionLinks()
    );}

  render(){
    return(
      <div>
        <section className="left">

          <li><Link to="/" className="explore"><i className="fa fa-compass" aria-hidden="true"></i> Explore</Link></li>
        <li><Link to="/" className="new" >Start A New Project</Link></li>
        </section>
        <section className="center">
          <li><Link to="/" className="logo" >SocialBusinessStarter</Link></li>
        </section>
        <section className="right">
          <li><button><i className="fa fa-search" aria-hidden="true"></i></button></li>
        {this.rightNav(this.props)}
        </section>

      </div>
    );
  }
}


export default Greeting;
