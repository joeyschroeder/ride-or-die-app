import { createAction, handleActions } from 'redux-actions';

import { createRequestThunk } from '../../util/create-request-thunk/create-request-thunk';
import { getAsyncStorageItem, setAsyncStorageItem } from '../../services/async-storage/async-storage';
import { getNumberOrDefault } from '../../util/get-number-or-default/get-number-or-default';
import { WEATHER_TOLERANCE_DEFAULT } from '../../constants/weather-tolerance-default';
import { REDUCER_PREFIX as WEATHER_TOLERANCE_REDUCER_PREFIX } from '../weather-tolerance/weather-tolerance';

export const REDUCER_PREFIX = 'weather-tolerance-editable';
const REQUEST_PREFIX = `${REDUCER_PREFIX}/REQUEST`;

// action types
const UPDATE = `${REDUCER_PREFIX}/UPDATE`;
const UPDATE_RAIN_TOLERANCE_MODE = `${REDUCER_PREFIX}/UPDATE_RAIN_TOLERANCE_MODE`;
const UPDATE_TEMPERATURE_MINIMUM = `${REDUCER_PREFIX}/UPDATE_TEMPERATURE_MINIMUM`;
const UPDATE_WIND_SPEED_MAXIMUM = `${REDUCER_PREFIX}/UPDATE_WIND_SPEED_MAXIMUM`;

// action creators
export const updateWeatherToleranceEditable = createAction(UPDATE);
export const updateWeatherToleranceEditableRainToleranceMode = createAction(UPDATE_RAIN_TOLERANCE_MODE);
export const updateWeatherToleranceEditableTemperatureMinimum = createAction(UPDATE_TEMPERATURE_MINIMUM);
export const updateWeatherToleranceEditableWindSpeedMaximum = createAction(UPDATE_WIND_SPEED_MAXIMUM);

// default state
const DEFAULT_STATE = WEATHER_TOLERANCE_DEFAULT;

// reducer
export const weatherToleranceEditableReducer = handleActions(
  {
    [UPDATE]: (state, { payload }) => payload || DEFAULT_STATE,
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
export const selectWeatherToleranceEditable = (state = {}) => state[REDUCER_PREFIX] || DEFAULT_STATE;
export const selectWeatherToleranceEditableRainToleranceMode = state =>
  selectWeatherToleranceEditable(state).rainToleranceMode || DEFAULT_STATE.rainToleranceMode;
export const selectWeatherToleranceEditableTemperatureMinimum = state =>
  getNumberOrDefault(selectWeatherToleranceEditable(state).temperatureMinimum, DEFAULT_STATE.temperatureMinimum);
export const selectWeatherToleranceEditableWindSpeedMaximum = state =>
  getNumberOrDefault(selectWeatherToleranceEditable(state).windSpeedMaximum, DEFAULT_STATE.windSpeedMaximum);

// thunks
export const requestWeatherTolerance = () => (dispatch, getState) => {
  const requestFunction = () => getAsyncStorageItem(REDUCER_PREFIX);
  return createRequestThunk(requestFunction, REQUEST_PREFIX)(dispatch, getState);
};

export const requestSaveWeatherToleranceEditable = () => (dispatch, getState) => {
  const state = getState();
  const value = selectWeatherToleranceEditable(state);

  const requestFunction = () => setAsyncStorageItem(WEATHER_TOLERANCE_REDUCER_PREFIX, value);
  return createRequestThunk(requestFunction, REQUEST_PREFIX)(dispatch, getState);
};
