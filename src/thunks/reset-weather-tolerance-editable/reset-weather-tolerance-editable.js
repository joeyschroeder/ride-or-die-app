import { selectWeatherTolerance } from '../../store/weather-tolerance/weather-tolerance';
import { updateWeatherToleranceEditable } from '../../store/weather-tolerance-editable/weather-tolerance-editable';

export const resetWeatherToleranceEditable = () => async (dispatch, getState) => {
  const state = getState();
  const settings = selectWeatherTolerance(state);

  await dispatch(updateWeatherToleranceEditable(settings));
};
