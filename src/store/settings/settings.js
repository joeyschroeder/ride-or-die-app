import { TEMPERATURE_MEASUREMENTS } from '../../constants/temperature-measurements';
import { createRequestReducer } from '../../util/create-request-reducer/create-request-reducer';
import { createRequestThunk } from '../../util/create-request-thunk/create-request-thunk';
import { getLocation } from '../../services/location/location';

export const REDUCER_PREFIX = 'settings';
const REQUEST_PREFIX = `${REDUCER_PREFIX}/REQUEST`;

// default state
const DEFAULT_STATE = {
  temperatureMeasurement: TEMPERATURE_MEASUREMENTS.FAHRENHEIT
};

// reducer
export const settingsReducer = createRequestReducer(REQUEST_PREFIX, DEFAULT_STATE);

// selectors
export const selectSettings = (state = {}) => state[REDUCER_PREFIX] || DEFAULT_STATE;
export const selectSettingsTemperatureMeasurement = state =>
  selectSettings(state).temperatureMeasurement || DEFAULT_STATE.temperatureMeasurement;

// thunks
export const requestSettings = () => (dispatch, getState) => {
  return createRequestThunk(getLocation, REQUEST_PREFIX)(dispatch, getState);
};
