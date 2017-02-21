import React from 'react';
import { Link, hashHistory } from 'react-router';

class PledgeItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { screenVisible: false };
  }

  render() {
    const { pledge } = this.props;
    let pledgeRedirect = "";
    if (window.currentUser && window.currentUser.id === pledge.user_id) {

        pledgeRedirect = <button>Edit Pledge</button>;

    } else {
      pledgeRedirect = <button>Contribute</button>;
    }

    const screenClass = this.state.screenVisible
      ? 'pledge-screen'
      : 'hidden pledge-screen';

    return (
      <div className="pledge-item pledge-button"
        onMouseEnter={
          () => this.setState({ screenVisible: true })
        }
        onMouseLeave={
          () => this.setState({ screenVisible: false })
        }
      >
        <h1>Pledge {pledge.level} or more</h1>
        <h2>{pledge.title}</h2>
        <h3>{pledge.description}</h3>
        <h4>num of backers</h4>
        <div className={screenClass}></div>
      </div>
    );
  }
}


export default PledgeItem;
