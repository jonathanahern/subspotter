import { connect } from 'react-redux';
import { fetchUserSpots } from '../../actions/spot_actions';
import Profile from './profile';

<<<<<<< HEAD
// const mapStateToProps = (state) => {
//   return {
//     spots: Object.values(state.spots.username),
//     currentUser: state.session.user
//   };
// };
=======
const mapStateToProps = (state) => {
  return {
    spots: Object.values(state.spots.user),
    currentUser: state.session.user
  };
};
>>>>>>> 5450377b358f5be6149c9e30a5e20d7feede621f

const mapDispatchToProps = dispatch => {
  return {
    fetchUserSpots: id => dispatch(fetchUserSpots(id))
  };
};

<<<<<<< HEAD
export default connect(null, mapDispatchToProps)(Profile);
=======
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
>>>>>>> 5450377b358f5be6149c9e30a5e20d7feede621f
