// 时间复杂度：O(n!)
// 空间复杂度：O(1)
export function permute(nums: number[]): number[][] {
  console.time('全排列');
  const res: number[][] = [];
  const dfs = (path: number[]) => {
    if(path.length === nums.length) { // 递归结束条件
      res.push([...path]); // path为引用类型这里要使用浅拷贝，返回一个新数组，防止输出结果都为空
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      const n = nums[i];
      if(!path.includes(n)) {
        path.push(n);
        dfs(path);
        path.pop();
      }
    }
  }
  
  dfs([]);
  console.timeEnd('全排列');
  return res;
}
