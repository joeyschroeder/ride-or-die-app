import { TIMES_OF_DAY } from './times-of-day';
import { WEATHER_ICON_KEYS } from './weather-icon-keys';

const { DAY, NIGHT, NEUTRAL } = TIMES_OF_DAY;

const {
  CLEAR,
  CLOUDY,
  CLOUDY_GUSTS,
  CLOUDY_WINDY,
  DUST,
  FOG,
  HAIL,
  LIGHTNING,
  RAIN,
  RAIN_MIX,
  RAIN_WIND,
  SANDSTORM,
  SHOWERS,
  SLEET,
  SLEET_STORM,
  SMOKE,
  SNOW,
  SNOW_THUNDERSTORM,
  SNOW_WIND,
  SPRINKLE,
  STORM_SHOWERS,
  THUNDERSTORM,
  TORNADO,
  VOLCANO,
  WINDY
} = WEATHER_ICON_KEYS;

const UNSPECIFIC_ICONS = {
  [DUST]: 'f063',
  [SANDSTORM]: 'f082',
  [SMOKE]: 'f062',
  [TORNADO]: 'f056',
  [VOLCANO]: 'f0c8'
};

// https://erikflowers.github.io/weather-icons/
export const WEATHER_ICON_MAP = {
  [DAY]: {
    [CLEAR]: 'f00d',
    [CLOUDY]: 'f002',
    [CLOUDY_GUSTS]: 'f000',
    [CLOUDY_WINDY]: 'f001',
    [FOG]: 'f003',
    [HAIL]: 'f004',
    [LIGHTNING]: 'f005',
    [RAIN]: 'f008',
    [RAIN_MIX]: 'f006',
    [RAIN_WIND]: 'f007',
    [SHOWERS]: 'f009',
    [SLEET]: 'f0b2',
    [SLEET_STORM]: 'f068',
    [SNOW]: 'f00a',
    [SNOW_THUNDERSTORM]: 'f06b',
    [SNOW_WIND]: 'f065',
    [SPRINKLE]: 'f00b',
    [STORM_SHOWERS]: 'f00e',
    [THUNDERSTORM]: 'f010',
    [WINDY]: 'f085',
    ...UNSPECIFIC_ICONS
  },
  [NEUTRAL]: {
    [CLEAR]: 'f041',
    [CLOUDY]: 'f013',
    [CLOUDY_GUSTS]: 'f011',
    [CLOUDY_WINDY]: 'f012',
    [FOG]: 'f014',
    [HAIL]: 'f015',
    [LIGHTNING]: 'f016',
    [RAIN]: 'f019',
    [RAIN_MIX]: 'f017',
    [RAIN_WIND]: 'f018',
    [SHOWERS]: 'f01a',
    [SLEET]: 'f0b5',
    [SLEET_STORM]: 'f01d',
    [SNOW]: 'f01b',
    [SNOW_THUNDERSTORM]: 'f01d',
    [SNOW_WIND]: 'f064',
    [SPRINKLE]: 'f01c',
    [STORM_SHOWERS]: 'f01d',
    [THUNDERSTORM]: 'f01e',
    [WINDY]: 'f021',
    ...UNSPECIFIC_ICONS
  },
  [NIGHT]: {
    [CLEAR]: 'f02e',
    [CLOUDY]: 'f086',
    [CLOUDY_GUSTS]: 'f022',
    [CLOUDY_WINDY]: 'f023',
    [FOG]: 'f04a',
    [HAIL]: 'f032',
    [LIGHTNING]: 'f033',
    [RAIN]: 'f028',
    [RAIN_MIX]: 'f026',
    [RAIN_WIND]: 'f027',
    [SHOWERS]: 'f029',
    [SLEET]: 'f0b4',
    [SLEET_STORM]: 'f06a',
    [SNOW]: 'f02a',
    [SNOW_THUNDERSTORM]: 'f06d',
    [SNOW_WIND]: 'f067',
    [SPRINKLE]: 'f02b',
    [STORM_SHOWERS]: 'f02c',
    [THUNDERSTORM]: 'f02d',
    [WINDY]: 'f030',
    ...UNSPECIFIC_ICONS
  }
};
