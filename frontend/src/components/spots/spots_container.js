import { connect } from 'react-redux';
import { fetchAllSpots } from '../../actions/spot_actions';
import Spots from './spots';

const mapStateToProps = (state) => {
  return {
    spots: Object.values(state.spots.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllSpots: () => dispatch(fetchAllSpots())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Spots);