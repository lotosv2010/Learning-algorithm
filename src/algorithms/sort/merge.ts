export function merge(arr: Array<number>): Array<number> {
  console.time('归并排序耗时');
  const rec = (arr: Array<number>): Array<number> => {
    if(arr.length < 2) return arr;
    // 分
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle, arr.length);

    // 合
    const sortLeft: Array<number> = rec(left);
    const sortRight: Array<number> = rec(right);
    const res: Array<number> = [];
    while(sortLeft.length || sortRight.length) {
      if(sortLeft.length && sortRight.length) {
        res.push((sortLeft[0] < sortRight[0] ? sortLeft.shift() : sortRight.shift()) as number);
      } else if(sortLeft.length) {
        res.push(sortLeft.shift() as number);
      } else if(sortRight.length) {
        res.push(sortRight.shift() as number);
      }
    }
    return res;
  }
  const result = rec(arr);
  console.timeEnd('归并排序耗时');
  return result;
}