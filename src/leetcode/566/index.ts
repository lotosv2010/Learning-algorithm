/**
 * 时间复杂度：O(r*c)
 * 空间复杂度：O(r*c)
 */
export function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  console.time('重塑矩阵');
  const arr = mat.flat(Infinity);
  if(r * c !== mat.length * mat[0].length) return mat;
  
  const res = new Array(r);
  for(let i = 0; i < r; i++) {
    res[i] = new Array(c);
  }
  let l = 0;
  for(let i = 0; i < res.length; i++) {
    for(let k = 0; k < res[0].length; k++) {
      res[i][k] = arr[l]
      l++;
    }
  }
  console.timeEnd('重塑矩阵');
  return res;
};