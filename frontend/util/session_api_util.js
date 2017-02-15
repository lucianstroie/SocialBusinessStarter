import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  });
};

export const signup = (formData) => {
  return $.ajax({
    method: 'POST',
    url: '/api/user',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};

export const logout = () => {
  return $.ajax({
    method: 'delete',
    url: '/api/session'
  });
};
