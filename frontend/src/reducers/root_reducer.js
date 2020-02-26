import { combineReducers } from 'redux';
import session from './session_reducer';
import spots from './spots_reducer'
import errors from './errors_reducer';

const RootReducer = combineReducers({
  session,
  spots, 
  errors
});

export default RootReducer;