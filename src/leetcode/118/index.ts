/**
 * 时间复杂度：O(r*c)
 * 空间复杂度：O(r*c)
 */
export function generate(numRows: number): number[][] {
  console.time('杨辉三角');
  const res = [[1]]
  for(let i = 0; i < numRows; i++) {
    for(let j = 0; j <= i; j ++) {
      if(!res[i]) res[i] = [1];
      if(j === i) res[i][j] = 1;
      if(!res[i][j]) res[i][j] = res[i-1][j-1] + res[i-1][j];
    }
  }
  console.timeEnd('杨辉三角');
  return res;
};