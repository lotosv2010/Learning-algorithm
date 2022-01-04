// todo 两个数组的交
export function intersection(nums1: number[], nums2: number[]): number[] {
  const map = new Map();
  const res = [];
  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], true);
  }
  for (let i = 0; i < nums2.length; i++) {
    const val = nums2[i];
    if(map.has(val)) {
      res.push(val);
      map.delete(val);
    }
  }
  return res;
};