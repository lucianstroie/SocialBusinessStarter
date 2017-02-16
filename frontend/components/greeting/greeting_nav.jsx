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

          <li><Link to="/" className="explore"><i className="fa fa-compass fa-lg" aria-hidden="true"></i>Explore</Link></li>
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
