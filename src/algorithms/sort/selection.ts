import { defaultCompare, swap, Compare } from '../../util'

export function selection(array: Array<number>, compareFn: Function = defaultCompare): Array<number> {
  console.time('选择排序耗时');
  let minIndex;
  const { length } = array;
  for (let i = 0; i < length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < length; j++) {
      // console.log(array[minIndex], array[j]);
      if(compareFn(array[minIndex], array[j]) === Compare.BIGGER_THAN) {
        minIndex = j;
      }
    }
    if(i !== minIndex) {
      swap(array, i, minIndex);
    }
    // console.log(`i ===> `, i);
  }
  console.timeEnd('选择排序耗时');
  return array;
}