import { createRequestThunk } from '../../util/create-request-thunk/create-request-thunk';
import { getAsyncStorageItem } from '../../services/async-storage/async-storage';
import { createRequestReducer } from '../../util/create-request-reducer/create-request-reducer';
import { SETTINGS_DEFAULT } from '../../constants/settings-default';

export const REDUCER_PREFIX = 'settings';
const REQUEST_PREFIX = `${REDUCER_PREFIX}/REQUEST`;

// default state
const DEFAULT_STATE = SETTINGS_DEFAULT;

// reducer
export const settingsReducer = createRequestReducer(REQUEST_PREFIX, DEFAULT_STATE);

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
