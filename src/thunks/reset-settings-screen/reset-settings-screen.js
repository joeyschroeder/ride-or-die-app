import { resetSettingsEditable } from '../reset-settings-editable/reset-settings-editable';
import { resetWeatherToleranceEditable } from '../reset-weather-tolerance-editable/reset-weather-tolerance-editable';

export const resetSettingsScreen = () => dispatch => {
  dispatch(resetSettingsEditable());
  dispatch(resetWeatherToleranceEditable());
};
