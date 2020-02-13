import { StyleSheet, View } from 'react-native';

import { COLORS } from '../../constants/styles/colors';
import { CanRideCurrentWeatherConnected } from '../can-ride-current-weather/can-ride-current-weather.connected';
import { DIMENSIONS } from '../../constants/dimensions';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    flex: 1,
    overflow: 'hidden'
  },
  root: {
    backgroundColor: COLORS.BLACK,
    flex: 1,
    height: DIMENSIONS.height,
    overflow: 'hidden',
    width: DIMENSIONS.WIDTH
  }
});

export const App = () => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <CanRideCurrentWeatherConnected />
      </View>
    </View>
  );
};
