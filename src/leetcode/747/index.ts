/**
 * 给你一个整数数组 nums ，其中总是存在 唯一的 一个最大整数 。
 * 请你找出数组中的最大元素并检查它是否 至少是数组中每个其他数字的两倍 。如果是，则返回 最大元素的下标 ，否则返回 -1 。
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
// 遍历
export function dominantIndex(nums: number[]): number {
  console.time('字符串的排列');
  let max = -1;
  let subMax = -1;
  let index = -1;
  for(let i = 0; i< nums.length; i++) {
    if(nums[i] > max) {
      [max, subMax] = [nums[i], max];
      index = i;
    } else if(nums[i] > subMax) {
      subMax = nums[i];
    }
  }
  console.timeEnd('字符串的排列');
  return max >= subMax * 2 ? index : -1;
}
/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
// API
export function dominantIndex1(nums: number[]): number {
  console.time('字符串的排列');
  const pow = nums.map(n => 2 * n);
  pow.sort((a, b) => a - b);
  const max = pow.pop() as number / 2;
  console.timeEnd('字符串的排列');
  return pow.some(n => n > max) ? -1 : nums.findIndex(n => n === max);
};


