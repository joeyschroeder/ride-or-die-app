import { REQUEST_ACTION_TYPES_SUFFIXES } from '../../constants/request-action-types-suffixes';
import { REQUEST_TRACKING_STATES } from '../../constants/request-tracking-states';

const SUFFIX_TO_STATE_TRANSLATIONS = {
  [REQUEST_ACTION_TYPES_SUFFIXES.FAILURE]: REQUEST_TRACKING_STATES.FAILURE,
  [REQUEST_ACTION_TYPES_SUFFIXES.START]: REQUEST_TRACKING_STATES.RUNNING,
  [REQUEST_ACTION_TYPES_SUFFIXES.SUCCESS]: REQUEST_TRACKING_STATES.SUCCESS
};

const suffixRegexPattern = `(.*)_(${REQUEST_ACTION_TYPES_SUFFIXES.START}|${REQUEST_ACTION_TYPES_SUFFIXES.SUCCESS}|${REQUEST_ACTION_TYPES_SUFFIXES.FAILURE})`;
const suffixRegex = new RegExp(suffixRegexPattern);

export const REDUCER_PREFIX = 'request-tracking';

// default state
const DEFAULT_STATE = {};

// reducer
export const requestTrackingReducer = (state = {}, action = {}) => {
  const { type } = action;
  const actionTypeMatches = suffixRegex.exec(type);

  if (!actionTypeMatches) return state;

  const [, requestPrefix, requestSuffix] = actionTypeMatches;
  const newState = SUFFIX_TO_STATE_TRANSLATIONS[requestSuffix] || REQUEST_TRACKING_STATES.UNTRACKED;

  return {
    ...state,
    [requestPrefix]: newState
  };
};

// selectors
export const selectRequestTracking = (state = {}) => state[REDUCER_PREFIX] || DEFAULT_STATE;
export const selectRequestTrackingByRequestPrefix = (state, requestPrefix) =>
  selectRequestTracking(state)[requestPrefix] || REQUEST_TRACKING_STATES.UNTRACKED;

export const selectRequestIsRunning = (state, requestPrefix) =>
  selectRequestTrackingByRequestPrefix(state, requestPrefix) === REQUEST_TRACKING_STATES.RUNNING;
export const selectRequestHasSucceeded = (state, requestPrefix) =>
  selectRequestTrackingByRequestPrefix(state, requestPrefix) === REQUEST_TRACKING_STATES.SUCCESS;

export const selectRequestHasFailed = (state, requestPrefix) =>
  selectRequestTrackingByRequestPrefix(state, requestPrefix) === REQUEST_TRACKING_STATES.FAILURE;

export const selectRequestsAreRunning = (state, requestPrefixes = []) =>
  requestPrefixes.some(requestKey => selectRequestIsRunning(state, requestKey));
export const selectRequestsHaveAllSucceeded = (state, requestPrefixes = []) =>
  requestPrefixes.every(requestKey => selectRequestHasSucceeded(state, requestKey));

// thunks
