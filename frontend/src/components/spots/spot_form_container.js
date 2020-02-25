import { connect } from 'react-redux';
import { composeSpot } from '../../actions/spot_actions';
import SpotForm from './spot_form';

const mapStateToProps = (state) => {
<<<<<<< HEAD
  debugger
=======
>>>>>>> 5450377b358f5be6149c9e30a5e20d7feede621f
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

<<<<<<< HEAD
export default connect(null, mapDispatchToProps)(SpotForm);
=======
export default connect(mapStateToProps, mapDispatchToProps)(SpotForm);
>>>>>>> 5450377b358f5be6149c9e30a5e20d7feede621f
