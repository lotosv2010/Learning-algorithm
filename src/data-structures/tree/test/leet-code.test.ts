import "mocha";
import { expect, assert } from "chai";
import { maxDepth, maxDepth2, minDepth, minDepth2 } from "../leet-code";

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

describe("二叉树的最小深度 测试", function () {
  const tree: any = {
    val: 2,
    right: {
      val: 3,
      right: {
        val: 4,
        right: {
          val: 5,
          right: {
            val: 6
          }
        }
      }
    }
  };
  it("深度优先遍历", function () {
    assert.equal(minDepth(tree), 5);
  });
  it("广度优先遍历", function () {
    assert.equal(minDepth2(tree), 5);
  });
});