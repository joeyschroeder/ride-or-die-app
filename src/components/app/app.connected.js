import { selectLocationLatitude, selectLocationLongitude } from '../../store/location/location';

import { App } from './app';
import { connect } from 'react-redux';
import { initializeApp } from '../../thunks/initialize-app/initialize-app';
import { selectCanRide } from '../../selectors/select-can-ride/select-can-ride';

const mapStateToProps = state => ({
  canRide: selectCanRide(state),
  latitude: selectLocationLatitude(state),
  longitude: selectLocationLongitude(state)
});

const mapDispatchToProps = {
  initializeApp
};

export const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);
