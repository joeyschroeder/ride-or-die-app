import { REDUCER_PREFIX as CURRENT_WEATHER, currentWeatherReducer } from './current-weather/current-weather';
import { REDUCER_PREFIX as LOCATION, locationReducer } from './location/location';
import { REDUCER_PREFIX as REQUEST_TRACKING, requestTrackingReducer } from './request-tracking/request-tracking';
import { REDUCER_PREFIX as SAMPLE, sampleReducer } from './sample/sample';
import { REDUCER_PREFIX as SETTINGS, settingsReducer } from './settings/settings';
import { REDUCER_PREFIX as SETTINGS_EDITABLE, settingsEditableReducer } from './settings-editable/settings-editable';
import { REDUCER_PREFIX as WEATHER_TOLERANCE, weatherToleranceReducer } from './weather-tolerance/weather-tolerance';
import {
  REDUCER_PREFIX as WEATHER_TOLERANCE_EDITABLE,
  weatherToleranceEditableReducer
} from './weather-tolerance-editable/weather-tolerance-editable';

import { combineReducers } from 'redux';

export const reducers = combineReducers({
  [CURRENT_WEATHER]: currentWeatherReducer,
  [LOCATION]: locationReducer,
  [REQUEST_TRACKING]: requestTrackingReducer,
  [SAMPLE]: sampleReducer,
  [SETTINGS]: settingsReducer,
  [SETTINGS_EDITABLE]: settingsEditableReducer,
  [WEATHER_TOLERANCE]: weatherToleranceReducer,
  [WEATHER_TOLERANCE_EDITABLE]: weatherToleranceEditableReducer
});
