import { StyleSheet, Text, View } from 'react-native';

import { ANIMATION_DURATION } from '../../../constants/styles/animation-duration';
import { BlockButton } from '../../block-button/block-button';
import { COLORS } from '../../../constants/styles/colors';
import { FONTS } from '../../../constants/styles/fonts';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { SPACER } from '../../../constants/styles/spacer';
import { SimpleAnimation } from 'react-native-simple-animations';
import { SlideInUpFadeAnimation } from '../../slide-in-up-fade-animation/slide-in-up-fade-animation';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { scaledValue } from '../../../util/scaled-value/scaled-value';

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%'
  },
  icon: {
    marginBottom: SPACER * 2
  },
  root: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%'
  },
  text: {
    color: COLORS.WHITE,
    fontFamily: FONTS.SANS_SERIF.MEDIUM,
    textAlign: 'center'
  },
  textContainer: {
    marginBottom: SPACER
  }
});

const iconColor = COLORS.WHITE.hex();
const iconSize = scaledValue(144);

export const ScreenPreloaderError = props => {
  const { buttonLabel, message, onRefreshPress } = props;
  const showButton = Boolean(onRefreshPress);

  return (
    <View style={styles.root}>
      <SimpleAnimation duration={ANIMATION_DURATION} fade staticType="bounce" style={styles.icon}>
        <FontAwesomeIcon icon={faExclamationTriangle} color={iconColor} size={iconSize} />
      </SimpleAnimation>
      <SlideInUpFadeAnimation style={styles.textContainer}>
        <Text style={styles.text}>{message}</Text>
      </SlideInUpFadeAnimation>
      {showButton && (
        <SlideInUpFadeAnimation delay={ANIMATION_DURATION / 3} style={styles.buttonContainer}>
          <BlockButton label={buttonLabel} onPress={onRefreshPress} />
        </SlideInUpFadeAnimation>
      )}
    </View>
  );
};

ScreenPreloaderError.propTypes = {
  buttonLabel: PropTypes.string,
  message: PropTypes.string,
  onRefreshPress: PropTypes.func
};

ScreenPreloaderError.defaultProps = {
  buttonLabel: 'try again',
  message: 'error loading.',
  onRefreshPress: undefined
};
