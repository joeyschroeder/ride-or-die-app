import { WEATHER_ICON_KEYS } from './weather-icon-keys';

const {
  CLEAR,
  CLOUDY,
  DUST,
  FOG,
  RAIN,
  RAIN_MIX,
  RAIN_WIND,
  SANDSTORM,
  SHOWERS,
  SLEET,
  SMOKE,
  SNOW,
  SNOW_WIND,
  SPRINKLE,
  STORM_SHOWERS,
  THUNDERSTORM,
  TORNADO,
  VOLCANO,
  WINDY
} = WEATHER_ICON_KEYS;

// https://openweathermap.org/weather-conditions
export const WEATHER_CONDITION_IDS = {
  200: STORM_SHOWERS, // thunderstorm with light rain
  201: THUNDERSTORM, // thunderstorm with rain
  202: THUNDERSTORM, // thunderstorm with heavy rain
  210: STORM_SHOWERS, // light thunderstorm
  211: THUNDERSTORM, // thunderstorm
  212: THUNDERSTORM, // heavy thunderstorm
  221: THUNDERSTORM, // ragged thunderstorm
  230: STORM_SHOWERS, // thunderstorm with light drizzle
  231: STORM_SHOWERS, // thunderstorm with drizzle
  232: STORM_SHOWERS, // thunderstorm with heavy drizzle
  300: SPRINKLE, // light intensity drizzle
  301: SPRINKLE, // drizzle
  302: RAIN_WIND, // heavy intensity drizzle
  310: RAIN, // light intensity drizzle rain
  311: SPRINKLE, // drizzle rain
  312: RAIN_WIND, // heavy intensity drizzle rain
  313: SHOWERS, // shower rain and drizzle
  314: SHOWERS, // heavy shower rain and drizzle
  321: SPRINKLE, // shower drizzle
  500: SPRINKLE, // light rain
  501: RAIN, // moderate rain
  502: RAIN_WIND, // heavy intensity rain
  503: RAIN_WIND, // very heavy rain
  504: RAIN_WIND, // extreme rain
  511: SLEET, // freezing rain
  520: SHOWERS, // light intensity shower rain
  521: SHOWERS, // shower rain
  522: SHOWERS, // heavy intensity shower rain
  531: SHOWERS, // ragged shower rain
  600: SNOW, // light snow
  601: SNOW, // Snow
  602: SNOW_WIND, // Heavy snow
  611: SLEET, // Sleet
  612: SLEET, // Light shower sleet
  613: SLEET, // Shower sleet
  615: RAIN_MIX, // Light rain and snow
  616: RAIN_MIX, // Rain and snow
  620: SNOW, // Light shower snow
  621: SNOW, // Shower snow
  622: SNOW_WIND, // Heavy shower snow
  701: SPRINKLE, // mist
  711: SMOKE, // Smoke
  721: SMOKE, // Haze
  731: SANDSTORM, // sand/ dust whirls
  741: FOG, // fog
  751: SANDSTORM, // sand
  761: DUST, // dust
  762: VOLCANO, // volcanic ash
  771: WINDY, // squalls
  781: TORNADO, // tornado
  800: CLEAR, // clear sky
  801: CLOUDY, // few clouds: 11-25%
  802: CLOUDY, // scattered clouds: 25-50%
  803: CLOUDY, // broken clouds: 51-84%
  804: CLOUDY // overcast clouds: 85-100%
};
