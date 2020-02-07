import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PropTypes from 'prop-types';

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
    initializeApp: PropTypes.func
  };

  static defaultProps = {
    latitude: null,
    longitude: null,
    initializeApp: () => {}
  };

  componentDidMount() {
    const { initializeApp } = this.props;
    initializeApp();
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
