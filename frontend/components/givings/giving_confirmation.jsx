import React from 'react';
import { withRouter } from 'react-router';
import { createGiving } from '../../actions/giving_actions';
import { fetchPledge } from '../../actions/pledge_actions';


class GivingConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.giving || {user_id: window.currentUser.id,
       pledge_id: this.props.params.pledgeId};

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.createGiving(this.state);
  //   const url = `/projects/`;
  //   this.props.router.push(url);
  // }

  render() {

    return (
      <div>
        <h1>Giving Confirm</h1>
        <form onSubmit={this.handleSubmit} >
          <input type="submit" value={this.props.handleSubmit} />
        </form>
      </div>
    );
  }

}

export default GivingConfirmation;
