import { combineReducers } from 'redux';
import { locationReducer, REDUCER_PREFIX as LOCATION } from './location/location';
import { currentWeatherReducer, REDUCER_PREFIX as CURRENT_WEATHER } from './current-weather/current-weather';
import { requestTrackingReducer, REDUCER_PREFIX as REQUEST_TRACKING } from './request-tracking/request-tracking';

export const reducers = combineReducers({
  [CURRENT_WEATHER]: currentWeatherReducer,
  [LOCATION]: locationReducer,
  [REQUEST_TRACKING]: requestTrackingReducer
});
