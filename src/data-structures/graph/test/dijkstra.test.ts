import "mocha";
import { expect, assert } from "chai";
import { dijkstra } from "../dijkstra";

describe("最短路径算法(Graph) 测试", function () {
  it("Dijkstra 算法", function () {
    const graph = [
      [0, 2, 4, 0, 0, 0],
      [0, 0, 2, 4, 2, 0],
      [0, 0, 0, 0, 3, 0],
      [0, 0, 0, 0, 0, 2],
      [0, 0, 0, 3, 0, 2],
      [0, 0, 0, 0, 0, 0]
    ];
    const result = dijkstra(graph, 0);
    expect(result).to.be.deep.equal([0, 2, 4, 6, 4, 6]);
  });
});