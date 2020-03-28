import { connect } from 'react-redux';
import { APP_ROUTE_NAMES } from '../../constants/app-route-names';
import { selectIsSettingsDirty } from '../../selectors/select-is-settings-dirty/select-is-settings-dirty';
import { Settings } from './settings';
import { saveAndUpdateSettings } from '../../thunks/save-and-update-settings/save-and-update-settings';
import { resetSettingsEditable } from '../../thunks/reset-settings-editable/reset-settings-editable';

const mapStateToProps = state => ({
  isSaving: false,
  isDirty: selectIsSettingsDirty(state)
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const { navigation } = ownProps;
  const { navigate } = navigation;

  return {
    goBack: () => navigate(APP_ROUTE_NAMES.CAN_RIDE_CURRENT_WEATHER),
    reset: () => dispatch(resetSettingsEditable()),
    save: () => dispatch(saveAndUpdateSettings())
  };
};

export const SettingsConnected = connect(mapStateToProps, mapDispatchToProps)(Settings);
