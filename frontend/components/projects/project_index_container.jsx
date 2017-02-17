import { connect } from 'react-redux';
import ProjectIndex from './project_index';
import { fetchProjects } from '../../actions/project_actions';

const mapStateToProps = state => {
  
  return ({
  projects: Object.keys(state.projects).map(id => state.projects[id])
});
};
const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);
