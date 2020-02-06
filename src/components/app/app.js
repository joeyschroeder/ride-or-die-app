import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import React, { Component } from 'react';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});

export class App extends Component {
  static propTypes = {
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    requestLocation: PropTypes.func
  };

  static defaultProps = {
    latitude: null,
    longitude: null,
    requestLocation: () => {}
  };

  componentDidMount() {
    const { requestLocation } = this.props;
    requestLocation();
  }

  render() {
    const { latitude, longitude } = this.props;

    return (
      <View style={styles.container}>
        <Text>latitude: {latitude}</Text>
        <Text>longitude: {longitude}</Text>
      </View>
    );
  }
}
