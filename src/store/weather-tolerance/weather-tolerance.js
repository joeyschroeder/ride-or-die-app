import { createRequestThunk } from '../../util/create-request-thunk/create-request-thunk';
import { getAsyncStorageItem } from '../../services/async-storage/async-storage';
import { getNumberOrDefault } from '../../util/get-number-or-default/get-number-or-default';
import { WEATHER_TOLERANCE_DEFAULT } from '../../constants/weather-tolerance-default';
import { createRequestReducer } from '../../util/create-request-reducer/create-request-reducer';

export const REDUCER_PREFIX = 'weather-tolerance';
const REQUEST_PREFIX = `${REDUCER_PREFIX}/REQUEST`;

// default state
const DEFAULT_STATE = WEATHER_TOLERANCE_DEFAULT;

// reducer
export const weatherToleranceReducer = createRequestReducer(REQUEST_PREFIX, DEFAULT_STATE);

// selectors
export const selectWeatherTolerance = (state = {}) => state[REDUCER_PREFIX] || DEFAULT_STATE;
export const selectWeatherToleranceRainToleranceMode = state =>
  selectWeatherTolerance(state).rainToleranceMode || DEFAULT_STATE.rainToleranceMode;
export const selectWeatherToleranceTemperatureMinimum = state =>
  getNumberOrDefault(selectWeatherTolerance(state).temperatureMinimum, DEFAULT_STATE.temperatureMinimum);
export const selectWeatherToleranceWindSpeedMaximum = state =>
  getNumberOrDefault(selectWeatherTolerance(state).windSpeedMaximum, DEFAULT_STATE.windSpeedMaximum);

// thunks
export const requestWeatherTolerance = () => (dispatch, getState) => {
  const requestFunction = () => getAsyncStorageItem(REDUCER_PREFIX);
  return createRequestThunk(requestFunction, REQUEST_PREFIX)(dispatch, getState);
};
