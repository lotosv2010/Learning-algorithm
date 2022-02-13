export function binary(arr: any[], target: any): number {
  console.time('二分搜索');
  const sec = (arr: any[], target: any, s:number = 0 , e: number = arr.length - 1): number => {
    if (s > e) { // 新增否则找不到进入死循环了
      return -1;
    }
    let start = s || 0;
    let end = e || arr.length - 1;
    const middle = Math.floor((start + end) / 2);
    if(arr[middle] === target) {
      return middle;
    }
    if(arr[middle] > target) { // 左侧
      end = end - 1;
      return sec(arr, target, start, end);
    } else {
      start = middle + 1;
      return sec(arr, target, start, end);
    }
  }
  const res = sec(arr, target);
  console.timeEnd('二分搜索');
  return res;
}

export function binary1(arr: any[], target: any, start:number = 0 , end: number = arr.length - 1): number {
  console.time('二分搜索');
  while(start <= end) {
    const middle = Math.floor((start + end) / 2);
    if(arr[middle] === target) {
      console.timeEnd('二分搜索');
      return middle;
    }
    if(arr[middle] > target) { // 左侧
      end = end - 1;
    } else {
      start = middle + 1;
    }
  }
  console.timeEnd('二分搜索');
  return -1;
}