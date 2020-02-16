import { selectLocationLatitude, selectLocationLongitude } from '../location/location';

import { createRequestReducer } from '../../util/create-request-reducer/create-request-reducer';
import { createRequestThunk } from '../../util/create-request-thunk/create-request-thunk';
import { getWeatherByGeographicCoordinates } from '../../services/weather/weather';

export const REDUCER_PREFIX = 'current-weather';
export const REQUEST_PREFIX = `${REDUCER_PREFIX}/REQUEST`;

// default state
const DEFAULT_STATE = {
  cityName: '',
  cloudPercent: null,
  conditionId: null,
  description: '',
  humidityPercent: null,
  pressure: null,
  sunrise: null,
  sunset: null,
  temperature: null,
  temperatureFeelsLike: null,
  temperatureMax: null,
  temperatureMin: null,
  timeOfDataCalculation: null,
  visibility: null,
  windDirection: null,
  windSpeed: null
};

// reducer
export const currentWeatherReducer = createRequestReducer(REQUEST_PREFIX, DEFAULT_STATE);

// selectors
export const selectCurrentWeather = (state = {}) => state[REDUCER_PREFIX] || DEFAULT_STATE;
export const selectCurrentWeatherCityName = state => selectCurrentWeather(state).cityName || DEFAULT_STATE.cityName;
export const selectCurrentWeatherCloudPercent = state => selectCurrentWeather(state).cloudPercent;
export const selectCurrentWeatherConditionId = state =>
  selectCurrentWeather(state).conditionId || DEFAULT_STATE.conditionId;
export const selectCurrentWeatherDescription = state =>
  selectCurrentWeather(state).description || DEFAULT_STATE.description;
export const selectCurrentWeatherHumidityPercent = state => selectCurrentWeather(state).humidityPercent;
export const selectCurrentWeatherPressure = state => selectCurrentWeather(state).pressure;
export const selectCurrentWeatherSunrise = state => selectCurrentWeather(state).sunrise;
export const selectCurrentWeatherSunset = state => selectCurrentWeather(state).sunset;
export const selectCurrentWeatherTemperature = state => selectCurrentWeather(state).temperature;
export const selectCurrentWeatherTemperatureFeelsLike = state => selectCurrentWeather(state).temperatureFeelsLike;
export const selectCurrentWeatherTemperatureMax = state => selectCurrentWeather(state).temperatureMax;
export const selectCurrentWeatherTemperatureMin = state => selectCurrentWeather(state).temperatureMin;
export const selectCurrentWeatherTimeOfDataCalculation = state => selectCurrentWeather(state).timeOfDataCalculation;
export const selectCurrentWeatherVisibility = state => selectCurrentWeather(state).visibility;
export const selectCurrentWeatherWindDirection = state => selectCurrentWeather(state).windDirection;
export const selectCurrentWeatherWindSpeed = state => selectCurrentWeather(state).windSpeed;

// thunks
export const requestCurrentWeather = () => (dispatch, getState) => {
  const state = getState();

  const latitude = selectLocationLatitude(state);
  const longitude = selectLocationLongitude(state);

  const requestFunction = () => getWeatherByGeographicCoordinates({ latitude, longitude });

  return createRequestThunk(requestFunction, REQUEST_PREFIX)(dispatch, getState);
};
