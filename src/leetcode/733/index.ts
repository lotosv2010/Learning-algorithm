/**
 * 输入: 
 * image = [[1,1,1],[1,1,0],[1,0,1]]
 * sr = 1, sc = 1, newColor = 2
 * 输出: [[2,2,2],[2,2,0],[2,0,1]]
 * 时间复杂度：O(n * m)
 * 空间复杂度：O(n * m)
 */

// BFS
export function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
  console.time('图像渲染');
  // 预先存下原始颜色
  const originColor = image[sr][sc];
  if(originColor === newColor) {
    return image;
  }
  // 新建一个队列
  const queue = [{ row: sr, col: sc }];
  // 记录是否访问过
  const isVisit: boolean[][] = [];
  // 记录是否在图像内
  const isRange = (p: any) => {
    return (p.row >= 0 && p.row < image.length) && (p.col >= 0 && p.col < image[0].length);
  }

  // 四个方向, 上、右、下、左
  const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  for (let i = 0; i < image.length; i++) {
    isVisit[i] = [];
  }

  while(queue.length) {
    const node: any = queue.shift(); // 队头出队
    if(node) {
      image[node?.row][node?.col] = newColor; // 访问队头 
      isVisit[node?.row][node?.col] = true;
      // 队头的 四个方向 依次入对
      for (let i = 0; i < dir.length; i++) {
        const next = {
          row: node.row + dir[i][0],
          col: node.col + dir[i][1]
        }
        // 满足：在image边界内，没有访问过，像素颜色等于原始颜色
        // 注意条件的顺序不能乱
        if(isRange(next) && !isVisit[next.row][next.col] && image[next.row][next.col] === originColor) {
          queue.push(next);
        }
      }
    }
  }
  console.timeEnd('图像渲染');
  return image;
};

// DFS
// 时间复杂度：O(n * m)
// 空间复杂度：O(n * m)
export function floodFill1(image: number[][], sr: number, sc: number, newColor: number): number[][] {
  console.time('图像渲染');
  // 预先存下原始颜色
  const originColor = image[sr][sc];
  if(originColor === newColor) {
    return image;
  }
  // 记录是否访问过
  const isVisit: boolean[][] = [];
  // 记录是否在图像内
  const isRange = (row: number, col: number) => {
    return (row >= 0 && row < image.length) && (col >= 0 && col < image[0].length);
  }

  // 四个方向, 上、右、下、左
  const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  for (let i = 0; i < image.length; i++) {
    isVisit[i] = [];
  }

  const dfs = (row: number, col: number) => {
    image[row][col] = newColor;
    isVisit[row][col] = true; 
    for (let i = 0; i < dir.length; i++) {
      const nextRow = row + dir[i][0];
      const nextCol = col + dir[i][1];
      // 满足：在image边界内，没有访问过，像素颜色等于原始颜色
      // 注意条件的顺序不能乱
      if(isRange(nextRow, nextCol) && !isVisit[nextRow][nextCol] && image[nextRow][nextCol] === originColor) {
        dfs(nextRow, nextCol);
      }
    }
  }
  dfs(sr, sc);
  console.timeEnd('图像渲染');
  return image;
}