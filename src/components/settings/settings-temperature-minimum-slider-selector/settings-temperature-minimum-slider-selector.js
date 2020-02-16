import {
  selectWeatherToleranceTemperatureMinimum,
  updateWeatherToleranceTemperatureMinimum
} from '../../../store/weather-tolerance/weather-tolerance';

import { COLORS } from '../../../constants/styles/colors';
import Color from 'color';
import { SliderSelector } from '../../slider-selector/slider-selector';
import { TEMPERATURE_MEASUREMENTS } from '../../../constants/temperature-measurements';
import { connect } from 'react-redux';
import { convertKelvinToCelsius } from '../../../util/convert-kelvin-to-celsius/convert-kelvin-to-celsius';
import { convertKelvinToFahrenheit } from '../../../util/convert-kelvin-to-fahrenheit/convert-kelvin-to-fahrenheit';
import { selectSettingsTemperatureMeasurement } from '../../../store/settings/settings';

const mapStateToProps = state => {
  const value = selectWeatherToleranceTemperatureMinimum(state);

  // TODO: this logic is duplicated in the temperature.connected.js
  // Perhaps it could be refactored to a single location
  const measurement = selectSettingsTemperatureMeasurement(state);
  const convertedValue =
    measurement === TEMPERATURE_MEASUREMENTS.FAHRENHEIT
      ? convertKelvinToFahrenheit(value)
      : convertKelvinToCelsius(value);

  const roundedValue = Math.round(convertedValue);
  const displayValue = `${roundedValue}°`;

  return {
    label: 'Temp.',
    maxValue: 310.9278, // 100 degrees fahrenheit
    minColor: Color(COLORS.TWITTER).darken(0.1),
    minValue: 255.3722, // 0 degrees fahrenheit
    textColor: COLORS.WHITE,
    displayValue,
    value
  };
};

const mapDispatchToProps = {
  onChange: updateWeatherToleranceTemperatureMinimum
};

export const SettingsTemperatureMinimumSliderSelectorConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(SliderSelector);
