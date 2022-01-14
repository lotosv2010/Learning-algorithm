/**
 * 时间复杂度：O(n * m)
 * 空间复杂度：O(n * m)
 */

// DFS
// 深度优先，先循环网格， 当grid[x][y] === 1时，将当前单元格置为0并上下左右不断递归，计算每个岛屿的大小，然后不断更新最大岛屿
export function maxAreaOfIsland(grid: number[][]): number {
  console.time('岛屿的最大面积');
  let max = 0;
  // 记录是否访问过
  const isVisit: boolean[][] = [];
  // 记录是否在图像内
  const isRange = (row: number, col: number) => {
    return (row >= 0 && row < grid.length) && (col >= 0 && col < grid[0].length);
  }

  // 四个方向, 上、右、下、左
  const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  for (let i = 0; i < grid.length; i++) {
    isVisit[i] = [];
  }

  const dfs = (row: number, col: number) => {
    let current = 0;
    if(grid[row][col] === 1) { 
      current++;
    } else {
      return 0;
    }
    isVisit[row][col] = true; // 表示已经访问过
    for (let i = 0; i < dir.length; i++) {
      const nextRow = row + dir[i][0];
      const nextCol = col + dir[i][1];
      // 满足：在image边界内，没有访问过，像素颜色等于原始颜色
      // 注意条件的顺序不能乱
      if(isRange(nextRow, nextCol) && !isVisit[nextRow][nextCol] && grid[nextRow][nextCol] === 1) {
        current += dfs(nextRow, nextCol);
      }
    }
    return current;
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      max = Math.max(max, dfs(i, j));
    }
  }
  console.timeEnd('岛屿的最大面积');
  return max;
}

// BFS
// 时间复杂度：O(n * m)
// 空间复杂度：O(n * m)
export function maxAreaOfIsland1(grid: number[][]): number {
  console.time('岛屿的最大面积');
  let max = 0;
  // 记录是否访问过
  const isVisit: boolean[][] = [];
  // 记录是否在图像内
  const isRange = (p: any) => {
    return (p.row >= 0 && p.row < grid.length) && (p.col >= 0 && p.col < grid[0].length);
  }

  // 四个方向, 上、右、下、左
  const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  for (let i = 0; i < grid.length; i++) {
    isVisit[i] = [];
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      // 新建一个队列
      const queue = [{ row: i, col: j }];
      let current = 0;
      while(queue.length) {
        const node: any = queue.shift(); // 队头出队
        if(node) {
          if(!isVisit[node.row][node.col] && grid[node?.row][node?.col] === 1) { 
            current++;
          } else {
            continue;
          }
          isVisit[node?.row][node?.col] = true; // 表示已经访问过
          // 队头的 四个方向 依次入对
          for (let i = 0; i < dir.length; i++) {
            const next = {
              row: node.row + dir[i][0],
              col: node.col + dir[i][1]
            }
            // 满足：在image边界内，没有访问过，像素颜色等于原始颜色
            // 注意条件的顺序不能乱
            if(isRange(next) && !isVisit[next.row][next.col] && grid[next.row][next.col] === 1) {
              queue.push(next);
            }
          }
        }
      }
      max = Math.max(max, current);
    }
  }
  console.timeEnd('岛屿的最大面积');
  return max;
};