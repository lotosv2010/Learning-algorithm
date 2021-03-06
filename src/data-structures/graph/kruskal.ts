const INF = Number.MAX_SAFE_INTEGER;
const find = (i: number, parent: number[]) => {
  while (parent[i]) {
    i = parent[i]; // eslint-disable-line prefer-destructuring
  }
  return i;
};
const union = (i: number, j: number, parent: number[]) => {
  if (i !== j) {
    parent[j] = i;
    return true;
  }
  return false;
};
const initializeCost = (graph: any[][]) => {
  const cost: number[][] = [];
  const { length } = graph;
  for (let i = 0; i < length; i++) {
    cost[i] = [];
    for (let j = 0; j < length; j++) {
      if (graph[i][j] === 0) {
        cost[i][j] = INF;
      } else {
        cost[i][j] = graph[i][j];
      }
    }
  }
  return cost;
};
export const kruskal = (graph: any[][]) => {
  const { length } = graph;
  const parent: number[] = [];
  let ne = 0;
  let a: any;
  let b: any;
  let u: any;
  let v: any;
  const cost = initializeCost(graph);
  while (ne < length - 1) {
    for (let i = 0, min = INF; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (cost[i][j] < min) {
          min = cost[i][j];
          a = u = i;
          b = v = j;
        }
      }
    }
    u = find(u, parent);
    v = find(v, parent);
    if (union(u, v, parent)) {
      ne++;
    }
    cost[a][b] = cost[b][a] = INF;
  }
  return parent;
};
