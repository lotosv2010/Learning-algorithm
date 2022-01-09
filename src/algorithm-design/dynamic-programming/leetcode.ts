// todo 爬楼梯
// 方法一
// ○ 时间复杂度：O(n)
// ○ 空间复杂度：O(n)
export function climbStairs(n: number): number {
  if (n <= 2) return n;
  const dp = [1, 1]; // 默认阶梯即n为0和1时的方法个数
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i-1]+dp[i-2];
  }
  return dp[n];
};

// 方法二
// ○ 时间复杂度：O(n)
// ○ 空间复杂度：O(1)
export function climbStairs2(n: number): number {
  if (n <= 2) return n;
  let dp0 = 1, dp1 = 1; // 默认阶梯即n为0和1时的方法个数
  for (let i = 2; i <= n; i++) {
    const temp = dp0;
    dp0 = dp1;
    dp1 = dp1 + temp;
  }
  return dp1;
};

// todo 打家劫舍
// 方法一
// ○ 时间复杂度：O(n)
// ○ 空间复杂度：O(n)
export function rob(nums: number[]): number {
  console.time('打家劫舍耗时');
  if (!nums.length) return 0;
  const dp: any[] = [0, nums[0]]; // 默认阶梯即n为0和1时的方法个数
  for (let i = 2; i <= nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1]);
  }
  console.timeEnd('打家劫舍耗时');
  return dp.pop();
};

// 方法二
// ○ 时间复杂度：O(n)
// ○ 空间复杂度：O(1)
export function rob2(nums: number[]): number {
  console.time('打家劫舍耗时');
  if (!nums.length) return 0;
  let dp0 = 0, dp1 = nums[0]; // 默认阶梯即n为0和1时的方法个数
  for (let i = 2; i <= nums.length; i++) {
    const dp2 = Math.max(dp0 + nums[i - 1], dp1);
    dp0 = dp1;
    dp1 = dp2;
  }
  console.timeEnd('打家劫舍耗时');
  return dp1;
};