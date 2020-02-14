import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from '../../constants/styles/colors';
import { CanRideMessageConnected } from '../can-ride-message/can-ride-message.connected';
import PropTypes from 'prop-types';
import { Screen } from '../screen/screen';
import { ScreenPreloader } from '../screen-preloader/screen-preloader';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start'
  },
  message: { flex: 1, justifyContent: 'flex-end' }
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
        <Screen backgroundColor={backgroundColor} style={styles.container}>
          <View style={styles.message}>
            <CanRideMessageConnected />
          </View>
        </Screen>
      </ScreenPreloader>
    );
  }
}
