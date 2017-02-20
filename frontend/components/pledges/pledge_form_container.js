import { connect } from 'react-redux';
import PledgeForm from './pledge_form';
import { createPledge, updatePledge } from '../../actions/pledge_actions';

const mapStateToProps = (state, ownProps) => {

  return({
    // project: state.project[ownProps.params.projectId],
    // currentUser: state.session.currentUser,
    errors: state.pledge.errors,
    pledge: state.pledge
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  
  return({

  });
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
)(PledgeForm);
