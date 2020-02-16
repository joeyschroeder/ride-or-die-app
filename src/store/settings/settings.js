import { createAction, handleActions } from 'redux-actions';

import { LANGUAGE_OPTIONS } from '../../constants/language-options';
import { RAIN_TOLERANCE_MODES } from '../../constants/rain-tolerance-modes';
import { TEMPERATURE_MEASUREMENTS } from '../../constants/temperature-measurements';
import { createRequestActionSuccessType } from '../../util/create-request-action-success-type/create-request-action-success-type';
import { createRequestThunk } from '../../util/create-request-thunk/create-request-thunk';
import { getAsyncStorageItem } from '../../services/async-storage/async-storage';

export const REDUCER_PREFIX = 'settings';
const REQUEST_PREFIX = `${REDUCER_PREFIX}/REQUEST`;

// action types
const REQUEST_SUCCESS = createRequestActionSuccessType(REQUEST_PREFIX);
const UPDATE_LANGUAGE_OPTION = `${REDUCER_PREFIX}/UPDATE_LANGUAGE_OPTION`;
const UPDATE_RAIN_TOLERANCE_MODE = `${REDUCER_PREFIX}/UPDATE_RAIN_TOLERANCE_MODE`;
const UPDATE_TEMPERATURE_MEASUREMENT = `${REDUCER_PREFIX}/UPDATE_TEMPERATURE_MEASUREMENT`;
const UPDATE_TEMPERATURE_MINIMUM = `${REDUCER_PREFIX}/UPDATE_TEMPERATURE_MINIMUM`;

// action creators
export const updateSettingsLanguageOption = createAction(UPDATE_LANGUAGE_OPTION);
export const updateSettingsRainToleranceMode = createAction(UPDATE_RAIN_TOLERANCE_MODE);
export const updateSettingsTemperatureMeasurement = createAction(UPDATE_TEMPERATURE_MEASUREMENT);
export const updateSettingsTemperatureMinimum = createAction(UPDATE_TEMPERATURE_MINIMUM);

// default state
const DEFAULT_STATE = {
  languageOption: LANGUAGE_OPTIONS.EXPLICIT,
  rainToleranceMode: RAIN_TOLERANCE_MODES.DRY,
  temperatureMeasurement: TEMPERATURE_MEASUREMENTS.FAHRENHEIT,
  temperatureMinimum: 273.15 // freezing temperature in Kelvin
};

// reducer
export const settingsReducer = handleActions(
  {
    [REQUEST_SUCCESS]: (state, { payload }) => payload || state,
    [UPDATE_LANGUAGE_OPTION]: (state, { payload: languageOption }) => ({
      ...state,
      languageOption
    }),
    [UPDATE_RAIN_TOLERANCE_MODE]: (state, { payload: rainToleranceMode }) => ({
      ...state,
      rainToleranceMode
    }),
    [UPDATE_TEMPERATURE_MEASUREMENT]: (state, { payload: temperatureMeasurement }) => ({
      ...state,
      temperatureMeasurement
    }),
    [UPDATE_TEMPERATURE_MINIMUM]: (state, { payload: temperatureMinimum }) => ({
      ...state,
      temperatureMinimum
    })
  },
  DEFAULT_STATE
);

// selectors
export const selectSettings = (state = {}) => state[REDUCER_PREFIX] || DEFAULT_STATE;
export const selectSettingsLanguageOption = state =>
  selectSettings(state).languageOption || DEFAULT_STATE.languageOption;
export const selectSettingsRainToleranceMode = state =>
  selectSettings(state).rainToleranceMode || DEFAULT_STATE.rainToleranceMode;
export const selectSettingsTemperatureMeasurement = state =>
  selectSettings(state).temperatureMeasurement || DEFAULT_STATE.temperatureMeasurement;
export const selectSettingsTemperatureMinimum = state =>
  selectSettings(state).temperatureMinimum || DEFAULT_STATE.temperatureMinimum;

// thunks
export const requestSettings = () => (dispatch, getState) => {
  const requestFunction = () => getAsyncStorageItem(REDUCER_PREFIX);
  return createRequestThunk(requestFunction, REQUEST_PREFIX)(dispatch, getState);
};
