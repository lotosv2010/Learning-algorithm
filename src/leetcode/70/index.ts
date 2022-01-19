// 时间复杂度：O(n)
// 空间复杂度：O(1)
export function climbStairs(n: number): number {
  console.time('爬楼梯');
  if(n <= 2) return n;
  let step0 = 1;
  let step1 = 1;
  for(let i = 2; i <= n; i++) {
    const temp = step0;
    step0 = step1;
    step1 = step0 + temp;
  }
  console.timeEnd('爬楼梯');
  return step1;
};