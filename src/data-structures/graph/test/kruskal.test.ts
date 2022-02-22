import "mocha";
import { expect, assert } from "chai";
import { kruskal } from "../kruskal";

describe("最小生成树(Graph) 测试", function () {
  it("Kruskal 算法", function () {
    const graph = [
      [0, 2, 4, 0, 0, 0],
      [2, 0, 2, 4, 2, 0],
      [4, 2, 0, 0, 3, 0],
      [0, 4, 0, 0, 3, 2],
      [0, 2, 3, 3, 0, 2],
      [0, 0, 0, 2, 2, 0]
    ];
    const result = kruskal(graph);
    expect(result).to.be.deep.equal([ , 0, 1, 1, 1, 3]);
  });
});