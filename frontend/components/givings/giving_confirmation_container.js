import { connect } from 'react-redux';
import GivingConfirmation from './project_show';
import { fetchPledge } from '../../actions/pledge_actions';
import { fetchUser } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {

  return({

});};

const mapDispatchToProps = dispatch => {

  return ({
  fetchPledge: id => dispatch(fetchPledge(id)),
  fetchUser: id => dispatch(fetchUser(id))
});};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GivingConfirmation);
