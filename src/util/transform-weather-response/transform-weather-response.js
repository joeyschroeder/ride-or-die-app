import { get } from 'lodash';

// TODO: This currently does not handle rain or snow responses;
// check to see what the format for rain and snow responses are
// and adapt this transformer.
export const transformWeatherResponse = (response = {}) => ({
  cityName: get(response, 'name', ''),
  cloudPercent: get(response, 'clouds.all', null),
  conditionId: get(response, 'weather[0].id', null),
  description: get(response, 'weather[0].description', ''),
  humidityPercent: get(response, 'main.humidity', null),
  pressure: get(response, 'main.pressure', null), // atmospheric pressure, hPa
  sunrise: get(response, 'sys.sunrise', null), // unix, UTC
  sunset: get(response, 'sys.sunset', null), // unix, UTC
  temperature: get(response, 'main.temp', null), // kelvin
  temperatureFeelsLike: get(response, 'main.feels_like', null), // kelvin
  temperatureMax: get(response, 'main.temp_max', null), // kelvin
  temperatureMin: get(response, 'main.temp_min', null), // kelvin
  timeOfDataCalculation: get(response, 'dt', null), // unix, UTC,
  visibility: get(response, 'visibility', null), // meters
  windDirection: get(response, 'wind.deg', null), // degrees (meteorological)
  windSpeed: get(response, 'wind.speed', null) // meter/sec
});
