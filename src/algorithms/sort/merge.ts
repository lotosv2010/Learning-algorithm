import { defaultCompare, swap, Compare } from '../../util';

const mergeSort = (left: Array<number>, right: Array<number>, compareFn: Function) => {
  const result: number[] = [];
  let l = 0;
  let r = 0;
  while(l < left.length && r < right.length) {
    result.push(compareFn(left[l], right[r]) === Compare.BIGGER_THAN ? right[r++] : left[l++])
  }
  return result.concat(l < left.length ? left.slice(l) : right.slice(r));
}

export function merge(array: Array<number>, compareFn: Function = defaultCompare): Array<number> {
  if(array.length > 1) {
    // 分
    const { length } = array;
    const middle = Math.floor(length / 2);
    const left = merge(array.slice(0, middle), compareFn);
    const right = merge(array.slice(middle), compareFn);
    // 合
    array = mergeSort(left, right, compareFn);
  }
  return array;
}