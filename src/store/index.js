import { REDUCER_PREFIX as CURRENT_WEATHER, currentWeatherReducer } from './current-weather/current-weather';
import { REDUCER_PREFIX as LOCATION, locationReducer } from './location/location';
import { REDUCER_PREFIX as REQUEST_TRACKING, requestTrackingReducer } from './request-tracking/request-tracking';
import { REDUCER_PREFIX as SETTINGS, settingsReducer } from './settings/settings';

import { combineReducers } from 'redux';

export const reducers = combineReducers({
  [CURRENT_WEATHER]: currentWeatherReducer,
  [LOCATION]: locationReducer,
  [REQUEST_TRACKING]: requestTrackingReducer,
  [SETTINGS]: settingsReducer
});
