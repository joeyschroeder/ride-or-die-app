import { selectLocationLatitude, selectLocationLongitude } from '../../store/location/location';

import { App } from './app';
import { connect } from 'react-redux';
import { initializeApp } from '../../thunks/initialize-app/initialize-app';

const mapStateToProps = state => ({
  latitude: selectLocationLatitude(state),
  longitude: selectLocationLongitude(state)
});

const mapDispatchToProps = {
  initializeApp
};

export const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);
