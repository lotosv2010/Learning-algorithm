export function bubble(arr: Array<number>): Array<number> {
  console.time('冒泡排序耗时');
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if(arr[j] > arr[j + 1]) { // 相邻元素两两对比
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]; // 元素交换
      }
    }
  }
  console.timeEnd('冒泡排序耗时');
  return arr;
}