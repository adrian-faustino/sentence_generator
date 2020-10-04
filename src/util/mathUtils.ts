// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomIntInclusive = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRndArrayIndex = (arr: any[]): number => {
  const index = getRandomIntInclusive(0, arr.length - 1);
  return index;
};

export default {
  rndInt: getRandomIntInclusive,
  rndIndex: getRndArrayIndex,
};
