export function sequence(arr: any[], target: any): number {
  console.time('顺序搜索');
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element === target) {
      console.timeEnd('顺序搜索');
      return i;
    }
  }
  console.timeEnd('顺序搜索');
  return -1;
}