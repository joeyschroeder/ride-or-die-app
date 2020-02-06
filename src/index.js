import { AppLoading, registerRootComponent } from 'expo';
import React, { Component } from 'react';

import { App } from './components/app/app';
import { Provider } from 'react-redux';
import { configureStore } from './util/configure-store/configure-store';
import { getWeatherByGeographicCoordinates } from './services/weather/weather';
import { getLocation } from './services/location/location';
import { getLocationPermissions } from './services/permissions/permissions';

const store = configureStore();

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { appReady: false };
  }

  async componentDidMount() {
    this.setState({ appReady: true });
    const location = await getLocation();
    console.log('location: ', location);
  }

  render() {
    const { appReady } = this.state;

    if (!appReady) return <AppLoading />;

    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

registerRootComponent(Main);
