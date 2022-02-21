import Dictionary from "../map/dictionary";
import Queue from "../queue/queue";
import Graph from "./graph";

enum Colors {
  WHITE = 0,
  GREY = 1,
  BLACK = 2,
}

/**
 * 初始化每个顶点的颜色
 * @param vertices 顶点数组
 * @returns
 */
const initializeColor = (vertices: any[]) => {
  const color: Record<string, any> = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
};

/**
 * 广度优先搜索
 * 步骤:
 *    (1) 创建一个队列Q。
 *    (2) 标注v为被发现的（灰色），并将v入队列Q。
 *    (3) 如果Q非空，则运行以下步骤：
 *      (a) 将u从Q中出队列；
 *      (b) 标注u为被发现的（灰色）；
 *      (c) 将u所有未被访问过的邻点（白色）入队列；
 *      (d) 标注u为已被探索的（黑色）
 * @param graph 图
 * @param startVertex 顶点
 * @param callback 回调函数
 */
export const breadthFirstSearch = (
  graph: Graph,
  startVertex: any,
  callback: Function
) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const queue = new Queue();
  queue.enqueue(startVertex);
  while(!queue.isEmpty()) {
    const u: any = queue.dequeue();
    const neighbors = adjList.get(u);
    color[u] = Colors.GREY;
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if(color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        queue.enqueue(w);
      }
    }
    color[u] = Colors.BLACK;
    if(callback) {
      callback(u);
    }
  }
};

/**
 * 使用BFS寻找最短路径
 * @param graph 图
 * @param startVertex 顶点 
 * @returns 
 */
export const BFS = (
  graph: Graph,
  startVertex: any
) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const queue = new Queue();
  const distances: Record<string, number> = {};
  const predecessors: Record<string, any> = {};
  queue.enqueue(startVertex);
  for (let i = 0; i < vertices.length; i++) {
    distances[vertices[i]] = 0;
    predecessors[vertices[i]] = null;
  }
  while(!queue.isEmpty()) {
    const u: any = queue.dequeue();
    const neighbors = adjList.get(u);
    color[u] = Colors.GREY;
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if(color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        distances[w] = distances[u] + 1;
        predecessors[w] = u;
        queue.enqueue(w);
      }
    }
    color[u] = Colors.BLACK;
  }
  return {
    distances,
     predecessors
  }
}
