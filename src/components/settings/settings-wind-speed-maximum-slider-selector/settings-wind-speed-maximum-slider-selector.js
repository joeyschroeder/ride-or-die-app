import {
  selectWeatherToleranceEditableWindSpeedMaximum,
  updateWeatherToleranceEditableWindSpeedMaximum
} from '../../../store/weather-tolerance-editable/weather-tolerance-editable';

import { COLORS } from '../../../constants/styles/colors';
import Color from 'color';
import { SliderSelector } from '../../slider-selector/slider-selector';
import { connect } from 'react-redux';
import { convertMetersPerSecondToMilesPerHour } from '../../../util/convert-meters-per-second-to-miles-per-hour/convert-meters-per-second-to-miles-per-hour';

const mapStateToProps = state => {
  const value = selectWeatherToleranceEditableWindSpeedMaximum(state);

  const convertedValue = convertMetersPerSecondToMilesPerHour(value);
  const roundedValue = Math.round(convertedValue);
  const displayValue = `${roundedValue} MPH`;

  return {
    label: 'Wind',
    maxValue: 22.352, // 50 miles/hour in meters/sec
    minColor: Color(COLORS.TWITTER).darken(0.1),
    minValue: 0, // meters/sec
    textColor: COLORS.WHITE,
    displayValue,
    value
  };
};

const mapDispatchToProps = {
  onChange: updateWeatherToleranceEditableWindSpeedMaximum
};

export const SettingsWindSpeedMaximumSliderSelectorConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(SliderSelector);
