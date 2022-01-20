// 时间复杂度：O(logn)。循环次数等于 n 的二进制位中 1 的个数，最坏情况下 n 的二进制位全部为 1。我们需要循环 logn 次。
// 空间复杂度：O(1)，我们只需要常数的空间保存若干变量。
export function hammingWeight(n: number): number {
  console.time('位1的个数');
  let ret = 0;
  while (n) {
    n &= n - 1;
    ret++;
  }
  console.timeEnd('位1的个数');
  return ret;
};