export const defaultEquals = (a: any, b: any) => {
  return a === b
}

export const lesserEquals = (a: any, b: any, compareFn: Function) => {
  const comp = compareFn(a, b);
  return comp === Compare.LESS_THAN || comp === Compare.EQUAL;
}

export const biggerEquals = (a: any, b: any, compareFn: Function) => {
  const comp = compareFn(a, b);
  return comp === Compare.BIGGER_THAN || comp === Compare.EQUAL;
}

export const defaultDiff = (a: any, b: any) => {
  return Number(a) - Number(b);
}

export enum Compare {
  LESS_THAN = -1,
  BIGGER_THAN = 1,
  EQUAL = 0
}

export const DOES_NOT_EXIST = -1;

export const defaultCompare = (a: any, b: any) => {
  if(a === b) {
    return Compare.EQUAL;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export const defaultToString = (item: any) => {
  if(item === null) {
    return 'NULL';
  } else if(item === undefined) {
    return 'UNDEFINED';
  } else if(typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}

export enum BalanceFactor {
  UNBALANCED_RIGHT = 1,
  SLIGHTLY_UNBALANCED_RIGHT = 2,
  BALANCED = 3,
  SLIGHTLY_UNBALANCED_LEFT = 4,
  UNBALANCED_LEFT = 5
}

export function swap(array: any[], a: number, b: number) {
  /* const temp = array[a];
  array[a] = array[b];
  array[b] = temp; */
  [array[a], array[b]] = [array[b], array[a]];
}

export function reverseCompare(compareFn: Function): Function {
  return (a: any, b: any) => compareFn(b, a);
}

export function findMaxValue(array: any[], compareFn: Function = defaultCompare) {
  if(array && array.length) {
    let max = array[0];
    for (let i = 1; i < array.length; i++){
      if(compareFn(max, array[i]) === Compare.LESS_THAN) {
        max = array[i];
      }
    }
    return max;
  }
  return undefined;
}

export function findMinValue(array: any[], compareFn: Function = defaultCompare) {
  return findMaxValue(array, reverseCompare(compareFn));
}