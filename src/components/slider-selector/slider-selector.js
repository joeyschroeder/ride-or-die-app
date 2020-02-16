import React, { Component } from 'react';
import { Slider, StyleSheet, Text, View, ViewPropTypes } from 'react-native';

import { COLORS } from '../../constants/styles/colors';
import { FONTS } from '../../constants/styles/fonts';
import PropTypes from 'prop-types';
import { SPACER } from '../../constants/styles/spacer';
import { debounce } from 'lodash';
import { scaledLineHeight } from '../../util/scaled-line-height/scaled-line-height';
import { scaledValue } from '../../util/scaled-value/scaled-value';

const styles = StyleSheet.create({
  label: {
    alignItems: 'center',
    flex: -1,
    justifyContent: 'center',
    paddingRight: SPACER / 4
  },
  root: {
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  sliderContainer: {
    flex: 5
  },
  text: {
    fontFamily: FONTS.SANS_SERIF.BOLD,
    fontSize: scaledValue(12),
    lineHeight: scaledLineHeight(12),
    textTransform: 'uppercase'
  },
  textLarge: {
    fontFamily: FONTS.SANS_SERIF.MEDIUM,
    fontSize: scaledValue(18),
    lineHeight: scaledLineHeight(18)
  },
  value: {
    alignItems: 'center',
    flex: -1,
    justifyContent: 'center',
    paddingLeft: SPACER / 4
  }
});

export class SliderSelector extends Component {
  static propTypes = {
    displayValue: PropTypes.string,
    label: PropTypes.string,
    maxColor: PropTypes.object,
    maxValue: PropTypes.number,
    minColor: PropTypes.object,
    minValue: PropTypes.number,
    onChange: PropTypes.func,
    step: PropTypes.number,
    style: ViewPropTypes.style,
    textColor: PropTypes.object,
    value: PropTypes.number
  };

  static defaultProps = {
    displayValue: '',
    label: '',
    maxColor: COLORS.WHITE,
    maxValue: 100,
    minColor: COLORS.BLACK_TYPE,
    minValue: 0,
    onChange: () => {},
    step: 1,
    style: undefined,
    textColor: COLORS.BLACK_TYPE,
    value: 50
  };

  constructor(props) {
    super(props);

    const { onChange } = props;
    this.onChange = debounce(onChange, 100);
  }

  render() {
    const { displayValue, label, maxColor, maxValue, minColor, minValue, step, style, textColor, value } = this.props;

    const labelExists = Boolean(label);
    const labelTextStyles = { ...styles.text, color: textColor };
    const valueTextStyles = { ...styles.text, ...styles.textLarge, color: textColor };

    return (
      <View style={[styles.root, style]}>
        {labelExists && (
          <View style={styles.label}>
            <Text style={labelTextStyles}>{label}</Text>
          </View>
        )}
        <View style={styles.sliderContainer}>
          <Slider
            maximumTrackTintColor={maxColor}
            maximumValue={maxValue}
            minimumTrackTintColor={minColor}
            minimumValue={minValue}
            onValueChange={this.onChange}
            step={step}
            thumbTintColor={textColor}
            value={value}
          />
        </View>
        <View style={styles.value}>
          <Text style={valueTextStyles}>{displayValue || value}</Text>
        </View>
      </View>
    );
  }
}
