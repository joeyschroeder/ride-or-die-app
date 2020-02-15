import {
  selectCurrentWeatherCityName,
  selectCurrentWeatherConditionId,
  selectCurrentWeatherSunrise,
  selectCurrentWeatherSunset,
  selectCurrentWeatherTemperature,
  selectCurrentWeatherTimeOfDataCalculation
} from '../../store/current-weather/current-weather';

import { CanRideWeatherSummary } from './can-ride-weather-summary';
import { connect } from 'react-redux';
import { getWeatherIconFromId } from '../../util/get-weather-icon-from-id/get-weather-icon-from-id';

const mapStateToProps = state => {
  const id = selectCurrentWeatherConditionId(state);
  const sunrise = selectCurrentWeatherSunrise(state);
  const sunset = selectCurrentWeatherSunset(state);
  const timeOfCalculation = selectCurrentWeatherTimeOfDataCalculation(state);

  const icon = getWeatherIconFromId({ id, sunrise, sunset, time: timeOfCalculation });

  return {
    city: selectCurrentWeatherCityName(state),
    icon,
    temperature: selectCurrentWeatherTemperature(state)
  };
};

const mapDispatchToProps = undefined;

export const CanRideWeatherSummaryConnected = connect(mapStateToProps, mapDispatchToProps)(CanRideWeatherSummary);
