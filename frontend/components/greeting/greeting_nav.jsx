import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {
	constructor(props) {
		super(props);

  }

  sessionLinks () {
    return(
      <nav className="login-signup">
        <Link to="/login" activeClassName="current">Log in</Link>

        <Link to="/signup" activeClassName="current">Sign up</Link>
      </nav>
    );
  }


  personalGreeting (currentUser, logout) {
    return(
    <hgroup className="header-group">
      <img src={currentUser.image_url} className="user-pic" id="user-header"/>
      <button className="header-button" id="user-header" onClick={logout}>Log Out</button>
    </hgroup>
  );}

  rightNav ({ currentUser, logout }) {
    return(
      currentUser ? this.personalGreeting(currentUser, logout) : this.sessionLinks()
    );}

  render(){
    return(
      <div className="nav-bar-container">
        <section className="left">

          <Link to="/" className="explore"><i className="fa fa-compass fa-lg" aria-hidden="true"></i>Explore</Link>
        	<Link to="/projects/new" className="new" >Start A New Project</Link>
        </section>
        <section className="center">
          <Link to="/" id="logo" >Social<span>Business</span>Starter</Link>
        </section>
        <section className="right">
        {this.rightNav(this.props)}
        </section>

      </div>
    );
  }
}

// <a href="#"><i className="fa fa-search" aria-hidden="true"></i></a>

export default Greeting;
