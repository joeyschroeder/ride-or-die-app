import { getLocationPermissions } from '../../services/permissions/permissions';
import { requestCurrentWeather } from '../../store/current-weather/current-weather';
import { requestLocation } from '../../store/location/location';
import { requestSettings } from '../../store/settings/settings';
import { requestWeatherTolerance } from '../../store/weather-tolerance/weather-tolerance';
import { resetSettingsEditable as syncSettingsEditableWithSavedSettings } from '../reset-settings-editable/reset-settings-editable';

export const initializeApp = () => async dispatch => {
  const hasLocationPermissions = await getLocationPermissions();

  if (!hasLocationPermissions) throw new Error('Location permission not granted.');

  await Promise.all([dispatch(requestLocation()), dispatch(requestSettings()), dispatch(requestWeatherTolerance())]);

  await dispatch(syncSettingsEditableWithSavedSettings());
  await dispatch(requestCurrentWeather());
};
