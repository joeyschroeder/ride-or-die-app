import { OPEN_WEATHER_API_KEY } from '../../constants/open-weather-api-key';
import { OPEN_WEATHER_API_ROOT_URL } from '../../constants/open-weather-api-root-url';
import { get } from 'axios';
import { transformWeatherResponse } from '../../util/transform-weather-response/transform-weather-response';

export const WEATHER_ENDPOINT = `${OPEN_WEATHER_API_ROOT_URL}/weather`;

export const getWeatherByGeographicCoordinates = async ({ latitude: lat, longitude: lon } = {}) => {
  if (!lat) throw new Error('Latitude is undefined.');
  if (!lon) throw new Error('Longitude is undefined.');

  const response = await get(WEATHER_ENDPOINT, {
    params: {
      appid: OPEN_WEATHER_API_KEY,
      lat,
      lon
    }
  });

  const { data } = response;

  return transformWeatherResponse(data);
};
