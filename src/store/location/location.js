import { createRequestReducer } from '../../util/create-request-reducer/create-request-reducer';
import { createRequestThunk } from '../../util/create-request-thunk/create-request-thunk';
import { getLocation } from '../../services/location/location';

export const REDUCER_PREFIX = 'location';
const REQUEST_PREFIX = `${REDUCER_PREFIX}/REQUEST`;

// default state
const DEFAULT_STATE = {
  latitude: null,
  longitude: null
};

// reducer
export const locationReducer = createRequestReducer(REQUEST_PREFIX, DEFAULT_STATE);

// selectors
export const selectLocation = (state = {}) => state[REDUCER_PREFIX] || DEFAULT_STATE;
export const selectLocationLatitude = state => selectLocation(state).latitude || DEFAULT_STATE.latitude;
export const selectLocationLongitude = state => selectLocation(state).longitude || DEFAULT_STATE.longitude;

// thunks
export const requestLocation = () => (dispatch, getState) => {
  return createRequestThunk(getLocation, REQUEST_PREFIX)(dispatch, getState);
};
