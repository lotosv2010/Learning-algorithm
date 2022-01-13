/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
export function checkInclusion(s1: string, s2: string): boolean {
  console.time('字符串的排列');
  const target = s1.split('').sort().join('');
  for (let i = 0; i < s2.length - s1.length + 1; i++) {
    const resource = s2.slice(i, s1.length + i).split('').sort().join('');
    if(target === resource) {
      console.timeEnd('字符串的排列');
      return true;
    };
  }
  console.timeEnd('字符串的排列');
  return false;
}

/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
export function checkInclusion1(s1: string, s2: string): boolean {
  console.time('字符串的排列');
  let arr1 = new Array(26).fill(0);
  let arr2 = new Array(26).fill(0);
  let left = 0;
  let right = 0;
  for (const c of s1) {
    const index = c.charCodeAt(0) - 97;
    arr1[index]++;
  }
  for (right = 0; right < s2.length; right++) {
    const index = s2[right].charCodeAt(0) - 97;
    arr2[index]++;
    // console.log(left, right, s2[left].charCodeAt(0) - 97, arr1[s2[left].charCodeAt(0) - 97], arr2[s2[left].charCodeAt(0) - 97])
    while(left <= right && arr1[s2[left].charCodeAt(0) - 97] < arr2[s2[left].charCodeAt(0) - 97]) {
      // console.log(arr1, arr2)
      arr2[s2[left].charCodeAt(0) - 97]--;
      left++;
    }
    // console.log(arr1, arr2)
    if(arr1.join('') === arr2.join('')) {
      console.timeEnd('字符串的排列');
      return true
    };
  }
  console.timeEnd('字符串的排列');
  return false;
}