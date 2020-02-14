import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';

export const Temperature = props => {
  const { style, value } = props;
  return <Text style={style}>{value}°</Text>;
};

Temperature.propTypes = {
  style: PropTypes.object,
  value: PropTypes.number
};

Temperature.defaultProps = {
  style: undefined,
  value: null
};
