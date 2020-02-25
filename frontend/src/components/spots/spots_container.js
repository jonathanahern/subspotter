import { connect } from 'react-redux';
import { fetchAllSpots } from '../../actions/spot_actions';
import Spots from './spots';

// const mapStateToProps = (state) => {
//   return {
//     spots: Object.values(state.spots.all)
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    fetchAllSpots: () => dispatch(fetchAllSpots())
  };
};

<<<<<<< HEAD
export default connect(null, mapDispatchToProps)(Spots);
=======
export default connect(null, mapDispatchToProps)(Spots);
>>>>>>> clean up merge conflicts
