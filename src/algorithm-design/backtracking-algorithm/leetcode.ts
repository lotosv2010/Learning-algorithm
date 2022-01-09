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