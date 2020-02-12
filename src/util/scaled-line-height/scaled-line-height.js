import { scaledValue } from '../scaled-value/scaled-value';

export const scaledLineHeight = value => {
  // this is used to adjust the line height of
  // "Gotham Rounded" font because it's not
  // quite centered vertically when line-height
  // matches font-size

  return scaledValue(value + 3);
};
