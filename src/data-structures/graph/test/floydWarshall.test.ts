import "mocha";
import { expect, assert } from "chai";
import { floydWarshall } from "../floydWarshall";

describe("最短路径算法(Graph) 测试", function () {
  it("Floyd-Warshall 算法", function () {
    const INF = Infinity;
    const graph = [
      [INF, 2, 4, INF, INF, INF],
      [INF, INF, 2, 4, 2, INF],
      [INF, INF, INF, INF, 3, INF],
      [INF, INF, INF, INF, INF, 2],
      [INF, INF, INF, 3, INF, 2],
      [INF, INF, INF, INF, INF, INF]
    ];
    const result = floydWarshall(graph);
    expect(result).to.be.deep.equal([
      [0, 2, 4, 6, 4, 6],
      [INF, 0, 2, 4, 2, 4],
      [INF, INF, 0, 6, 3, 5],
      [INF, INF, INF, 0, INF, 2],
      [INF, INF, INF, 3, 0, 2],
      [INF, INF, INF, INF, INF, 0]
    ]);
  });
});