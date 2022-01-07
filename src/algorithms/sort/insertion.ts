export function insertion(arr: Array<number>): Array<number> {
  console.time('插入排序耗时');
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i]; // 记录要插入的数据
    let j = i;
    while(j > 0) { // 从已经排序的序列最右边的开始比较，找到比其小的数
      if(arr[j - 1] > temp) {
        arr[j] = arr[j - 1];
      } else {
        break;
      }
      j--;
    }
    // 存在比其小的数，插入
    if (j != i) {
      arr[j] = temp;
    }
  }
  console.timeEnd('插入排序耗时');
  return arr;
}