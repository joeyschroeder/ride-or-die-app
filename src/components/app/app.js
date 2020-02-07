import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});

export class App extends Component {
  static propTypes = {
    canRide: PropTypes.bool,
    initializeApp: PropTypes.func,
    latitude: PropTypes.number,
    longitude: PropTypes.number
  };

  static defaultProps = {
    canRide: false,
    initializeApp: () => {},
    latitude: null,
    longitude: null
  };

  componentDidMount() {
    const { initializeApp } = this.props;
    initializeApp();
  }

  render() {
    const { latitude, longitude, canRide } = this.props;

    return (
      <View style={styles.container}>
        <Text>latitude: {latitude}</Text>
        <Text>longitude: {longitude}</Text>
        <Text>can ride: {canRide.toString()}</Text>
      </View>
    );
  }
}
