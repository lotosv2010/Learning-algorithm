/**
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
export function reverseWords(s: string): string {
  console.time('反转字符串中的单词 III');
  const arr = s.split(' ');
  for (let i = 0; i < arr.length; i++) {
    const el: string[] = arr[i].split('');
    let left = 0;
    let right = el.length - 1;
    while(left < right) {
      [el[left++], el[right--]] = [el[right], el[left]];
    }
    arr[i] = el.join('')
  }
  console.timeEnd('反转字符串中的单词 III');
  return arr.join(' ')
};