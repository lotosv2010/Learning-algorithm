import "mocha";
import { expect, assert } from "chai";
import { breadthFirstSearch } from "../bfs";

describe("图(Graph) 测试", function () {
  it("深度优先遍历", function () {
    const graph = {
      'v1': ['v2', 'v3'],
      'v2': ['v4', 'v5'],
      'v3': ['v6', 'v7'],
      'v4': ['v2', 'v8'],
      'v5': ['v2', 'v8'],
      'v6': ['v3', 'v7'],
      'v7': ['v3', 'v6'],
      'v8': ['v4', 'v5']
    };
    const nodeList: Array<any> = [];
    const visited = new Set();
    breadthFirstSearch(graph, 'v1', nodeList, visited);
    expect(nodeList).to.be.deep.equal(['v1', 'v2', 'v3', 'v4', 'v5', 'v6', 'v7', 'v8']);
  });
  it("深度优先遍历", function () {
    const graph = {
      '0': ['1', '2'],
      '1': ['2'],
      '2': ['0', '3'],
      '3': ['3']
    };
    const nodeList: Array<any> = [];
    const visited = new Set();
    breadthFirstSearch(graph, '2', nodeList, visited);
    expect(nodeList).to.be.deep.equal(['2', '0', '3', '1']);
  });
});