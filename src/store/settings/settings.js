import { createAction, handleActions } from 'redux-actions';

import { LANGUAGE_OPTIONS } from '../../constants/language-options';
import { TEMPERATURE_MEASUREMENTS } from '../../constants/temperature-measurements';
import { createRequestActionSuccessType } from '../../util/create-request-action-success-type/create-request-action-success-type';
import { createRequestThunk } from '../../util/create-request-thunk/create-request-thunk';
import { getAsyncStorageItem } from '../../services/async-storage/async-storage';

export const REDUCER_PREFIX = 'settings';
const REQUEST_PREFIX = `${REDUCER_PREFIX}/REQUEST`;

// action types
const REQUEST_SUCCESS = createRequestActionSuccessType(REQUEST_PREFIX);
const UPDATE_LANGUAGE_OPTION = `${REDUCER_PREFIX}/UPDATE_LANGUAGE_OPTION`;
const UPDATE_TEMPERATURE_MEASUREMENT = `${REDUCER_PREFIX}/UPDATE_TEMPERATURE_MEASUREMENT`;

// action creators
export const updateSettingsLanguageOption = createAction(UPDATE_LANGUAGE_OPTION);
export const updateSettingsTemperatureMeasurement = createAction(UPDATE_TEMPERATURE_MEASUREMENT);

// default state
const DEFAULT_STATE = {
  languageOption: LANGUAGE_OPTIONS.EXPLICIT,
  temperatureMeasurement: TEMPERATURE_MEASUREMENTS.FAHRENHEIT
};

// reducer
export const settingsReducer = handleActions(
  {
    [REQUEST_SUCCESS]: (state, { payload }) => payload || state,
    [UPDATE_LANGUAGE_OPTION]: (state, { payload: languageOption }) => ({
      ...state,
      languageOption
    }),
    [UPDATE_TEMPERATURE_MEASUREMENT]: (state, { payload: temperatureMeasurement }) => ({
      ...state,
      temperatureMeasurement
    })
  },
  DEFAULT_STATE
);

// selectors
export const selectSettings = (state = {}) => state[REDUCER_PREFIX] || DEFAULT_STATE;
export const selectSettingsLanguageOption = state =>
  selectSettings(state).languageOption || DEFAULT_STATE.languageOption;
export const selectSettingsTemperatureMeasurement = state =>
  selectSettings(state).temperatureMeasurement || DEFAULT_STATE.temperatureMeasurement;

// thunks
export const requestSettings = () => (dispatch, getState) => {
  const requestFunction = () => getAsyncStorageItem(REDUCER_PREFIX);
  return createRequestThunk(requestFunction, REQUEST_PREFIX)(dispatch, getState);
};
