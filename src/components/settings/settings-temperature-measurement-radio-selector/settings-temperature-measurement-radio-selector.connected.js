import {
  selectSettingsTemperatureMeasurement,
  updateSettingsTemperatureMeasurement
} from '../../../store/settings/settings';

import { SettingsTemperatureMeasurementSelector } from './settings-temperature-measurement-radio-selector';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  value: selectSettingsTemperatureMeasurement(state)
});

const mapDispatchToProps = {
  onToggle: updateSettingsTemperatureMeasurement
};

export const SettingsTemperatureMeasurementSelectorConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsTemperatureMeasurementSelector);
