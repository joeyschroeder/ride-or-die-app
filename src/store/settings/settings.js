import { createAction, handleActions } from 'redux-actions';

import { TEMPERATURE_MEASUREMENTS } from '../../constants/temperature-measurements';
import { createRequestActionSuccessType } from '../../util/create-request-action-success-type/create-request-action-success-type';
import { createRequestThunk } from '../../util/create-request-thunk/create-request-thunk';
import { getAsyncStorageItem } from '../../services/async-storage/async-storage';

export const REDUCER_PREFIX = 'settings';
const REQUEST_PREFIX = `${REDUCER_PREFIX}/REQUEST`;

// action types
const REQUEST_SUCCESS = createRequestActionSuccessType(REQUEST_PREFIX);
const UPDATE_TEMPERATURE_MEASUREMENT = `${REDUCER_PREFIX}/UPDATE`;

// action creators
export const updateSettingsTemperatureMeasurement = createAction(UPDATE_TEMPERATURE_MEASUREMENT);

// default state
const DEFAULT_STATE = {
  temperatureMeasurement: TEMPERATURE_MEASUREMENTS.FAHRENHEIT
};

// reducer
export const settingsReducer = handleActions(
  {
    [REQUEST_SUCCESS]: (state, { payload }) => payload || state,
    [UPDATE_TEMPERATURE_MEASUREMENT]: (state, { payload: temperatureMeasurement }) => ({
      ...state,
      temperatureMeasurement
    })
  },
  DEFAULT_STATE
);

// selectors
export const selectSettings = (state = {}) => state[REDUCER_PREFIX] || DEFAULT_STATE;
export const selectSettingsTemperatureMeasurement = state =>
  selectSettings(state).temperatureMeasurement || DEFAULT_STATE.temperatureMeasurement;

// thunks
export const requestSettings = () => (dispatch, getState) => {
  const requestFunction = () => getAsyncStorageItem(REDUCER_PREFIX);
  return createRequestThunk(requestFunction, REQUEST_PREFIX)(dispatch, getState);
};
