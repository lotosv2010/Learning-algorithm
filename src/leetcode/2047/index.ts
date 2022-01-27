/**
 * 时间复杂度：O(k)
 * 空间复杂度：O(1)
 */
export function countValidWords(sentence: string): number {
  console.time('句子中的有效单词数');
  const reg = /^([,.!]|[a-z]+(-[a-z]+)?[,.!]?)$/;
  let sum = 0;
  const arr = sentence.split(' ');
  for(let i = 0; i < arr.length; i++) {
    if(reg.test(arr[i])) {
      sum += 1;
    }
  }
  console.timeEnd('句子中的有效单词数');
  return sum
};