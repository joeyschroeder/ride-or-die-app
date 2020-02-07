import { getLocationPermissions } from '../../services/permissions/permissions';
import { requestCurrentWeather } from '../../store/current-weather/current-weather';
import { requestLocation } from '../../store/location/location';
import { requestSettings } from '../../store/settings/settings';

export const initializeApp = () => async dispatch => {
  const hasLocationPermissions = await getLocationPermissions();

  if (!hasLocationPermissions) throw new Error('Location permission not granted.');

  await dispatch(requestSettings());
  await dispatch(requestLocation());
  await dispatch(requestCurrentWeather());
};
