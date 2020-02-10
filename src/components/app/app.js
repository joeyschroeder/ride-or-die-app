import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from '../../constants/styles/colors';
import { DIMENSIONS } from '../../constants/dimensions';
import { FONTS } from '../../constants/styles/fonts';
import PropTypes from 'prop-types';
import { ScreenPreloader } from '../screen-preloader/screen-preloader';

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
      <View style={styles.root}>
        <View style={styles.container}>
          <ScreenPreloader />
        </View>
      </View>
    );
  }
}
