import { requestSettings } from '../../store/settings/settings';
import { requestSaveSettingsEditable } from '../../store/settings-editable/settings-editable';
import { resetSettingsEditable } from '../reset-settings-editable/reset-settings-editable';

export const saveAndUpdateSettings = () => async dispatch => {
  await dispatch(requestSaveSettingsEditable());
  await dispatch(requestSettings());
  await dispatch(resetSettingsEditable());
};
