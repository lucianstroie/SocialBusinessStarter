import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProject } from '../../actions/project_actions';
import { fetchUser } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  
  return({
  project: state.project[ownProps.params.projectId]
});};

const mapDispatchToProps = dispatch => {

  return ({
  fetchProject: id => dispatch(fetchProject(id)),
  fetchUser: id => dispatch(fetchUser(id))
});};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow);
