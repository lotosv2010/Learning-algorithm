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
  it("preOrderTraverse", function () {
    let str = ``;
    tree.preOrderTraverse((v: any) => str += `${v} `);
    expect(str).to.be.deep.equal('11 7 5 3 6 9 8 10 15 13 12 14 20 18 25 ');
  });
  it("inOrderTraverse", function () {
    let str = ``;
    tree.inOrderTraverse((v: any) => str += `${v} `);
    expect(str).to.be.deep.equal('3 5 6 7 8 9 10 11 12 13 14 15 18 20 25 ');
  });
  it("postOrderTraverse", function () {
    let str = ``;
    tree.postOrderTraverse((v: any) => str += `${v} `);
    expect(str).to.be.deep.equal('3 6 5 8 10 9 7 12 14 13 18 25 20 15 11 ');
  });
});