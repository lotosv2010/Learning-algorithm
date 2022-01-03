// todo 两个数组的交
export function intersection(nums1: number[], nums2: number[]): number[] {
  const res =  [...new Set(nums1.filter(item => nums2.includes(item)))];
  return nums1.length > nums2.length ? res : res.reverse();
};

export function intersection2(nums1: number[], nums2: number[]): number[] {
  const res =  [...new Set(nums1)].filter(item => nums2.includes(item));
  return nums1.length > nums2.length ? res : res.reverse();
};