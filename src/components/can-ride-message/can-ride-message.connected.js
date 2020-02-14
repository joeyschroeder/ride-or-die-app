import { CanRideMessage } from './can-ride-message';
import { connect } from 'react-redux';
import { selectCanRide } from '../../selectors/select-can-ride/select-can-ride';

const mapStateToProps = state => ({
  canRide: selectCanRide(state)
});

const mapDispatchToProps = undefined;

export const CanRideMessageConnected = connect(mapStateToProps, mapDispatchToProps)(CanRideMessage);
