import { StyleSheet, Text, ViewPropTypes } from 'react-native';

import { COLORS } from '../../constants/styles/colors';
import { FONTS } from '../../constants/styles/fonts';
import PropTypes from 'prop-types';
import React from 'react';
import { SlideInUpFadeAnimation } from '../slide-in-up-fade-animation/slide-in-up-fade-animation';
import { scaledLineHeight } from '../../util/scaled-line-height/scaled-line-height';
import { scaledValue } from '../../util/scaled-value/scaled-value';

const styles = StyleSheet.create({
  highlight: {
    color: COLORS.BLACK_TYPE
  },
  text: {
    color: COLORS.WHITE,
    fontFamily: FONTS.SANS_SERIF.BOLD,
    fontSize: scaledValue(72),
    letterSpacing: scaledValue(-4),
    lineHeight: scaledLineHeight(65),
    paddingTop: scaledValue(6) // this is arbitrary for iOS to make sure line height doesn't cut off tops of letters
  }
});

export const CanRideMessage = props => {
  const { canRide, style } = props;

  const message = canRide ? (
    <React.Fragment>
      <Text>{'definitely,\n'}</Text>
      <Text>go </Text>
      <Text style={styles.highlight}>{'fucking\n'}</Text>
      <Text>ride.*</Text>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Text>{'you’d\n'}</Text>
      <Text style={styles.highlight}>{'fucking\n'}</Text>
      <Text>die.*</Text>
    </React.Fragment>
  );

  return (
    <SlideInUpFadeAnimation animateOnUpdate style={style}>
      <Text style={styles.text}>{message}</Text>
    </SlideInUpFadeAnimation>
  );
};

CanRideMessage.propTypes = {
  canRide: PropTypes.bool,
  style: ViewPropTypes.style
};

CanRideMessage.defaultProps = {
  canRide: false,
  style: undefined
};
