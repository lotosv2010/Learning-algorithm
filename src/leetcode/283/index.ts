/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums: number[]): number[] {
  console.time('移动零');
  let left: number = 0;
  let right: number = 0;
  for (let i = 0; i < nums.length; i++) {
    if(nums[i]) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
  console.timeEnd('移动零');
  return nums;
}