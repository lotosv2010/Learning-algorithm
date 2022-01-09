// todo 全排列
export function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const backtrack = (path: number[]) => {
    // console.log(path, res)
    if(path.length === nums.length) {
      res.push(path);
      return;
    }
    nums.forEach(n => {
      // console.log('n', n)
      if(path.includes(n)) return;
      backtrack(path.concat(n));
    });
  }
  backtrack([]);
  return res;
};

// todo 子集
export function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const backtrack = (path: number[], l: number, start: number) => {
    if(path.length === l) { // 递归结束条件
      res.push(path);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      backtrack(path.concat(nums[i]), l, i + 1);
    }
  }
  for (let i = 0; i <= nums.length; i++) {
    backtrack([], i, 0);
  }
  return res;
};