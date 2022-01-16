/**
 * 时间复杂度：O(m * n)
 * 空间复杂度：O(m * n)
 */
export function orangesRotting(grid: number[][]): number {
  console.time('腐烂的橘子');
  let rotten = -1;
  let fresh = 0;
  // 新建一个队列
  const queue = [];
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
      let cur = grid[i][j];
      // 坏的橘子入队列，好的橘子统计个数
      if (cur === 1) {
        fresh++;
      } else if (cur === 2) {
        // 所有的坏橘子的坐标推入队列;
        queue.push({row: i, col: j});
      }
    }
  }
  //如果没有好橘子，直接返回0
  if (fresh == 0) { 
    console.timeEnd('腐烂的橘子');
    return 0;
  }

  while(queue.length) {
    const size = queue.length;
    for(let i = 0; i < size; i++) {
      const node: any = queue.shift(); // 队头出队
      // 队头的 四个方向 依次入对
      for (let j = 0; j < dir.length; j++) {
        const next = {
          row: node.row + dir[j][0],
          col: node.col + dir[j][1]
        }
        // 满足：在image边界内，没有访问过，像素颜色等于原始颜色
        // 注意条件的顺序不能乱
        if(isRange(next) && !isVisit[next.row][next.col] && grid[next.row][next.col] === 1) {
          // 将好橘子腐化，避免它被重复遍历
          grid[next?.row][next?.col] = 2;
          isVisit[next?.row][next?.col] = true;
          // 推入队列，下次循环就将它们出列
          queue.push(next);
          // 好橘子个数-1
          fresh--;
        }
      }
    }
    rotten++;
  }
  console.timeEnd('腐烂的橘子');
  return fresh ? -1 : rotten;
};