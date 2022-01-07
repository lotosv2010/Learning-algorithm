export function selection(arr: Array<number>): Array<number> {
  console.time('选择排序耗时');
  let minIndex;
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[j] <= arr[minIndex]) { // 寻找最小的数
        minIndex = j; // 将最小数的索引保存
      }
    }
    if(minIndex !== i) { // 最小值的下标和当前下标不相等时才交换
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // 元素交换
    }
  }
  console.timeEnd('选择排序耗时');
  return arr;
}