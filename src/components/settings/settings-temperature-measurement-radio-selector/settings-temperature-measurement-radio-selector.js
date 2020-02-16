import { COLORS } from '../../../constants/styles/colors';
import PropTypes from 'prop-types';
import { RadioSelector } from '../../radio-selector/radio-selector';
import React from 'react';
import { TEMPERATURE_MEASUREMENTS } from '../../../constants/temperature-measurements';

const OPTIONS = Object.keys(TEMPERATURE_MEASUREMENTS).map(key => TEMPERATURE_MEASUREMENTS[key]);

export const SettingsTemperatureMeasurementSelector = props => {
  const { value, onToggle } = props;

  return <RadioSelector onToggle={onToggle} options={OPTIONS} textColor={COLORS.TWITTER} value={value} />;
};

SettingsTemperatureMeasurementSelector.propTypes = {
  onToggle: PropTypes.func,
  value: PropTypes.string
};

SettingsTemperatureMeasurementSelector.defaultProps = {
  onToggle: undefined,
  value: ''
};
