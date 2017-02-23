import * as APIUtil from '../util/giving_api_util';

import { receiveProject } from '../actions/project_actions';

export const RECEIVE_GIVING = "RECEIVE_GIVING";

export const receiveGiving = giving => ({
  type: RECEIVE_GIVING,
  giving
});

export const createGiving = giving => dispatch => {
  return APIUtil.createGiving(giving).then(project => dispatch(receiveProject(project)));
};
