import { StyleSheet, TouchableWithoutFeedback, View, ViewPropTypes } from 'react-native';

import { BORDER } from '../../constants/styles/border';
import { COLORS } from '../../constants/styles/colors';
import PropTypes from 'prop-types';
import React from 'react';
import { SPACER } from '../../constants/styles/spacer';
import { scaledValue } from '../../util/scaled-value/scaled-value';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: COLORS.WHITE,
    borderRadius: SPACER * 2,
    borderWidth: BORDER.WIDTH,
    padding: SPACER
  }
});

const iconSize = scaledValue(18);

export const IconButton = props => {
  const { color, icon, onPress, style } = props;
  const iconColor = color.hex();

  return (
    <View style={style}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <FontAwesomeIcon icon={icon} color={iconColor} size={iconSize} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

IconButton.defaultProps = {
  color: COLORS.WHITE,
  icon: faBell,
  onPress: undefined,
  style: undefined
};

IconButton.propTypes = {
  color: PropTypes.object,
  icon: PropTypes.object,
  onPress: PropTypes.func,
  style: ViewPropTypes.style
};
