import { createAction, handleActions } from 'redux-actions';

import { RAIN_TOLERANCE_MODES } from '../../constants/rain-tolerance-modes';
import { createRequestActionSuccessType } from '../../util/create-request-action-success-type/create-request-action-success-type';
import { createRequestThunk } from '../../util/create-request-thunk/create-request-thunk';
import { getAsyncStorageItem } from '../../services/async-storage/async-storage';

export const REDUCER_PREFIX = 'weather-tolerance';
const REQUEST_PREFIX = `${REDUCER_PREFIX}/REQUEST`;

// action types
const REQUEST_SUCCESS = createRequestActionSuccessType(REQUEST_PREFIX);
const UPDATE_RAIN_TOLERANCE_MODE = `${REDUCER_PREFIX}/UPDATE_RAIN_TOLERANCE_MODE`;
const UPDATE_TEMPERATURE_MINIMUM = `${REDUCER_PREFIX}/UPDATE_TEMPERATURE_MINIMUM`;
const UPDATE_WIND_SPEED_MAXIMUM = `${REDUCER_PREFIX}/UPDATE_WIND_SPEED_MAXIMUM`;

// action creators
export const updateWeatherToleranceRainToleranceMode = createAction(UPDATE_RAIN_TOLERANCE_MODE);
export const updateWeatherToleranceTemperatureMinimum = createAction(UPDATE_TEMPERATURE_MINIMUM);
export const updateWeatherToleranceWindSpeedMaximum = createAction(UPDATE_WIND_SPEED_MAXIMUM);

// default state
const DEFAULT_STATE = {
  rainToleranceMode: RAIN_TOLERANCE_MODES.DRY,
  temperatureMinimum: 283.15, // 50 degrees Fahrenheit in Kelvin
  windSpeedMaximum: 11.176 // 25 miles/hour in meters/sec
};

// reducer
export const weatherToleranceReducer = handleActions(
  {
    [REQUEST_SUCCESS]: (state, { payload }) => payload || state,
    [UPDATE_RAIN_TOLERANCE_MODE]: (state, { payload: rainToleranceMode }) => ({
      ...state,
      rainToleranceMode
    }),
    [UPDATE_TEMPERATURE_MINIMUM]: (state, { payload: temperatureMinimum }) => ({
      ...state,
      temperatureMinimum
    }),
    [UPDATE_WIND_SPEED_MAXIMUM]: (state, { payload: windSpeedMaximum }) => ({
      ...state,
      windSpeedMaximum
    })
  },
  DEFAULT_STATE
);

// selectors
export const selectWeatherTolerance = (state = {}) => state[REDUCER_PREFIX] || DEFAULT_STATE;
export const selectWeatherToleranceRainToleranceMode = state =>
  selectWeatherTolerance(state).rainToleranceMode || DEFAULT_STATE.rainToleranceMode;
export const selectWeatherToleranceTemperatureMinimum = state =>
  selectWeatherTolerance(state).temperatureMinimum || DEFAULT_STATE.temperatureMinimum;
export const selectWeatherToleranceWindSpeedMaximum = state =>
  selectWeatherTolerance(state).windSpeedMaximum || DEFAULT_STATE.windSpeedMaximum;

// thunks
export const requestWeatherTolerance = () => (dispatch, getState) => {
  const requestFunction = () => getAsyncStorageItem(REDUCER_PREFIX);
  return createRequestThunk(requestFunction, REQUEST_PREFIX)(dispatch, getState);
};
