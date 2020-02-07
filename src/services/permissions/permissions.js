import { LOCATION, askAsync } from 'expo-permissions';

export const getLocationPermissions = async () => {
  const response = await askAsync(LOCATION);
  const { status } = response;

  if (status === 'granted') return true;

  return false;
};
