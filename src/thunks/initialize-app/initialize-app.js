import { getLocationPermissions } from '../../services/permissions/permissions';
import { requestCurrentWeather } from '../../store/current-weather/current-weather';
import { requestLocation } from '../../store/location/location';

export const initializeApp = () => async dispatch => {
  const hasLocationPermissions = await getLocationPermissions();

  if (!hasLocationPermissions) throw new Error('Location permission not granted.');

  await dispatch(requestLocation());
  await dispatch(requestCurrentWeather());
};
