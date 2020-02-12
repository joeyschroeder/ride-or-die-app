import { ANIMATION_DURATION } from '../../constants/styles/animation-duration';
import { CHILDREN_PROP_TYPE } from '../../constants/children-prop-type';
import React from 'react';
import { SPACER } from '../../constants/styles/spacer';
import { SimpleAnimation } from 'react-native-simple-animations';
import { ViewPropTypes } from 'react-native';

export const SlideInUpFadeAnimation = props => {
  const { children, style, ...other } = props;

  return (
    <SimpleAnimation
      direction="up"
      distance={SPACER}
      duration={ANIMATION_DURATION}
      fade
      movementType="slide"
      style={style}
      {...other}
    >
      {children}
    </SimpleAnimation>
  );
};

SlideInUpFadeAnimation.propTypes = {
  children: CHILDREN_PROP_TYPE,
  style: ViewPropTypes.style
};

SlideInUpFadeAnimation.defaultProps = {
  children: undefined,
  style: undefined
};
