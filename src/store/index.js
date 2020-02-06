import { combineReducers } from 'redux';
import { locationReducer, REDUCER_PREFIX as LOCATION } from './location/location';

export const reducers = combineReducers({
  [LOCATION]: locationReducer
});
