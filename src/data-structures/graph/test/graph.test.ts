import "mocha";
import { expect, assert } from "chai";
import Graph from "../graph";

describe("图类实现(Graph) 测试", function () {
  const graph = new Graph();
  it("addVertex & addEdge", function () {
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
    // console.dir(graph, { depth: 10 });
    // console.log(graph.toString())
    expect(graph.getAdjList().toString()).to.be.deep.equal('[#A: B,C,D], [#B: A,E,F], [#C: A,D,G], [#D: A,C,G,H], [#E: B,I], [#F: B], [#G: C,D], [#H: D], [#I: E]');
  });
});