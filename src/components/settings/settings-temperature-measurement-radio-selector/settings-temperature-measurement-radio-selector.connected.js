import {
  selectSettingsTemperatureMeasurement,
  updateSettingsTemperatureMeasurement
} from '../../../store/settings/settings';

import { COLORS } from '../../../constants/styles/colors';
import { RadioSelector } from '../../radio-selector/radio-selector';
import { TEMPERATURE_MEASUREMENTS } from '../../../constants/temperature-measurements';
import { connect } from 'react-redux';

const OPTIONS = Object.keys(TEMPERATURE_MEASUREMENTS).map(key => TEMPERATURE_MEASUREMENTS[key]);

const mapStateToProps = state => ({
  options: OPTIONS,
  textColor: COLORS.TWITTER,
  value: selectSettingsTemperatureMeasurement(state)
});

const mapDispatchToProps = {
  onToggle: updateSettingsTemperatureMeasurement
};

export const SettingsTemperatureMeasurementRadioSelectorConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(RadioSelector);
