import {
  selectSettingsEditableTemperatureMeasurement,
  updateSettingsEditableTemperatureMeasurement
} from '../../../store/settings-editable/settings-editable';

import { COLORS } from '../../../constants/styles/colors';
import { RadioSelector } from '../../radio-selector/radio-selector';
import { TEMPERATURE_MEASUREMENTS } from '../../../constants/temperature-measurements';
import { connect } from 'react-redux';

const OPTIONS = Object.keys(TEMPERATURE_MEASUREMENTS).map(key => TEMPERATURE_MEASUREMENTS[key]);

const mapStateToProps = state => ({
  options: OPTIONS,
  textColor: COLORS.TWITTER,
  value: selectSettingsEditableTemperatureMeasurement(state)
});

const mapDispatchToProps = {
  onToggle: updateSettingsEditableTemperatureMeasurement
};

export const SettingsTemperatureMeasurementRadioSelectorConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(RadioSelector);
