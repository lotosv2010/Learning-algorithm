import Dictionary from "../map/dictionary";

export default class Graph {
  protected vertices: any[]; // 存储所有定点
  protected adjList: Dictionary; // 存储邻接表
  constructor(protected isDirected = false) { // isDirected 表示图是否有向
    this.vertices = [];
    this.adjList = new Dictionary();
  }
  // 向图中添加一个新顶点
  // v：代表顶点
  addVertex(v: any) {
    if(!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  }
  // 添加顶点之间的边
  // v：顶点1，w：顶点2
  addEdge(v: any, w: any) {
    // 如果顶点v或w不存在于图中，将它们加入顶点列表
    if(!this.adjList.get(v)) {
      this.addVertex(v);
    }
    if(!this.adjList.get(w)) {
      this.addVertex(w);
    }
    this.adjList.get(v).push(w); // 将 w 加入到 v 的邻接表中，表示添加了一条自顶点 v 到顶点 w 的边 
    if(!this.isDirected) { // 无向图
      this.adjList.get(w).push(v); // 将 v 加入到 w 的邻接表中，表示添加了一条自顶点 w 到顶点 v 的边 
    }
  }
  // 返回顶点列表
  getVertices() {
    return this.vertices;
  }
  // 返回邻接表
  getAdjList() {
    return this.adjList;
  }
  toString() {
    let s = ``;
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} -> `;
      const neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]} `;
      }
      s += `\n`;
    }
    return s;
  }
}