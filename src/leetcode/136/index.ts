export function singleNumber(nums: number[]): number {
  const map = new Map();
  let res: any = null;
  for(let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const val = map.get(n) || 0;
    map.set(n, val + 1);
  }
  map.forEach((value, key) => {
    if(value === 1) return res = key;
  });
  return res;
};

export function singleNumber2(nums: number[]): number {
  return nums.reduce((pre, cur) => pre ^= cur, 0)
};