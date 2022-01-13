/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 时间复杂度：O(n)
 * 空间复杂度：O(m)，m为最大不重复子串的长度
 */
export function lengthOfLongestSubstring(s: string): number {
  console.time('无重复字符的最长子串');
  const set = new Set();
  let maxLen = 0;
  let left = 0;  // 左指针
  let right = 0; // 右指针
  for (right = 0; right < s.length; right++) {
    if(!set.has(s[right])) {
      set.add(s[right]);
      maxLen = Math.max(maxLen, set.size);
    } else {
      while(set.has(s[right])) { // 移动左指针到重复元素的下一个位置
        set.delete(s[left]);
        left++;
      }
      set.add(s[right]);
    }
  }
  console.timeEnd('无重复字符的最长子串');
  return maxLen;
}