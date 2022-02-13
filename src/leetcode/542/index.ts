// 时间复杂度：O(m * n)
// 空间复杂度：O(n * m)

export function updateMatrix(mat: number[][]): number[][] {
  console.time('01 矩阵');
  const row = mat.length;
  const col = mat[0].length;
  // 新建一个队列
  const queue = [];
  // 记录是否访问过
  const isVisited: boolean[][] = [];
  // 记录是否在矩阵内
  const isRange = (p: any) => {
    return (p.row >= 0 && p.row < row) && (p.col >= 0 && p.col < col);
  }
  // 四个方向, 上、右、下、左
  const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  let res: number[][] = [];
  for (let i = 0; i < row; i++) {
    isVisited[i] = [];
    res[i] = new Array(col).fill(0);
  }

  // 将所有的 0 添加进初始队列中
  for (let i = 0; i < row; ++i) {
      for (let j = 0; j < col; ++j) {
          if (mat[i][j] === 0) {
              queue.push({row: i, col: j});
              isVisited[i][j] = true;
          }
      }
  }

  while(queue.length) {
    const node: any = queue.shift();
    for (let i = 0; i < dir.length; i++) {
      const next = {
        row: node.row + dir[i][0],
        col: node.col + dir[i][1]
      }
      if(isRange(next) && !isVisited[next.row][next.col]) {
        res[next.row][next.col] = res[node.row][node.col] + 1;
        isVisited[next.row][next.col] = true;
        queue.push(next);
      }
    }
  }
  console.timeEnd('01 矩阵');
  return res;
};