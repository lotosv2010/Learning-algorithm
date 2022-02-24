import {
  Compare,
  defaultCompare,
  defaultEquals,
  defaultDiff,
  biggerEquals,
  lesserEquals,
  DOES_NOT_EXIST,
} from "../../util";

export function interpolation(
  array: any[],
  target: any,
  compareFn = defaultCompare,
  equalsFn = defaultEquals,
  diffFn = defaultDiff
) {
  const { length } = array;
  let low = 0;
  let high = length - 1;
  let position = -1;
  let delta = -1;
  while (
    low <= high &&
    biggerEquals(target, array[low], compareFn) &&
    lesserEquals(target, array[high], compareFn)
  ) {
    delta = diffFn(target, array[low]) / diffFn(array[high], array[low]);
    position = low + Math.floor((high - low) * delta);
    if(equalsFn(array[position], target)) {
      return position;
    }
    if(compareFn(array[position], target) === Compare.LESS_THAN) {
      low = position + 1;
    } else {
      high = position - 1;
    }
  }
  return DOES_NOT_EXIST;
}
