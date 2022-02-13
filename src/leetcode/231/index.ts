// 时间复杂度：O(n)
// 空间复杂度：O(n)
export function isPowerOfTwo(n: number): boolean {
  console.time('2 的幂');
  const res = n > 0 && (n & (n - 1)) === 0;
  console.timeEnd('2 的幂');
  return res;
};