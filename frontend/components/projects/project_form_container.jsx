import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { fetchProject, updateProject, createProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => ({
  project: state.projects[ownProps.params.projectId],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchProject: id => dispatch(fetchProject(id)),
  updateProject: project => dispatch(updateProject(project)),
  createProject: project => dispatch(createProject(project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
