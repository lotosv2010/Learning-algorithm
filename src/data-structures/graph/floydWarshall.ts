export const floydWarshall = (graph: any[][]) => {
  const dist: number[][] = [];
  const { length } = graph;
  for (let i = 0; i < length; i++) {
    dist[i] = [];
    for (let j = 0; j < length; j++) {
      if(i === j) {
        dist[i][j] = 0;
      } else if (!isFinite(graph[i][j])) {
        dist[i][j] = Infinity;
      } else {
        dist[i][j] = graph[i][j];
      }
    }
  }
  for (let k = 0; k < length; k++) { // 0
    for (let i = 0; i < length; i++) { // 1
      for (let j = 0; j < length; j++) { // 0 
        // console.log(dist[i][k], dist[k][j], dist[i][j])
        if(dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
  return dist;
}