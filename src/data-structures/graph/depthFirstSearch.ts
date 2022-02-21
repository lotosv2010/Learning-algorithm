import Dictionary from "../map/dictionary";
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
 * 深度优先搜索的步骤是递归的
 * 这意味着深度优先搜索算法使用栈来存储函数调用（由递归调用所创建的栈）
 * 步骤：
 *    (1) 标注v为被发现的（灰色）；
 *    (2) 对于v的所有未访问（白色）的邻点w，访问顶点w；
 *    (3) 标注v为已被探索的（黑色）
 * @param u 顶点
 * @param color 顶点颜色字典
 * @param adjList 邻接表
 * @param callback 回调函数
 */
const depthFirstSearchVisit = (
  u: any,
  color: Record<string, Colors>,
  adjList: Dictionary,
  callback: Function
) => {
  color[u] = Colors.GREY;
  if (callback) {
    callback(u);
  }
  const neighbors: any[] = adjList.get(u);
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    if (color[w] === Colors.WHITE) {
      depthFirstSearchVisit(w, color, adjList, callback);
    }
  }
  color[u] = Colors.BLACK;
};

/**
 * 深度优先搜索
 * @param graph 
 * @param callback 
 */
export const depthFirstSearch = (graph: Graph, callback: Function) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      depthFirstSearchVisit(vertices[i], color, adjList, callback);
    }
  }
};

/**
 * 
 * @param u 顶点
 * @param color 顶点颜色字典
 * @param d 顶点的发现时间
 * @param f 顶点被标注黑色时，完成探索的时间
 * @param p 前溯点
 * @param time 时间
 * @param adjList 邻接表
 */
const DFSVisit = (
  u: any,
  color: Record<string, Colors>,
  d: Record<string, number>,
  f: Record<string, number>,
  p: Record<string, any>,
  time: Record<string, number>,
  adjList: Dictionary
) => {
  color[u] = Colors.GREY;
  d[u] = ++time.count;
  const neighbors = adjList.get(u);
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    if (color[w] === Colors.WHITE) {
      p[w] = u;
      DFSVisit(w, color, d, f, p, time, adjList);
    }
  }
  color[u] = Colors.BLACK;
  f[u] = ++time.count;
};

export const DFS = (graph: Graph) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const d: Record<string, number> = {};
  const f: Record<string, number> = {};
  const p: Record<string, any> = {};
  const time = {
    count: 0
  };
  for (let i = 0; i < vertices.length; i++) {
    f[vertices[i]] = 0;
    d[vertices[i]] = 0;
    p[vertices[i]] = null;
  }
  for (let i = 0; i < vertices.length; i++) {
    if(color[vertices[i]] === Colors.WHITE) {
      DFSVisit(vertices[i], color, d, f, p, time, adjList);
    }
  }
  return {
    discovery: d,   // 发现时间
    finished: f,    // 完成探索时间
    predecessors: p // 前溯点
  }
}