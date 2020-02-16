import { Animated, StyleSheet, View, ViewPropTypes } from 'react-native';
import React, { Component } from 'react';

import { ANIMATION_DURATION } from '../../constants/styles/animation-duration';
import { ANIMATION_EASING } from '../../constants/styles/animation-easing';
import { BORDER } from '../../constants/styles/border';
import { COLORS } from '../../constants/styles/colors';
import PropTypes from 'prop-types';
import { RadioSelectorOption } from './radio-selector-option/radio-selector-option';

const styles = StyleSheet.create({
  activeIndicatorContainer: {
    alignSelf: 'stretch',
    bottom: 0,
    flexDirection: 'row',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 0
  },
  root: {
    alignSelf: 'stretch',
    borderRadius: BORDER.RADIUS,
    borderWidth: BORDER.WIDTH,
    flexDirection: 'row',
    overflow: 'hidden',
    position: 'relative'
  }
});

export class RadioSelector extends Component {
  static propTypes = {
    activeColor: PropTypes.object,
    onToggle: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string),
    style: ViewPropTypes.style,
    textColor: PropTypes.object,
    value: PropTypes.string
  };

  static defaultProps = {
    activeColor: COLORS.WHITE,
    onToggle: () => {},
    options: [],
    style: undefined,
    textColor: COLORS.BLACK_TYPE,
    value: ''
  };

  constructor(props) {
    super(props);
    const { options, value } = props;

    const initialAnimationValue = options.indexOf(value) || 0;
    this.animation = new Animated.Value(initialAnimationValue);
  }

  componentDidUpdate() {
    this.animate();
  }

  getOptions() {
    const { activeColor, onToggle, options, textColor, value } = this.props;

    return options.map(option => {
      const active = value === option;
      const onPress = () => onToggle(option);

      return (
        <RadioSelectorOption
          active={active}
          activeColor={activeColor}
          key={option}
          onPress={onPress}
          textColor={textColor}
          value={option}
        />
      );
    });
  }

  animate() {
    const { options, value } = this.props;

    Animated.timing(this.animation, {
      duration: ANIMATION_DURATION / 2,
      easing: ANIMATION_EASING,
      toValue: options.indexOf(value)
    }).start();
  }

  render() {
    const { activeColor, style, options } = this.props;

    const optionsLength = options.length;
    const optionsExist = Boolean(optionsLength);

    if (!optionsExist) return null;

    const flex = optionsExist ? 1 / optionsLength : 0;
    const interpolatedRange = flex * (optionsLength - 1);

    const beginSpacerFlex = this.animation.interpolate({
      inputRange: [0, optionsLength - 1],
      outputRange: [0, interpolatedRange]
    });

    const endSpacerFlex = this.animation.interpolate({
      inputRange: [0, optionsLength - 1],
      outputRange: [interpolatedRange, 0]
    });

    const rootStyles = { ...styles.root, ...style, borderColor: activeColor };
    const optionItems = this.getOptions();

    const activeIndicatorStyles = { backgroundColor: activeColor, flex };
    const beginSpacerStyles = { flex: beginSpacerFlex };
    const endSpacerStyles = { flex: endSpacerFlex };

    return (
      <View style={rootStyles}>
        {optionItems}
        <View style={styles.activeIndicatorContainer}>
          <Animated.View style={beginSpacerStyles} />
          <Animated.View pointerEvents="none" style={activeIndicatorStyles} />
          <Animated.View style={endSpacerStyles} />
        </View>
      </View>
    );
  }
}
