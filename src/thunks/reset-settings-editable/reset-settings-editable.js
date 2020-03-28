import { selectSettings } from '../../store/settings/settings';
import { updateSettingsEditable } from '../../store/settings-editable/settings-editable';

export const resetSettingsEditable = () => async (dispatch, getState) => {
  const state = getState();
  const settings = selectSettings(state);

  await dispatch(updateSettingsEditable(settings));
};
