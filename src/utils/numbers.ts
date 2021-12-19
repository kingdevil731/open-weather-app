/* UV Index
    calculate the percentage of a value
    eg. if 12 is the max value and the value is 5 then the percentage is 41.66666666666667%
  */
export const calculatePercentage = (max: number, value: number): number => {
  return Math.round((value / max) * 100);
};
