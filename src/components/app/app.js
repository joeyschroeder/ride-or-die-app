import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { FONTS } from '../../constants/styles/fonts';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    fontFamily: FONTS.SANS_SERIF.REGULAR
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
        <Text style={styles.text}>latitude: {latitude}</Text>
        <Text style={styles.text}>longitude: {longitude}</Text>
        <Text style={styles.text}>can ride: {canRide.toString()}</Text>
      </View>
    );
  }
}
