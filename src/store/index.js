import { combineReducers } from 'redux';
import { locationReducer, REDUCER_PREFIX as LOCATION } from './location/location';
import { currentWeatherReducer, REDUCER_PREFIX as CURRENT_WEATHER } from './current-weather/current-weather';

export const reducers = combineReducers({
  [CURRENT_WEATHER]: currentWeatherReducer,
  [LOCATION]: locationReducer
});
