/**
 * 时间复杂度：O(1)
 * 空间复杂度：O(1)
 */
export function totalMoney(n: number): number {
  console.time('计算力扣银行的钱');
  const week = Math.floor(n / 7);
  const day = n % 7;
  let sum = 0;
  // sn=na1+n(n-1)d/2
  if(week < 1) return (n * 1) + n * (n - 1) / 2;
  sum = (28 * week) + week * (week - 1) * 7 / 2;
  for(let d = 1; d <= day; d++) {
    sum += (week + d);
  }
  console.timeEnd('计算力扣银行的钱')
  return sum;
};