import { getLocationPermissions } from '../../services/permissions/permissions';
import { requestLocation } from '../../store/location/location';
import { requestCurrentWeather } from '../../store/current-weather/current-weather';

export const initializeApp = () => async dispatch => {
  const hasLocationPermissions = await getLocationPermissions();

  if (!hasLocationPermissions) throw new Error('Location permission not granted.');

  await dispatch(requestLocation());
  await dispatch(requestCurrentWeather());
};
