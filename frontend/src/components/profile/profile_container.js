import { connect } from 'react-redux';
import { fetchUserSpots } from '../../actions/spot_actions';
import Profile from './profile';

// const mapStateToProps = (state) => {
//   return {
//     spots: Object.values(state.spots.username),
//     currentUser: state.session.user
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    fetchUserSpots: id => dispatch(fetchUserSpots(id))
  };
};

export default connect(null, mapDispatchToProps)(Profile);
