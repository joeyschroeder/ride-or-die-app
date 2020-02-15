import { WEATHER_CONDITION_IDS } from '../../constants/weather-icon-ids';
import { WEATHER_ICON_MAP } from '../../constants/weather-icon-map';
import { convertUnicodeToCharacter } from '../convert-unicode-to-character/convert-unicode-to-character';
import { getTimeOfDay } from '../get-time-of-day/get-time-of-day';

export const getWeatherIconFromId = ({ id, sunrise, sunset, time }) => {
  const timeOfDay = getTimeOfDay({ time, sunrise, sunset });
  const iconKey = WEATHER_CONDITION_IDS[id];
  const icon = WEATHER_ICON_MAP[timeOfDay][iconKey];

  if (icon) return convertUnicodeToCharacter(icon);

  return '';
};
