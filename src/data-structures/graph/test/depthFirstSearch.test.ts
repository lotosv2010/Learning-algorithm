import "mocha";
import { expect, assert } from "chai";
import Graph from "../graph";
import { depthFirstSearch, DFS } from "../depthFirstSearch";

describe("图(Graph) 测试", function () {
  const graph = new Graph();
  const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; // {12}
  for (let i = 0; i < myVertices.length; i++) { // {13}
    graph.addVertex(myVertices[i]);
  }
  graph.addEdge('A', 'B'); // {14}
  graph.addEdge('A', 'C');
  graph.addEdge('A', 'D');
  graph.addEdge('C', 'D');
  graph.addEdge('C', 'G');
  graph.addEdge('D', 'G');
  graph.addEdge('D', 'H');
  graph.addEdge('B', 'E');
  graph.addEdge('B', 'F');
  graph.addEdge('E', 'I');
  it("深度优先搜索", function () {
    const list: any = []
    const cb = (u: any) => list.push(u);
    depthFirstSearch(graph, cb);
    // console.log(list);
    expect(list).to.be.deep.equal(['A', 'B', 'E', 'I', 'F', 'C', 'D', 'G', 'H']);
  });

  it("深度优先搜索", function () {
    // const graph = new Graph();
    // const myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
    // for (let i = 0; i < myVertices.length; i++) {
    //   graph.addVertex(myVertices[i]);
    // }
    // graph.addEdge('A', 'C');
    // graph.addEdge('A', 'D');
    // graph.addEdge('B', 'D');
    // graph.addEdge('B', 'E');
    // graph.addEdge('C', 'F');
    // graph.addEdge('F', 'E');

    const result = DFS(graph);

    // 倒序来排序完成时间数组，这便得出了该图的拓扑排序
    const fTimes = {...result.finished};
    let s = '';
    for (let count = 0; count < myVertices.length; count++) {
      let max = 0;
      let maxName: any = null;
      for (let i = 0; i < myVertices.length; i++) {
        if (fTimes[myVertices[i]] > max) {
          max = fTimes[myVertices[i]];
          maxName = myVertices[i];
        }
      }
      s += ' - ' + maxName;
      delete fTimes[maxName];
    }
    // console.log(result);
    expect(s).to.be.deep.equal(' - A - C - D - H - G - B - F - E - I');
  });
});