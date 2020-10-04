/* Util */
import array from "../util/arrayUtils";

// return the string or an empty string to simulate "void" ~50% of the time;
const returnStrOrVoid = (str: string): string => array.rndElem([str, ""]);

export default {
  optional: returnStrOrVoid,
};
