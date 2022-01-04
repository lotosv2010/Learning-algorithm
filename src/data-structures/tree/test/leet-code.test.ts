import "mocha";
import { expect, assert } from "chai";
import { maxDepth, maxDepth2 } from "../leet-code";

describe("二叉树的最大深度 测试", function () {
  const tree: any = {
    val: 3,
    left: {
      val: 9
    },
    right: {
      val: 20,
      left: {
        val: 15
      },
      right: {
        val: 7
      }
    }
  };
  it("二叉树的最大深度", function () {
    expect(maxDepth(tree)).to.be.deep.equal(3);
  });
  it("二叉树的最大深度", function () {
    expect(maxDepth2(tree)).to.be.deep.equal(3);
  });
});