import { StyleSheet, ViewPropTypes } from 'react-native';

import { ANIMATION_DURATION } from '../../constants/styles/animation-duration';
import { AnimatedBackgroundColorView } from 'react-native-animated-background-color-view';
import { CHILDREN_PROP_TYPE } from '../../constants/children-prop-type';
import { COLORS } from '../../constants/styles/colors';
import PropTypes from 'prop-types';
import React from 'react';
import { SPACER } from '../../constants/styles/spacer';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
    padding: SPACER
  }
});

export const Screen = props => {
  const { children, backgroundColor, style: styleProp, initialColor } = props;
  const style = { ...styles.root, ...styleProp };

  return (
    <AnimatedBackgroundColorView
      color={backgroundColor.hex()}
      duration={ANIMATION_DURATION}
      initialColor={initialColor.hex()}
      style={style}
    >
      {children}
    </AnimatedBackgroundColorView>
  );
};

Screen.propTypes = {
  backgroundColor: PropTypes.object,
  children: CHILDREN_PROP_TYPE,
  initialColor: PropTypes.object,
  style: ViewPropTypes.style
};

Screen.defaultProps = {
  backgroundColor: COLORS.WARNING,
  children: null,
  initialColor: COLORS.WARNING,
  style: undefined
};
