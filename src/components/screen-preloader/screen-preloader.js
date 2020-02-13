import { ActivityIndicator, StyleSheet, Text } from 'react-native';

import { ANIMATION_DURATION } from '../../constants/styles/animation-duration';
import { CHILDREN_PROP_TYPE } from '../../constants/children-prop-type';
import { COLORS } from '../../constants/styles/colors';
import { FONTS } from '../../constants/styles/fonts';
import PropTypes from 'prop-types';
import React from 'react';
import { SPACER } from '../../constants/styles/spacer';
import { Screen } from '../screen/screen';
import { ScreenPreloaderError } from './screen-preloader-error/screen-preloader-error';
import { SimpleAnimation } from 'react-native-simple-animations';
import { SlideInUpFadeAnimation } from '../slide-in-up-fade-animation/slide-in-up-fade-animation';

const styles = StyleSheet.create({
  activityIndicator: {
    marginBottom: SPACER
  },
  text: {
    color: COLORS.WHITE,
    fontFamily: FONTS.SANS_SERIF.MEDIUM
  }
});

export const ScreenPreloader = props => {
  const { children, errorMessage, isLoading, loadingMessage, onRefreshPress, showError } = props;

  if (!isLoading && !showError) return children;
  const backgroundColor = showError ? COLORS.DANGER : COLORS.WARNING;

  return (
    <Screen color={backgroundColor}>
      {isLoading && (
        <React.Fragment>
          <SimpleAnimation duration={ANIMATION_DURATION} fade>
            <ActivityIndicator color="white" style={styles.activityIndicator} />
          </SimpleAnimation>
          <SlideInUpFadeAnimation animateOnUpdate delay={ANIMATION_DURATION}>
            <Text style={styles.text}>{loadingMessage}</Text>
          </SlideInUpFadeAnimation>
        </React.Fragment>
      )}
      {showError && <ScreenPreloaderError message={errorMessage} onRefreshPress={onRefreshPress} />}
    </Screen>
  );
};

ScreenPreloader.propTypes = {
  children: CHILDREN_PROP_TYPE,
  errorMessage: PropTypes.string,
  isLoading: PropTypes.bool,
  loadingMessage: PropTypes.string,
  onRefreshPress: PropTypes.func,
  showError: PropTypes.bool
};

ScreenPreloader.defaultProps = {
  children: null,
  errorMessage: 'error loading.',
  isLoading: false,
  loadingMessage: 'loading...',
  onRefreshPress: undefined,
  showError: false
};
