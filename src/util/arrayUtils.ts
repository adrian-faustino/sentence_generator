/* Util */
import math from "./mathUtils";

const getRndElem = (arr: string[]): string => {
  const index = math.rndIndex(arr);
  return arr[index];
};

export default {
  rndElem: getRndElem,
};
