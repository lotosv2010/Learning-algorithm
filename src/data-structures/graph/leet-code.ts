// todo 有效数字
export function isNumber1(s: string): boolean {
  const regex = /^[+-]?((\d+)|(\d+\.\d*)|(\d*\.\d+))([eE][+-]?\d+)?$/;
  return regex.test(s);
};

export function isNumber(s: string): boolean {
  const graph: any = {
    0: { 'blank':0, 'sign': 1, '.': 2, 'digit': 6 },
    1: { 'digit': 6, '.': 2 },
    2: { 'digit': 3 },
    3: { 'digit': 3, 'e': 4 },
    4: { 'digit': 5, 'sign': 7 },
    5: { 'digit': 5 },
    6: { 'digit': 6, '.': 3, 'e': 4 },
    7: { 'digit': 5 }
  }
  let state = 0;
  const blank = /\s/;
  const sign = /\+|-/;
  const dot = /\./;
  const digit = /\d/;
  const e = /e|E/;
  for (let c of s.trim()) {
    if (digit.test(c)) {
      c = 'digit';
    } else if (blank.test(c)) {
      c = 'blank'
    } else if (sign.test(c)) {
      c = 'sign'
    } else if (dot.test(c)) {
      c = '.'
    } else if (e.test(c)) {
      c = 'e'
    }
    state = graph[state][c];
    if(state === undefined) {
      return false;
    }
  }
  if([3, 5, 6].includes(state)) {
    return true;
  }
  return false;
};

// todo 太平洋大西洋水流问题
export function pacificAtlantic(heights: number[][]): number[][] {
  if(!heights || !heights[0]) return []
  const m = heights.length;
  const n = heights[0].length;
  const flow1 = Array.from({length: m}, () => new Array(n).fill(false)); // 太平洋
  const flow2 = Array.from({length: m}, () => new Array(n).fill(false)); // 大西洋
  // console.log(flow1, flow2);
  const dfs = (r: number, c: number, flow: boolean[][]) => {
    flow[r][c] = true;
    [[r-1,c],[r+1,c],[r, c-1],[r, c+1]].forEach(([nr, nc]) => {
      if(
        // 保证在矩阵中
        nr >= 0 && nr < m &&
        nc >= 0 && nc < n &&
        // 节点没有访问过，防止死循环
        !flow[nr][nc] &&
        // 保证逆流而上
        heights[nr][nc] >= heights[r][c]
      ) {
        dfs(nr, nc, flow);
      }
    })
  }
  // 沿着海岸线逆流而上
  for (let r = 0; r < m; r++) {
    dfs(r, 0, flow1); // 第一列，太平洋
    dfs(r, n - 1, flow2); // 最后一列，大西洋
  }
  for (let c = 0; c < n; c++) {
    dfs(0, c, flow1); // 第一行，，太平洋
    dfs(m - 1, c, flow2); // 最后一行，大西洋
  }

  // 收集能流到两个大洋里的坐标
  const res = []
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if(flow1[r][c] && flow2[r][c]) {
        res.push([r, c]);
      }
    }
  }
  // console.log(res);
  return res;
};