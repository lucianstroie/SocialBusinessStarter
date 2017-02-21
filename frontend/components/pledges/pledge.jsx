import React from 'react';
import { Link, hashHistory } from 'react-router';

const PledgeItem = ({ pledge }) => {

  let pledgeRedirect = "";
  if (window.currentUser.id === pledge.user_id) {

      pledgeRedirect = <button>Edit Pledge</button>;

  } else {
    pledgeRedirect = <button>Contribute</button>;
  }

  return (
    <div className="pledge-item pledge-button">
      <h1>Pledge {pledge.level} or more</h1>
      <h2>{pledge.title}</h2>
      <h3>{pledge.description}</h3>
      <h4>num of backers</h4>
    </div>
  );
};


export default PledgeItem;
