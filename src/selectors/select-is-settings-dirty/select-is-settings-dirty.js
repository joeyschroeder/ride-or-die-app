import { selectSettings } from '../../store/settings/settings';
import { selectSettingsEditable } from '../../store/settings-editable/settings-editable';
import { isEqual } from 'lodash';

export const selectIsSettingsDirty = (state = {}) => {
  const settings = selectSettings(state);
  const settingsEditable = selectSettingsEditable(state);

  return !isEqual(settings, settingsEditable);
};
