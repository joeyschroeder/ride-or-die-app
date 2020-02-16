import { CanRideCurrentWeatherConnected } from '../../can-ride-current-weather/can-ride-current-weather.connected';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Settings } from '../../settings/settings';
import { createStackNavigator } from '@react-navigation/stack';

const StackNavigator = createStackNavigator();
const { Navigator, Screen } = StackNavigator;

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="Can Ride Current Weather" component={CanRideCurrentWeatherConnected} />
        <Screen name="Settings" component={Settings} />
      </Navigator>
    </NavigationContainer>
  );
};
