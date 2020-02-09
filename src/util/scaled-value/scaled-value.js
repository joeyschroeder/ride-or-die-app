import { DIMENSIONS } from '../../constants/dimensions';

export const scaledValue = value => {
  // areaConstant is arbitrarily based off of the
  // iPhone X (375 x 812); this value is used as
  // the 100% base for all other values to be
  // scaled proportionately;

  // const areaConstant = 304500;
  // const area = width * height;
  // const scaleAmount = area / areaConstant;

  // using width instead of area to prevent such
  // a significant amount of scaling

  // const widthConstant = 375;
  // const scaleAmount = width / widthConstant;

  // using height instead of area to prevent such
  // a significant amount of scaling

  const heightConstant = 812;
  const scaleAmount = DIMENSIONS.HEIGHT / heightConstant;

  const result = value * scaleAmount;

  return Math.round(result);
};
