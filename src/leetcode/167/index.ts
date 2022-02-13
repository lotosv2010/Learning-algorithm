/**
 * 给定一个已按照 非递减顺序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 。
 * 函数应该以长度为 2 的整数数组的形式返回这两个数的下标值。numbers 的下标 从 1 开始计数 ，
 * 所以答案数组应当满足 1 <= answer[0] < answer[1] <= numbers.length 。
 * 你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。
 * 
 * 时间复杂度：O(n)，其中 n 是数组的长度。两个指针移动的总次数最多为 n 次。
 * 空间复杂度：O(1)。
 */
export function twoSum(numbers: number[], target: number): number[] {
  console.time('两数之和 II - 输入有序数组');
  let left: number = 0;
  let right: number = numbers.length - 1;
  let res: number[] = [];
  while(left < right) {
    const sum: number = numbers[left] + numbers[right];
    // console.log(left, right, sum)
    if(sum === target) {
      res = [left + 1, right + 1];
      break;
    } else if (sum < target) {
      left++
    } else {
      right--;
    }
  }
  console.timeEnd('两数之和 II - 输入有序数组')
  return res
};