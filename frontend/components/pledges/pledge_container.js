import { connect } from 'react-redux';
import PledgeItem from './pledge_item';

const  mapStateToProps = state => ({
 pledge: state.pledge
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeItem);
