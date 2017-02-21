import { connect } from 'react-redux';
import PledgeEdit from './pledge_edit';
import { updatePledge, fetchPledge } from '../../actions/pledge_actions';

const mapStateToProps = (state, ownProps) => {

  return({
    // project: state.project[ownProps.params.projectId],
    // currentUser: state.session.currentUser,
    errors: state.pledge.errors,
    pledge: state.pledge[ownProps.params.pledgeId]

    // state.project[14].pledges.filter(e => e.id === 4)
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return({
    updatePledge: pledge => dispatch(updatePledge(pledge)),
    fetchPledge: pledgeId => dispatch(fetchPledge(pledgeId))
  });
  // fetchPledge: pledge => dispatch(fetchPledge(pledge))
  //Can I pass the pledge down as params?

  // const formType = ownProps.location.pathname;
  //
  // const processForm = (formType === "/projects/new") ? createPledge : updatePledge;
  // return {
  //   // fetchProject: project => dispatch(fetchProject(project)),
  //   processForm: project => dispatch(processForm(project)),
  //   formType
  // };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeEdit);
