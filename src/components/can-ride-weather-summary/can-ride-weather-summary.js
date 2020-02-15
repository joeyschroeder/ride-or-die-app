import { StyleSheet, Text, View, ViewPropTypes } from 'react-native';

import { COLORS } from '../../constants/styles/colors';
import { FONTS } from '../../constants/styles/fonts';
import PropTypes from 'prop-types';
import React from 'react';
import { SPACER } from '../../constants/styles/spacer';
import { SlideInUpFadeAnimation } from '../slide-in-up-fade-animation/slide-in-up-fade-animation';
import { TemperatureConnected } from '../temperature/temperature.connected';
import { scaledLineHeight } from '../../util/scaled-line-height/scaled-line-height';
import { scaledValue } from '../../util/scaled-value/scaled-value';

const styles = StyleSheet.create({
  city: {
    color: COLORS.WHITE,
    fontFamily: FONTS.SANS_SERIF.MEDIUM
  },
  icon: {
    color: COLORS.WHITE,
    fontFamily: FONTS.WEATHER_ICONS,
    fontSize: scaledValue(50)
  },
  iconContainer: {
    marginRight: SPACER
  },
  root: {
    flexDirection: 'row'
  },
  temperature: {
    color: COLORS.WHITE,
    fontFamily: FONTS.SANS_SERIF.MEDIUM,
    fontSize: scaledValue(36),
    lineHeight: scaledLineHeight(36)
  }
});

export const CanRideWeatherSummary = props => {
  const { city, temperature, style } = props;
  const rootStyle = { ...style, ...styles.root };

  return (
    <SlideInUpFadeAnimation animateOnUpdate style={rootStyle}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{'\uF001'}</Text>
      </View>
      <View>
        <TemperatureConnected style={styles.temperature} value={temperature} />
        <Text style={styles.city}>{city.toUpperCase()}</Text>
      </View>
    </SlideInUpFadeAnimation>
  );
};

CanRideWeatherSummary.propTypes = {
  city: PropTypes.string,
  style: ViewPropTypes.style,
  temperature: PropTypes.number
};

CanRideWeatherSummary.defaultProps = {
  city: '',
  style: undefined,
  temperature: null
};
