import { AppLoading, registerRootComponent } from 'expo';
import React, { Component } from 'react';

import { App } from './components/app/app';
import GothamRoundedBold from './fonts/gotham-rounded/gotham-rounded-bold.otf';
import GothamRoundedBoldItalic from './fonts/gotham-rounded/gotham-rounded-bold-italic.otf';
import GothamRoundedBook from './fonts/gotham-rounded/gotham-rounded-book.otf';
import GothamRoundedBookItalic from './fonts/gotham-rounded/gotham-rounded-book-italic.otf';
import GothamRoundedLight from './fonts/gotham-rounded/gotham-rounded-light.otf';
import GothamRoundedLightItalic from './fonts/gotham-rounded/gotham-rounded-light-italic.otf';
import GothamRoundedMedium from './fonts/gotham-rounded/gotham-rounded-medium.otf';
import GothamRoundedMediumItalic from './fonts/gotham-rounded/gotham-rounded-medium-italic.otf';
import { Provider } from 'react-redux';
import WeatherIcons from './fonts/weather-icons/weather-icons-regular.ttf';
import { configureStore } from './util/configure-store/configure-store';
import { loadAsync } from 'expo-font';

const FONT_ASSETS = [
  { 'gotham-rounded-bold': GothamRoundedBold },
  { 'gotham-rounded-bold-italic': GothamRoundedBoldItalic },
  { 'gotham-rounded-book': GothamRoundedBook },
  { 'gotham-rounded-book-italic': GothamRoundedBookItalic },
  { 'gotham-rounded-light': GothamRoundedLight },
  { 'gotham-rounded-light-italic': GothamRoundedLightItalic },
  { 'gotham-rounded-medium': GothamRoundedMedium },
  { 'gotham-rounded-medium-italic': GothamRoundedMediumItalic },
  { 'weather-icons': WeatherIcons }
];

const store = configureStore();

export class Main extends Component {
  static loadFontAssets() {
    const fontPromises = FONT_ASSETS.map(font => loadAsync(font));
    return Promise.all([...fontPromises]);
  }

  constructor(props) {
    super(props);
    this.state = { appReady: false };
  }

  async componentDidMount() {
    await Main.loadFontAssets();
    this.setState({ appReady: true });
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
