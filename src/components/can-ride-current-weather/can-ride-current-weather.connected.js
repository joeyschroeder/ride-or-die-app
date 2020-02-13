import {
  selectRequestsAreRunning,
  selectRequestsHaveAllSucceeded
} from '../../store/request-tracking/request-tracking';

import { COLORS } from '../../constants/styles/colors';
import { REQUEST_PREFIX as CURRENT_WEATHER_REQUEST_PREFIX } from '../../store/current-weather/current-weather';
import { CanRideCurrentWeather } from './can-ride-current-weather';
import { REQUEST_PREFIX as LOCATION_REQUEST_PREFIX } from '../../store/location/location';
import { connect } from 'react-redux';
import { initializeApp } from '../../thunks/initialize-app/initialize-app';
import { selectCanRide } from '../../selectors/select-can-ride/select-can-ride';

const mapStateToProps = state => {
  const isLoading = selectRequestsAreRunning(state, [CURRENT_WEATHER_REQUEST_PREFIX, LOCATION_REQUEST_PREFIX]);
  const allRequestsSucceeded = selectRequestsHaveAllSucceeded(state, [CURRENT_WEATHER_REQUEST_PREFIX]);

  const showError = !isLoading && !allRequestsSucceeded;

  const canRide = selectCanRide(state);
  const backgroundColor = canRide ? COLORS.SUCCESS : COLORS.DANGER;

  return {
    backgroundColor,
    isLoading: selectRequestsAreRunning(state, [CURRENT_WEATHER_REQUEST_PREFIX, LOCATION_REQUEST_PREFIX]),
    showError
  };
};

const mapDispatchToProps = {
  requestData: initializeApp
};

export const CanRideCurrentWeatherConnected = connect(mapStateToProps, mapDispatchToProps)(CanRideCurrentWeather);
