import { connect } from 'react-redux';
import { App } from './app';
import { requestLocation, selectLocationLatitude, selectLocationLongitude } from '../../store/location/location';

const mapStateToProps = state => ({
  latitude: selectLocationLatitude(state),
  longitude: selectLocationLongitude(state)
});

const mapDispatchToProps = {
  requestLocation
};

export const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);
