import {
  RECEIVE_PROJECT_ERRORS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT } from '../actions/project_actions';
import merge from 'lodash/merge';

const _nullProject = Object.freeze({
  project: {},
  errors: []
});

const ProjectReducer = (oldState = _nullProject, action) => {
  switch (action.type) {
    case RECEIVE_PROJECT_ERRORS:
      const errors = action.errors;
      return merge({}, oldState, {
        errors
      });
    case RECEIVE_PROJECT:
      
      return merge({}, oldState, {[action.project.id]: action.project});
    case REMOVE_PROJECT:
      let newState = merge({}, oldState);
      delete newState[action.project.id];
      return newState;


    default:
      return oldState;
  }
};

export default ProjectReducer;
