import { connect } from 'react-redux';
import PledgeItem from './pledge';
import { withRouter } from 'react-router';

//may never be used!

const  mapStateToProps = state => {
 return({
   pledge: state.pledge
 });
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PledgeItem));
