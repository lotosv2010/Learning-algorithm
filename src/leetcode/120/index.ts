// 时间复杂度：O(n)
// 空间复杂度：O(n)
export function minimumTotal(triangle: number[][]): number {
  console.time('三角形最小路径和');
  const dp = triangle.map(item => item.map(i => i));
  for (let i = triangle.length - 2; i >=0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[i][j] = triangle[i][j] + Math.min(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }
  console.timeEnd('三角形最小路径和');
  return dp[0][0];
};