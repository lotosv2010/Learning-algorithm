import "mocha";
import { expect, assert } from "chai";
import BinarySearchTree from "../binarySearchTree";

describe("二叉搜索树-BinarySearchTree 测试", function () {
  const tree = new BinarySearchTree();
  it("insert", function () {
    tree.insert(11);
    tree.insert(7);
    tree.insert(15);
    tree.insert(5);
    tree.insert(3);
    tree.insert(9);
    tree.insert(8);
    tree.insert(10);
    tree.insert(13);
    tree.insert(12);
    tree.insert(14);
    tree.insert(20);
    tree.insert(18);
    tree.insert(25);
    tree.insert(6);
    // console.dir(tree, { depth: 10 });
    expect(tree.getRoot()?.key).to.be.deep.equal(11);
  });
});