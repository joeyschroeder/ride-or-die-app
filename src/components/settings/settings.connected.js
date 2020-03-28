import { connect } from 'react-redux';
import { APP_ROUTE_NAMES } from '../../constants/app-route-names';
import { selectIsSettingsDirty } from '../../selectors/select-is-settings-dirty/select-is-settings-dirty';
import { Settings } from './settings';
import { resetSettingsScreen } from '../../thunks/reset-settings-screen/reset-settings-screen';
import { selectIsWeatherToleranceDirty } from '../../selectors/select-is-weather-tolerance-dirty/select-is-weather-tolerance-dirty';
import { saveSettingsScreen } from '../../thunks/save-settings-screen/save-settings-screen';

const mapStateToProps = state => ({
  isSaving: false,
  isDirty: selectIsSettingsDirty(state) || selectIsWeatherToleranceDirty(state)
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const { navigation } = ownProps;
  const { navigate } = navigation;

  return {
    goBack: () => navigate(APP_ROUTE_NAMES.CAN_RIDE_CURRENT_WEATHER),
    reset: () => dispatch(resetSettingsScreen()),
    save: () => dispatch(saveSettingsScreen())
  };
};

export const SettingsConnected = connect(mapStateToProps, mapDispatchToProps)(Settings);
