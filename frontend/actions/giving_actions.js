import * as APIUtil from '../util/giving_api_util';

export const RECEIVE_GIVING = "RECEIVE_GIVING";

export const receiveGiving = giving => ({
  type: RECEIVE_GIVING,
  giving
});

export const createGiving = giving => dispatch => {
  debugger
  return APIUtil.createGiving(giving).then(giving => dispatch(receiveGiving(giving)))
};
