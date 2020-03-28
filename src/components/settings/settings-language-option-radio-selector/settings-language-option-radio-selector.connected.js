import {
  selectSettingsEditableLanguageOption,
  updateSettingsEditableLanguageOption
} from '../../../store/settings-editable/settings-editable';

import { COLORS } from '../../../constants/styles/colors';
import { LANGUAGE_OPTIONS } from '../../../constants/language-options';
import { RadioSelector } from '../../radio-selector/radio-selector';
import { connect } from 'react-redux';

const OPTIONS = Object.keys(LANGUAGE_OPTIONS).map(key => LANGUAGE_OPTIONS[key]);

const mapStateToProps = state => ({
  options: OPTIONS,
  textColor: COLORS.TWITTER,
  value: selectSettingsEditableLanguageOption(state)
});

const mapDispatchToProps = {
  onToggle: updateSettingsEditableLanguageOption
};

export const SettingsLanguageOptionSelectorConnected = connect(mapStateToProps, mapDispatchToProps)(RadioSelector);
