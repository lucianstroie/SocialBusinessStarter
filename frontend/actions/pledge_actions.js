import * as APIUtil from '../util/pledge_api_util';

export const RECEIVE_PLEDGE_ERRORS = "RECEIVE_PLEDGE_ERRORS";
export const RECEIVE_PLEDGE = "RECEIVE_PLEDGE";
export const REMOVE_PLEDGE = "REMOVE_PLEDGE";

export const receiveErrors = errors => ({
  type: RECEIVE_PLEDGE_ERRORS,
  errors
});

export const receivePledge = pledge => ({
  type: RECEIVE_PLEDGE,
  pledge
});

export const removePledge = pledge => ({
  type: pledge,
  pledge
});

export const createPledge = pledge => dispatch => {
  return APIUtil.createPledge(pledge).then(pledge => dispatch(receivePledge(pledge)),
  err => dispatch(receiveErrors(err.responseJSON)))
};

export const updatePledge = pledge => dispatch => {
  return APIUtil.updatePledge(pledge).then(pledge => dispatch(receivePledge(pledge)),
  err => dispatch(receiveErrors(err.responseJSON)))
};

export const deletePledge = id => dispatch => (
  APIUtil.deletePledge.then(pledge => dispatch(deletePledge(pledge)))
);
