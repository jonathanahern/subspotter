import { connect } from 'react-redux';
import { composeSpot } from '../../actions/spot_actions';
import SpotForm from './spot_form';

const mapStateToProps = (state) => {
  debugger
  return {
    currentUser: state.session.user,
    newSpot: state.spots.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeSpot: payload => dispatch(composeSpot(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpotForm);
