import "mocha";
import { expect, assert } from "chai";
import { preOrderTraversal, inOrderTraversal, postOrderTraversal } from "../bt";
import { preOrderTraversal2, inOrderTraversal2, postOrderTraversal2 } from "../bt";
const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    },
    right: {
      value: 5
    }
  },
  right: {
    value: 3,
    left: {
      value: 6
    },
    right: {
      value: 7
    }
  }
};
describe("二叉树(Binary Tree)遍历(递归) 测试", function () {
  it("先序遍历", function () {
    const nodeList: Array<any> = [];
    preOrderTraversal(tree, nodeList);
    expect(nodeList).to.be.deep.equal([1, 2, 4, 5, 3, 6, 7]);
  });
  it("中序遍历", function () {
    const nodeList: Array<any> = [];
    inOrderTraversal(tree, nodeList);
    expect(nodeList).to.be.deep.equal([4, 2, 5, 1, 6, 3, 7]);
  });
  it("后序遍历", function () {
    const nodeList: Array<any> = [];
    postOrderTraversal(tree, nodeList);
    expect(nodeList).to.be.deep.equal([4, 5, 2, 6, 7, 3, 1]);
  });
});
describe("二叉树(Binary Tree)遍历(非递归) 测试", function () {
  it("先序遍历", function () {
    const nodeList: Array<any> = [];
    preOrderTraversal2(tree, nodeList);
    assert.deepEqual(nodeList, [1, 2, 4, 5, 3, 6, 7]);
  });
  it("中序遍历", function () {
    const nodeList: Array<any> = [];
    inOrderTraversal2(tree, nodeList);
    assert.deepEqual(nodeList, [4, 2, 5, 1, 6, 3, 7]);
  });
  it("后序遍历", function () {
    const nodeList: Array<any> = [];
    postOrderTraversal2(tree, nodeList);
    assert.deepEqual(nodeList, [4, 5, 2, 6, 7, 3, 1]);
  });
});