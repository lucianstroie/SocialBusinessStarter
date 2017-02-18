import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { fetchProject, updateProject, createProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {

  return({
    project: state.project[ownProps.params.projectId],
    currentUser: state.session.currentUser,
    errors: state.project.errors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname;

  const processForm = (formType === "/projects/new") ? createProject : updateProject;
  return {
    fetchProject: project => dispatch(fetchProject(project)),
    processForm: project => dispatch(processForm(project)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
