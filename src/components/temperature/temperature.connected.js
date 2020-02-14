import { TEMPERATURE_MEASUREMENTS } from '../../constants/temperature-measurements';
import { Temperature } from './temperature';
import { connect } from 'react-redux';
import { convertKelvinToCelsius } from '../../util/convert-kelvin-to-celsius/convert-kelvin-to-celsius';
import { convertKelvinToFahrenheit } from '../../util/convert-kelvin-to-fahrenheit/convert-kelvin-to-fahrenheit';
import { selectSettingsTemperatureMeasurement } from '../../store/settings/settings';

const mapStateToProps = (state, props) => {
  const { value } = props;

  const measurement = selectSettingsTemperatureMeasurement(state);
  const convertedValue =
    measurement === TEMPERATURE_MEASUREMENTS.FAHRENHEIT
      ? convertKelvinToFahrenheit(value)
      : convertKelvinToCelsius(value);

  const roundedValue = Math.round(convertedValue);

  return { value: roundedValue };
};

const mapDispatchToProps = undefined;

export const TemperatureConnected = connect(mapStateToProps, mapDispatchToProps)(Temperature);
