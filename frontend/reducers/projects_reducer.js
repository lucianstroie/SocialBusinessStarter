import {
  RECEIVE_ERRORS,
  RECEIVE_ALL_PROJECTS
   } from '../actions/project_actions';
import merge from 'lodash/merge';

const ProjectsReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, oldState, {
        errors
      });
    case RECEIVE_ALL_PROJECTS:
      return merge({}, action.projects);
    default:
      return oldState;
  }
};

export default ProjectsReducer;
