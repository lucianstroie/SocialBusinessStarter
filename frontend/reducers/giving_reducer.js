import { RECEIVE_GIVING } from '../actions/giving_actions';
import merge from 'lodash/merge';

const _nullGiving = Object.freeze({
  giving: {},
  errors: []
});

const GivingReducer = (oldState = _nullGiving, action) => {
  switch (action.type) {
    case RECEIVE_GIVING:
      return merge({}, oldState, {[action.giving.id]: action.giving});
    default:
      return oldState;
  }
};

export default GivingReducer;
