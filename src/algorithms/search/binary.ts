import { defaultCompare, Compare } from "../../util";
import { quick } from "../sort/quick";

export function binary(
  array: any[],
  target: any,
  compareFn: Function = defaultCompare
): number {
  const sortArray = quick(array);
  let low = 0;
  let high = array.length - 1;
  while(low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = sortArray[mid];
    if (compareFn(element, target) === Compare.LESS_THAN) {
      low = mid + 1;
    } else if (compareFn(element, target) === Compare.BIGGER_THAN) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

const binarySearchRecursive = (
  array: any[],
  target: any,
  low: number,
  high: number,
  compareFn: Function = defaultCompare
): number => {
  if(low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = array[mid];
    if(compareFn(element, target) === Compare.LESS_THAN) {
      return binarySearchRecursive(array, target, mid + 1, high, compareFn);
    }
    if(compareFn(element, target) === Compare.BIGGER_THAN) {
      return binarySearchRecursive(array, target, low, mid - 1, compareFn);
    }
    return mid;
  }
  return -1;
}
export function binaryRecursive(
  array: any[],
  target: any,
  compareFn: Function = defaultCompare
): number {
  const sortArray = quick(array);
  let low = 0;
  let high = array.length - 1;
  return binarySearchRecursive(sortArray, target, low, high, compareFn);
}
