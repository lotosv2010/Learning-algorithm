// 时间复杂度：O(n)
// 空间复杂度：O(n)
export function rob(nums: number[]): number {
  console.time('打家劫舍');
  if(!nums.length) return 0;
  let dp: number[] = [0, nums[0]];
  for(let i = 2; i <= nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1]);
  }
  console.timeEnd('打家劫舍');
  return dp.pop() as number;
};