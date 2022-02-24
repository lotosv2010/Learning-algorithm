import { Compare, defaultCompare } from '../../util';

export function shell(array: any[], compareFn: Function = defaultCompare) {
  let increment = Math.floor(array.length / 2);
  
  while (increment > 0) {
    for (let i = increment; i < array.length; i++) {
      let j = i;
      const temp = array[i];
      while (j >= increment && compareFn(array[j - increment], temp) === Compare.BIGGER_THAN) {
        array[j] = array[j - increment];
        j -= increment;
      }
      array[j] = temp;
    }
    increment = Math.floor(increment / 2);
  }
  return array;
}
