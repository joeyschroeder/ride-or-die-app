import { isEqual } from 'lodash';
import { selectWeatherToleranceEditable } from '../../store/weather-tolerance-editable/weather-tolerance-editable';
import { selectWeatherTolerance } from '../../store/weather-tolerance/weather-tolerance';

export const selectIsWeatherToleranceDirty = (state = {}) => {
  const weatherTolerance = selectWeatherTolerance(state);
  const weatherToleranceEditable = selectWeatherToleranceEditable(state);

  return !isEqual(weatherTolerance, weatherToleranceEditable);
};
