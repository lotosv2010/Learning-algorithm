export function quick(array: Array<number>): Array<number> {
  console.time('快速排序耗时');
  const rec = (arr: Array<number>): Array<number> => {
    if(arr.length <= 1) { return arr; }
    const left = [];
    const right = [];
    const pivot = arr[0];
    for (let i = 1; i < arr.length; i++) {
      const temp = arr[i];
      temp < pivot ? left.push(temp) : right.push(temp);
    }
    return [...rec(left), pivot, ...rec(right)]
  }
  const result = rec(array);
  console.timeEnd('快速排序耗时');
  return result;
}