import { getAllSpots, getSpot, getUserSpots, postSpot } from '../util/spots_api_util';

export const RECEIVE_ALL_SPOTS = 'RECEIVE_ALL_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';
export const RECEIVE_USER_SPOTS = 'RECEIVE_USER_SPOTS';
export const RECEIVE_NEW_SPOT = 'RECEIVE_NEW_SPOT';

export const receiveAllSpots = spots => ({
  type: RECEIVE_ALL_SPOTS,
  spots
});

export const receiveSpot = spot => ({
  type: RECEIVE_SPOT, 
  spot
});

export const receiveUserSpots = spots => ({
  type: RECEIVE_USER_SPOTS, 
  spots 
});

export const receiveNewSpot = spot => ({
  type: RECEIVE_NEW_SPOT, 
  spot 
});

export const fetchAllSpots = () => dispatch => (
  getAllSpots().then(spots => dispatch(receiveAllSpots(spots)))
  .catch(err => console.log(err))
);

export const fetchSpot = id => dispatch => (
  getSpot(id).then(spot => dispatch(receiveSpot(spot)))
  .catch(err => console.log(err))
);

export const fetchUserSpots = id => dispatch => (
  getUserSpots(id).then(spots => dispatch(receiveUserSpots(spots)))
  .catch(err => console.log(err))
);

export const composeSpot = payload => dispatch => (
  postSpot(payload).then(spot => dispatch(receiveNewSpot(spot)))
  .catch(err => console.log(err))
);