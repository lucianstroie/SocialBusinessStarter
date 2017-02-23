import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProject } from '../../actions/project_actions';
import { fetchUser } from '../../actions/session_actions';
import { createGiving } from '../../actions/giving_actions';

const mapStateToProps = (state, ownProps) => {

  return({
  project: state.project[ownProps.params.projectId],
  currentUser: state.session.currentUser,
  giving: state.giving
});};

const mapDispatchToProps = dispatch => {

  return ({
  fetchProject: id => dispatch(fetchProject(id)),
  fetchUser: id => dispatch(fetchUser(id)),
  createGiving: giving => dispatch(createGiving(giving))
});};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow);
