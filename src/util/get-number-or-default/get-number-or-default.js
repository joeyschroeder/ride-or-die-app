export const getNumberOrDefault = (value, defaultValue) => {
  const isNumber = typeof value === 'number';
  if (isNumber) return value;

  return defaultValue;
};
