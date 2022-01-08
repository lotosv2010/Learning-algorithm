// todo 猜数字大小
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

function guess(n: number, pick: number) {
  return pick > n ? 1 : pick < n ? -1 : 0;
}

export function guessNumber(n: number, pick: number): any {
  console.time('猜数字大小');
  const rec: any = (start: number, end: number) => {
    if(start> end) return; // 递归结束
    let middle = Math.floor((start + end) / 2);
    const res = guess(middle, pick);
    if(res === 0) {
      console.timeEnd('猜数字大小');
      return middle
    } else if (res === 1) {
      return rec(middle + 1, end);
    } else if(res === -1) {
      return rec(start, middle - 1)
    }
  }
  return rec(0, n);
};