// 时间复杂度：O(n!)
// 空间复杂度：O(1)

export function combine(n: number, k: number): number[][] {
  console.time('组合');
  const res: number[][] = [];
  const dfs = (path: number[], level: number) => {
    if(path.length === k) {
      res.push(path);
      return;
    }
    for (let i = level; i <= n; i++) {
      if(!path.includes(i)) {
        dfs(path.concat(i), i + 1);
      }
    }
  }
  dfs([], 1);
  console.timeEnd('组合');
  return res;
}
