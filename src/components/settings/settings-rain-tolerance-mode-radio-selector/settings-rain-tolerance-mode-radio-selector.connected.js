import {
  selectWeatherToleranceRainToleranceMode,
  updateWeatherToleranceRainToleranceMode
} from '../../../store/weather-tolerance/weather-tolerance';

import { COLORS } from '../../../constants/styles/colors';
import { RAIN_TOLERANCE_MODES } from '../../../constants/rain-tolerance-modes';
import { RadioSelector } from '../../radio-selector/radio-selector';
import { connect } from 'react-redux';

const OPTIONS = Object.keys(RAIN_TOLERANCE_MODES).map(key => RAIN_TOLERANCE_MODES[key]);

const mapStateToProps = state => ({
  options: OPTIONS,
  textColor: COLORS.TWITTER,
  value: selectWeatherToleranceRainToleranceMode(state)
});

const mapDispatchToProps = {
  onToggle: updateWeatherToleranceRainToleranceMode
};

export const SettingsRainToleranceModeRadioSelectorConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(RadioSelector);
