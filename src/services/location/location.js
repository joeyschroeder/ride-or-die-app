import { LOCATION_OPTIONS } from '../../constants/location-options';
import { getCurrentPositionAsync } from 'expo-location';

export const getLocation = async () => {
  const response = await getCurrentPositionAsync(LOCATION_OPTIONS);
  const { coords } = response;
  const { latitude, longitude } = coords;

  return { latitude, longitude };
};
