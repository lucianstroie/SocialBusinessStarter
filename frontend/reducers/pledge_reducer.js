import {
  RECEIVE_PLEDGE_ERRORS,
  RECEIVE_PLEDGE,
  REMOVE_PLEDGE } from '../actions/pledge_actions';
import merge from 'lodash/merge';

const _nullPledge = Object.freeze({
  pledge: {},
  errors: []
});

const PledgeReducer = (oldState = _nullPledge, action) => {
  switch (action.type) {
    case RECEIVE_PLEDGE_ERRORS:
      const errors = action.errors;
      return merge({}, oldState, {
        errors
      });
    case RECEIVE_PLEDGE:
      return merge({}, oldState, {[action.pledge.id]: action.pledge});
    case REMOVE_PLEDGE:
      let newState = merge({}, oldState);
      delete newState[action.project.id];
      return newState;
    default:
      return oldState;
  }
};

export default PledgeReducer;
