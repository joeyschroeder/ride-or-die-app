import { TIMES_OF_DAY } from '../../constants/times-of-day';

export const getTimeOfDay = ({ sunrise, sunset, time }) => {
  if (time < sunrise) return TIMES_OF_DAY.NIGHT;
  if (time < sunset) return TIMES_OF_DAY.DAY;

  return TIMES_OF_DAY.NIGHT;
};
