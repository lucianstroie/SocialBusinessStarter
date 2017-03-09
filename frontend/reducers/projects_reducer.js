import {
  RECEIVE_PROJECT_ERRORS,
  RECEIVE_ALL_PROJECTS
   } from '../actions/project_actions';
import merge from 'lodash/merge';

const _nullProjects = Object.freeze({});

const ProjectsReducer = (oldState = _nullProjects, action) => {
  switch (action.type) {
    case RECEIVE_PROJECT_ERRORS:
      return merge({}, oldState);
    case RECEIVE_ALL_PROJECTS:
      return merge({}, action.projects);
    default:
      return oldState;
  }
};

export default ProjectsReducer;
