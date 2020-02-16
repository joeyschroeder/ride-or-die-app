import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import { COLORS } from '../../../constants/styles/colors';
import { FONTS } from '../../../constants/styles/fonts';
import PropTypes from 'prop-types';
import React from 'react';
import { SPACER } from '../../../constants/styles/spacer';
import { scaledLineHeight } from '../../../util/scaled-line-height/scaled-line-height';
import { scaledValue } from '../../../util/scaled-value/scaled-value';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.TRANSPARENT,
    flexBasis: 0,
    flexGrow: 1,
    paddingVertical: SPACER / 2,
    zIndex: 1
  },
  text: {
    fontFamily: FONTS.SANS_SERIF.BOLD,
    fontSize: scaledValue(12),
    lineHeight: scaledLineHeight(12),
    textAlign: 'center',
    textTransform: 'uppercase'
  }
});

export const RadioSelectorOption = props => {
  const { active, activeColor, textColor, value, onPress } = props;

  const color = active ? textColor : activeColor;
  const textStyles = { ...styles.text, color };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button}>
        <Text ellipsizeMode="tail" numberOfLines={1} style={textStyles}>
          {value}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

RadioSelectorOption.propTypes = {
  active: PropTypes.bool,
  activeColor: PropTypes.object,
  onPress: PropTypes.func,
  textColor: PropTypes.object,
  value: PropTypes.string
};

RadioSelectorOption.defaultProps = {
  active: false,
  activeColor: COLORS.WHITE,
  onPress: undefined,
  textColor: COLORS.BLACK_TYPE,
  value: ''
};
