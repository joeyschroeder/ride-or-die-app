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
export const selectCurrentWeatherCloudPercent = state =>
  selectCurrentWeather(state).cloudPercent || DEFAULT_STATE.cloudPercent;
export const selectCurrentWeatherConditionId = state =>
  selectCurrentWeather(state).conditionId || DEFAULT_STATE.conditionId;
export const selectCurrentWeatherDescription = state =>
  selectCurrentWeather(state).description || DEFAULT_STATE.description;
export const selectCurrentWeatherHumidityPercent = state =>
  selectCurrentWeather(state).humidityPercent || DEFAULT_STATE.humidityPercent;
export const selectCurrentWeatherPressure = state => selectCurrentWeather(state).pressure || DEFAULT_STATE.pressure;
export const selectCurrentWeatherSunrise = state => selectCurrentWeather(state).sunrise || DEFAULT_STATE.sunrise;
export const selectCurrentWeatherSunset = state => selectCurrentWeather(state).sunset || DEFAULT_STATE.sunset;
export const selectCurrentWeatherTemperature = state =>
  selectCurrentWeather(state).temperature || DEFAULT_STATE.temperature;
export const selectCurrentWeatherTemperatureFeelsLike = state =>
  selectCurrentWeather(state).temperatureFeelsLike || DEFAULT_STATE.temperatureFeelsLike;
export const selectCurrentWeatherTemperatureMax = state =>
  selectCurrentWeather(state).temperatureMax || DEFAULT_STATE.temperatureMax;
export const selectCurrentWeatherTemperatureMin = state =>
  selectCurrentWeather(state).temperatureMin || DEFAULT_STATE.temperatureMin;
export const selectCurrentWeatherTimeOfDataCalculation = state =>
  selectCurrentWeather(state).timeOfDataCalculation || DEFAULT_STATE.timeOfDataCalculation;
export const selectCurrentWeatherVisibility = state =>
  selectCurrentWeather(state).visibility || DEFAULT_STATE.visibility;
export const selectCurrentWeatherWindDirection = state =>
  selectCurrentWeather(state).windDirection || DEFAULT_STATE.windDirection;
export const selectCurrentWeatherWindSpeed = state => selectCurrentWeather(state).windSpeed || DEFAULT_STATE.windSpeed;

// thunks
export const requestCurrentWeather = () => (dispatch, getState) => {
  const state = getState();

  const latitude = selectLocationLatitude(state);
  const longitude = selectLocationLongitude(state);

  const requestFunction = () => getWeatherByGeographicCoordinates({ latitude, longitude });

  return createRequestThunk(requestFunction, REQUEST_PREFIX)(dispatch, getState);
};
