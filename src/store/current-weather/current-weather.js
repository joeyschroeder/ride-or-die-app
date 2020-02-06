import { createRequestReducer } from '../../util/create-request-reducer/create-request-reducer';
import { createRequestThunk } from '../../util/create-request-thunk/create-request-thunk';
import { selectLocationLatitude, selectLocationLongitude } from '../location/location';
import { getWeatherByGeographicCoordinates } from '../../services/weather/weather';

export const REDUCER_PREFIX = 'current-weather';
const REQUEST_PREFIX = `${REDUCER_PREFIX}/REQUEST`;

// default state
const DEFAULT_STATE = {
  latitude: null,
  longitude: null
};

// reducer
export const currentWeatherReducer = createRequestReducer(REQUEST_PREFIX, DEFAULT_STATE);

// selectors
export const selectCurrentWeather = (state = {}) => state[REDUCER_PREFIX] || DEFAULT_STATE;

// thunks
export const requestCurrentWeather = () => (dispatch, getState) => {
  const state = getState();

  const latitude = selectLocationLatitude(state);
  const longitude = selectLocationLongitude(state);

  const requestFunction = () => getWeatherByGeographicCoordinates({ latitude, longitude });

  return createRequestThunk(requestFunction, REQUEST_PREFIX)(dispatch, getState);
};
