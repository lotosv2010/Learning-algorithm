import "mocha";
import { expect, assert } from "chai";
import Graph from "../graph";
import { breadthFirstSearch, BFS } from "../breadthFirstSearch";

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
  it("广度优先搜索", function () {
    const list: any = []
    const cb = (u: any) => list.push(u);
    breadthFirstSearch(graph, myVertices[0], cb);
    expect(list).to.be.deep.equal(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']);
  });

  it("广度优先搜索", function () {
    const result = BFS(graph, myVertices[0]);
    // console.log(result);
    expect(result.distances).to.be.deep.equal({ A: 0, B: 1, C: 1, D: 1, E: 2, F: 2, G: 2, H: 2, I: 3 });
  });
});