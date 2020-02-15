import {
  selectCurrentWeatherCityName,
  selectCurrentWeatherConditionId,
  selectCurrentWeatherSunrise,
  selectCurrentWeatherSunset,
  selectCurrentWeatherTemperature
} from '../../store/current-weather/current-weather';

import { CanRideWeatherSummary } from './can-ride-weather-summary';
import { connect } from 'react-redux';
import { getWeatherConditionIconFromCode } from '../../util/get-weather-condition-icon-from-code/get-weather-condition-icon-from-code';

const mapStateToProps = state => {
  const code = selectCurrentWeatherConditionId(state);
  const sunrise = selectCurrentWeatherSunrise(state);
  const sunset = selectCurrentWeatherSunset(state);

  const icon = getWeatherConditionIconFromCode({ code, sunrise, sunset });
  console.log('icon: ', icon);

  return {
    icon,
    city: selectCurrentWeatherCityName(state),
    temperature: selectCurrentWeatherTemperature(state)
  };
};

const mapDispatchToProps = undefined;

export const CanRideWeatherSummaryConnected = connect(mapStateToProps, mapDispatchToProps)(CanRideWeatherSummary);
