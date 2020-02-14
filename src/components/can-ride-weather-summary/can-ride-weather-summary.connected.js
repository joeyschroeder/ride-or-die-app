import {
  selectCurrentWeatherCityName,
  selectCurrentWeatherTemperature
} from '../../store/current-weather/current-weather';

import { CanRideWeatherSummary } from './can-ride-weather-summary';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  city: selectCurrentWeatherCityName(state),
  temperature: selectCurrentWeatherTemperature(state)
});

const mapDispatchToProps = undefined;

export const CanRideWeatherSummaryConnected = connect(mapStateToProps, mapDispatchToProps)(CanRideWeatherSummary);
