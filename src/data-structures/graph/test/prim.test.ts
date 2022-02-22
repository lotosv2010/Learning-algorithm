import "mocha";
import { expect, assert } from "chai";
import { prim } from "../prim";

describe("最小生成树(Graph) 测试", function () {
  it("Prim 算法", function () {
    const INF = Infinity;
    const graph = [
      [0, 2, 4, 0, 0, 0],
      [2, 0, 2, 4, 2, 0],
      [4, 2, 0, 0, 3, 0],
      [0, 4, 0, 0, 3, 2],
      [0, 2, 3, 3, 0, 2],
      [0, 0, 0, 2, 2, 0]
    ];
    const result = prim(graph);
    expect(result).to.be.deep.equal([-1, 0, 1, 5, 1, 4]);
  });
});