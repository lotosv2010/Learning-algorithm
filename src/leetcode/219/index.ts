// 时间复杂度：O(n)
// 空间复杂度：O(n)
export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  console.time('存在重复元素 II');
  const map = new Map();
  for(let i = 0; i < nums.length; i++) {
    if(map.has(nums[i]) && Math.abs(map.get(nums[i]) - i) <= k) {
      console.timeEnd('存在重复元素 II');
      return true;
    }
    map.set(nums[i], i);
  }
  console.timeEnd('存在重复元素 II');
  return false;
};