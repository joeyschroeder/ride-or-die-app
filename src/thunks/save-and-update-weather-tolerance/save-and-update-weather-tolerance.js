import { requestSaveWeatherToleranceEditable } from '../../store/weather-tolerance-editable/weather-tolerance-editable';
import { requestWeatherTolerance } from '../../store/weather-tolerance/weather-tolerance';
import { resetWeatherToleranceEditable } from '../reset-weather-tolerance-editable/reset-weather-tolerance-editable';

export const saveAndUpdateWeatherTolerance = () => async dispatch => {
  await dispatch(requestSaveWeatherToleranceEditable());
  await dispatch(requestWeatherTolerance());
  await dispatch(resetWeatherToleranceEditable());
};
