/**
 * 时间复杂度：O(C×n)，其中 n 是给定，C 表示元音字母的数量，在本题中 C = 5
 * 空间复杂度：O(C)，我们只需要常数个空间存储不同组的数目
 */
export function countVowelPermutation(n: number): number {
  console.time('统计元音字母序列的数目');
  // 0: a -> e
  // 1: e -> a / i
  // 2: i -> a / e / o / u
  // 3: o -> i / u
  // 4: u -> a
  let mod = Number(1e9 + 7);
  // dp[i][j]:  长度为i，且末尾元素为j
  // let lts = ['a','e','i','o','u'];
  let dp = new Array(2).fill(0).map(i => new Array(5).fill(1));
  for (let i=2; i<=n; i++) {
      dp[1][0] = (dp[0][1] + dp[0][2] + dp[0][4]) % mod;
      dp[1][1] = (dp[0][0] + dp[0][2]) % mod;
      dp[1][2] = (dp[0][1] + dp[0][3]) % mod;
      dp[1][3] = dp[0][2];
      dp[1][4] = (dp[0][2] + dp[0][3]) % mod;
      [dp[0], dp[1]] = [dp[1], dp[0]];
  }
  const res = dp[0].reduce((a,i) => (a+i) % mod);
  console.timeEnd('统计元音字母序列的数目');
  return res;
};
