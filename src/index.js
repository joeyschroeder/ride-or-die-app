import { AppLoading, registerRootComponent } from 'expo';
import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { configureStore } from './util/configure-store/configure-store';
import { AppConnected } from './components/app/app.connected';

const store = configureStore();

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { appReady: false };
  }

  componentDidMount() {
    this.setState({ appReady: true });
  }

  render() {
    const { appReady } = this.state;

    if (!appReady) return <AppLoading />;

    return (
      <Provider store={store}>
        <AppConnected />
      </Provider>
    );
  }
}

registerRootComponent(Main);
