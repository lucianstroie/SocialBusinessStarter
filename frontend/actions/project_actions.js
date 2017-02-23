import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";
export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";


export const receiveErrors = errors => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
});

export const receiveProjects = projects => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

export const removeProject = project => ({
  type: project,
  project
});

export const fetchProjects = () => dispatch => (
  APIUtil.fetchProjects().then(projects => dispatch(receiveProjects(projects)))
);

export const fetchProject = id => dispatch => (
  APIUtil.fetchProject(id).then(project => dispatch(receiveProject(project)))
);

export const createProject = project => dispatch => {

  return APIUtil.createProject(project).then(project => dispatch(receiveProject(project)),
  err => dispatch(receiveErrors(err.responseJSON)))
};

export const updateProject = project => dispatch => {

  return APIUtil.updateProject(project).then(project => dispatch(receiveProject(project)),
  err => dispatch(receiveErrors(err.responseJSON)))
};

export const deleteProject = id => dispatch => (
  APIUtil.deleteProject(id).then(project => dispatch(removeProject(project)))
);
