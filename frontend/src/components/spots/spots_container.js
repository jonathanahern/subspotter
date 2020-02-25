import { connect } from 'react-redux';
import { fetchAllSpots } from '../../actions/spot_actions';
import Spots from './spots';

<<<<<<< HEAD
// const mapStateToProps = (state) => {
//   return {
//     spots: Object.values(state.spots.all)
//   };
// };
=======
const mapStateToProps = (state) => {
  return {
    spots: Object.values(state.spots.all)
  };
};
>>>>>>> 5450377b358f5be6149c9e30a5e20d7feede621f

const mapDispatchToProps = dispatch => {
  return {
    fetchAllSpots: () => dispatch(fetchAllSpots())
  };
};

<<<<<<< HEAD
export default connect(null, mapDispatchToProps)(Spots);
=======
export default connect(mapStateToProps, mapDispatchToProps)(Spots);
>>>>>>> 5450377b358f5be6149c9e30a5e20d7feede621f
