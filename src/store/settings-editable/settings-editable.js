import { createAction, handleActions } from 'redux-actions';
import { SETTINGS_DEFAULT } from '../../constants/settings-default';
import { createRequestThunk } from '../../util/create-request-thunk/create-request-thunk';
import { setAsyncStorageItem } from '../../services/async-storage/async-storage';
import { REDUCER_PREFIX as SETTINGS_REDUCER_PREFIX } from '../settings/settings';

export const REDUCER_PREFIX = 'settings-editable';
const REQUEST_PREFIX = `${REDUCER_PREFIX}/REQUEST`;

// action types
const UPDATE = `${REDUCER_PREFIX}/UPDATE`;
const UPDATE_LANGUAGE_OPTION = `${REDUCER_PREFIX}/UPDATE_LANGUAGE_OPTION`;
const UPDATE_TEMPERATURE_MEASUREMENT = `${REDUCER_PREFIX}/UPDATE_TEMPERATURE_MEASUREMENT`;

// action creators
export const updateSettingsEditableLanguageOption = createAction(UPDATE_LANGUAGE_OPTION);
export const updateSettingsEditableTemperatureMeasurement = createAction(UPDATE_TEMPERATURE_MEASUREMENT);
export const updateSettingsEditable = createAction(UPDATE);

// default state
const DEFAULT_STATE = SETTINGS_DEFAULT;

// reducer
export const settingsEditableReducer = handleActions(
  {
    [UPDATE]: (state, { payload }) => payload || DEFAULT_STATE,
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
export const selectSettingsEditable = (state = {}) => state[REDUCER_PREFIX] || DEFAULT_STATE;
export const selectSettingsEditableLanguageOption = state =>
  selectSettingsEditable(state).languageOption || DEFAULT_STATE.languageOption;
export const selectSettingsEditableTemperatureMeasurement = state =>
  selectSettingsEditable(state).temperatureMeasurement || DEFAULT_STATE.temperatureMeasurement;

// thunks
export const requestSaveSettingsEditable = () => (dispatch, getState) => {
  const state = getState();
  const value = selectSettingsEditable(state);

  const requestFunction = () => setAsyncStorageItem(SETTINGS_REDUCER_PREFIX, value);
  return createRequestThunk(requestFunction, REQUEST_PREFIX)(dispatch, getState);
};
