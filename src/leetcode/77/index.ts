// 时间复杂度：O(n!)
// 空间复杂度：O(n)
export function combine(n: number, k: number): number[][] {
  console.time('组合');
  const res: number[][] = [];
  const dfs = (path: number[], level: number) => { // level是枚举选择的起点 path是当前构建的路径（组合）
    if(path.length === k) { // 结束当前递归的条件
      res.push(path);
      return;
    }
    for (let i = level; i <= n; i++) { // 枚举出所有选择
      if(!path.includes(i)) {
        dfs(path.concat(i), i + 1); // 向下继续选择
      }
    }
  }
  dfs([], 1); // 递归的入口，从数字1开始选
  console.timeEnd('组合');
  return res;
};