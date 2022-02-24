import { findMaxValue } from '../../util';

export function counting(array: any[]) {
  if(array.length < 2) return array;
  const maxValue = findMaxValue(array); // 最大值
  let sortedIndex = 0;
  const counts = new Array(maxValue + 1);
  array.forEach(v => {
    if(!counts[v]) {
      counts[v] = 0;
    }
    counts[v]++;
  });
  counts.forEach((v, i) => {
    while(v > 0) {
      array[sortedIndex++] = i;
      v--;
    }
  });
  return array;
}