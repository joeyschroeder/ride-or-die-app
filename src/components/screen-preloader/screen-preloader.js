import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { ANIMATION_DURATION } from '../../constants/styles/animation-duration';
import { COLORS } from '../../constants/styles/colors';
import { FONTS } from '../../constants/styles/fonts';
import PropTypes from 'prop-types';
import React from 'react';
import { SPACER } from '../../constants/styles/spacer';
import { SimpleAnimation } from 'react-native-simple-animations';

const styles = StyleSheet.create({
  activityIndicator: {
    marginBottom: SPACER / 2
  },
  root: {
    alignItems: 'center',
    backgroundColor: COLORS.WARNING,
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden'
  },
  text: {
    color: COLORS.WHITE,
    fontFamily: FONTS.SANS_SERIF.MEDIUM
  }
});

export const ScreenPreloader = props => {
  const { message } = props;

  return (
    <View style={styles.root}>
      <SimpleAnimation delay={500} duration={ANIMATION_DURATION} fade>
        <ActivityIndicator color="white" style={styles.activityIndicator} />
      </SimpleAnimation>
      <SimpleAnimation
        animateOnUpdate
        delay={500}
        direction="up"
        distance={SPACER}
        duration={ANIMATION_DURATION}
        fade
        movementType="slide"
      >
        <Text style={styles.text}>{message}</Text>
      </SimpleAnimation>
    </View>
  );
};

ScreenPreloader.propTypes = {
  message: PropTypes.string
};

ScreenPreloader.defaultProps = {
  message: 'loading...'
};
