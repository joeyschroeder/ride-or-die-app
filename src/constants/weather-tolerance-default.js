import { RAIN_TOLERANCE_MODES } from './rain-tolerance-modes';

export const WEATHER_TOLERANCE_DEFAULT = {
  rainToleranceMode: RAIN_TOLERANCE_MODES.DRY,
  temperatureMinimum: 283.15, // 50 degrees Fahrenheit in Kelvin
  windSpeedMaximum: 11.176 // 25 miles/hour in meters/sec
};
