import { StyleSheet, Text, TouchableWithoutFeedback, View, ViewPropTypes } from 'react-native';

import { BORDER } from '../../constants/styles/border';
import { COLORS } from '../../constants/styles/colors';
import { FONTS } from '../../constants/styles/fonts';
import PropTypes from 'prop-types';
import React from 'react';
import { SPACER } from '../../constants/styles/spacer';
import { scaledLineHeight } from '../../util/scaled-line-height/scaled-line-height';
import { scaledValue } from '../../util/scaled-value/scaled-value';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: COLORS.WHITE,
    borderRadius: BORDER.RADIUS,
    borderWidth: BORDER.WIDTH,
    padding: SPACER,
    width: '100%'
  },
  root: {
    width: '100%'
  },
  text: {
    color: COLORS.WHITE,
    fontFamily: FONTS.SANS_SERIF.BOLD,
    fontSize: scaledValue(18),
    lineHeight: scaledLineHeight(18),
    textAlign: 'center'
  }
});

export const BlockButton = props => {
  const { style, label, onPress } = props;
  const rootStyles = { ...styles.root, ...style };

  return (
    <View style={rootStyles}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>{label.toUpperCase()}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

BlockButton.defaultProps = {
  label: 'Submit',
  onPress: undefined,
  style: undefined
};

BlockButton.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  style: ViewPropTypes.style
};
