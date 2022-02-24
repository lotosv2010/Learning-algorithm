import { defaultCompare, swap, Compare } from '../../util';

export function insertion(array: Array<number>, compareFn: Function = defaultCompare): Array<number> {
  console.time('插入排序耗时');
  const { length } = array;
  for (let i = 1; i < length; i++) {
    let j = i;
    const temp = array[i]; // 记录要插入的数据
    while(j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) { // 从已经排序的序列最右边的开始比较，找到比其小的数
      // console.log(temp, array[j - 1]);
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp; // 存在比其小的数，插入
    // console.log(`i ====> `, i, array);
  }
  console.timeEnd('插入排序耗时');
  return array;
}