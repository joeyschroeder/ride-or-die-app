import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

import { COLORS } from '../../constants/styles/colors';
import { FONTS } from '../../constants/styles/fonts';
import PropTypes from 'prop-types';
import { Screen } from '../screen/screen';
import { ScreenPreloader } from '../screen-preloader/screen-preloader';

const styles = StyleSheet.create({
  text: {
    color: COLORS.WHITE,
    fontFamily: FONTS.SANS_SERIF.MEDIUM
  }
});

export class CanRideCurrentWeather extends Component {
  static propTypes = {
    backgroundColor: PropTypes.object,
    isLoading: PropTypes.bool,
    requestData: PropTypes.func,
    showError: PropTypes.bool
  };

  static defaultProps = {
    backgroundColor: COLORS.DANGER,
    isLoading: false,
    requestData: undefined,
    showError: false
  };

  constructor(props) {
    super(props);

    const { requestData } = props;
    requestData();
  }

  render() {
    const { isLoading, requestData, showError, backgroundColor } = this.props;

    return (
      <ScreenPreloader
        errorMessage="error getting current weather."
        isLoading={isLoading}
        loadingMessage="positioning satellites..."
        onRefreshPress={requestData}
        showError={showError}
      >
        <Screen backgroundColor={backgroundColor}>
          <Text style={styles.text}>Test</Text>
        </Screen>
      </ScreenPreloader>
    );
  }
}
