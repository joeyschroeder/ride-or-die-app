import { CanRideCurrentWeatherConnected } from '../../can-ride-current-weather/can-ride-current-weather.connected';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Settings } from '../../settings/settings';
import { createStackNavigator } from '@react-navigation/stack';
import { APP_ROUTE_NAMES } from '../../../constants/app-route-names';

const StackNavigator = createStackNavigator();
const { Navigator, Screen } = StackNavigator;

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator headerMode="node">
        <Screen name={APP_ROUTE_NAMES.CAN_RIDE_CURRENT_WEATHER} component={CanRideCurrentWeatherConnected} />
        <Screen name={APP_ROUTE_NAMES.SETTINGS} component={Settings} />
      </Navigator>
    </NavigationContainer>
  );
};
