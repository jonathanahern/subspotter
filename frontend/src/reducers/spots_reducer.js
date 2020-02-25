import { RECEIVE_ALL_SPOTS, RECEIVE_SPOT, RECEIVE_USER_SPOTS, RECEIVE_NEW_SPOT} from '../actions/spot_actions';

const SpotsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {

    case RECEIVE_ALL_SPOTS:
      newState.all = action.spots.data;
      return newState;

    case RECEIVE_SPOT:
      newState.all = action.spot.data;

    case RECEIVE_USER_SPOTS:
      newState.user = action.user.data;
      return newState;

    case RECEIVE_NEW_SPOT:
      newState.new = action.spot.data;
      return newState;

    default:
      return state;
  }
};

export default SpotsReducer;