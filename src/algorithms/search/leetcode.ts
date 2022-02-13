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
  let right = n;
  let left = 1;
  while(left <= right) {
    const middle = Math.floor((left + right) / 2);
    const g = guess(middle, pick);
    if (g === 0) {
      console.timeEnd('猜数字大小');
      return middle;
    } else if(g === 1) { // 在较大范围，猜的数小了
      left = middle + 1
    } else if( g === -1) { // 在较小范围，猜的数大了
      right = middle - 1
    }
  }
};