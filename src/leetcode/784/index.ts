// 时间复杂度：O(n!)
// 空间复杂度：O(n)
// const S = "a1b2";
export function letterCasePermutation(s: string): string[] {
  console.time('字母大小写全排列');
  const res: string[] = [];
  const dfs = (path: string, level: number) => {
    // 递归出所有选择
    while(!/[a-zA-z]/.test(s[level])) {
      path += s[level++];
    }
    if(path.length === s.length) { // 结束当前递归的条件
      res.push(path);
      return;
    }
    dfs(path + s[level].toLocaleLowerCase(), level + 1);
    dfs(path + s[level].toLocaleUpperCase(), level + 1);
  }
  dfs('', 0);
  console.timeEnd('字母大小写全排列');
  return res;
}
