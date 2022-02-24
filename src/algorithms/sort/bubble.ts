import { defaultCompare, swap, Compare } from '../../util'

export function bubble(array: Array<number>, compareFn: Function = defaultCompare): Array<number> {
  console.time('冒泡排序耗时');
  const { length } = array;
  for (let i = 0; i < length; i++) {
    for (let j = 1; j < length - i; j++){
      // console.log(array[j-1], array[j])
      if(compareFn(array[j - 1], array[j]) === Compare.BIGGER_THAN) {
        swap(array, j - 1, j);
      }
    }
    // console.log(`i====`, i)
  }
  console.timeEnd('冒泡排序耗时');
  return array;
}