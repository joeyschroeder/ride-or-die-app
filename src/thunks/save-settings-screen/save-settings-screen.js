import { saveAndUpdateSettings } from '../save-and-update-settings/save-and-update-settings';
import { saveAndUpdateWeatherTolerance } from '../save-and-update-weather-tolerance/save-and-update-weather-tolerance';

export const saveSettingsScreen = () => dispatch => {
  dispatch(saveAndUpdateSettings());
  dispatch(saveAndUpdateWeatherTolerance());
};
