// https://openweathermap.org/weather-conditions

// these groups are discretionarily assembled to determine
// if a weather condition id meets a user's riding condition
// tolerance
export const WEATHER_CONDITION_ID_GROUPS = {
  CLEAR: [800],
  CLOUDS_FEW: [801],
  CLOUDS_OVERCAST: [803, 804],
  CLOUDS_SCATTERED: [802],
  DRIZZLE: [300, 301, 302, 310, 311, 312, 313, 314, 321],
  EXTREME_STORMS: [771, 781],
  MIST: [701, 711, 721, 731, 741, 751, 761, 762],
  RAIN: [500, 501, 502, 503, 504, 511, 520, 521, 522, 531],
  SNOW: [600, 601, 602, 611, 612, 615, 616, 620, 621, 622],
  THUNDERSTORM: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232]
};
