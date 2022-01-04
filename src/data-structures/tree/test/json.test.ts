import "mocha";
import { expect, assert } from "chai";
import { dfs } from "../json";

describe("前端与树 Json 测试", function () {
  it("遍历JSON的所有节点", function () {
    const json = {
      a: {
        b: {
          c: 1
        }
      },
      d: [1, 2]
    }
    const nodeList: [] = [];
    dfs(json, nodeList);
    expect(nodeList.length).to.be.deep.equal(7);
  });
});