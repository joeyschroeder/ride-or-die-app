import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from '../../constants/styles/colors';
import { CanRideMessageConnected } from '../can-ride-message/can-ride-message.connected';
import { CanRideWeatherSummaryConnected } from '../can-ride-weather-summary/can-ride-weather-summary.connected';
import PropTypes from 'prop-types';
import { Screen } from '../screen/screen';
import { ScreenPreloader } from '../screen-preloader/screen-preloader';

import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '../icon-button/icon-button';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start'
  },
  message: { flex: 1, justifyContent: 'flex-end' },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%'
  }
});

export class CanRideCurrentWeather extends Component {
  static propTypes = {
    backgroundColor: PropTypes.object,
    isLoading: PropTypes.bool,
    onSettingsPress: PropTypes.func,
    requestData: PropTypes.func,
    showError: PropTypes.bool
  };

  static defaultProps = {
    backgroundColor: COLORS.DANGER,
    isLoading: false,
    onSettingsPress: undefined,
    requestData: undefined,
    showError: false
  };

  constructor(props) {
    super(props);

    const { requestData } = props;
    requestData();
  }

  render() {
    const { backgroundColor, isLoading, onSettingsPress, requestData, showError } = this.props;

    return (
      <ScreenPreloader
        errorMessage="error getting current weather."
        isLoading={isLoading}
        loadingMessage="positioning satellites..."
        onRefreshPress={requestData}
        showError={showError}
      >
        <Screen backgroundColor={backgroundColor} style={styles.container}>
          <View>
            <CanRideWeatherSummaryConnected />
          </View>
          <View style={styles.message}>
            <CanRideMessageConnected />
          </View>
          <View style={styles.navigation}>
            <IconButton icon={faSlidersH} onPress={onSettingsPress} />
          </View>
        </Screen>
      </ScreenPreloader>
    );
  }
}
