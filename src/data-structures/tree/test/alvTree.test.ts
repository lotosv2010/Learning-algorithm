import "mocha";
import { expect, assert } from "chai";
import AlvTree from "../alvTree";

describe("ALV-AlvTree 测试", function () {
  const tree = new AlvTree();
  it("insert", function () {
    tree.insert(1);
    tree.insert(2);
    tree.insert(3);
    tree.insert(4);
    tree.insert(5);
    tree.insert(6);
    tree.insert(7);
    tree.insert(14);
    tree.insert(15);
    tree.insert(13);
    tree.insert(12);
    tree.insert(11);
    // console.dir(tree, { depth: 10 });
    expect(tree.getRoot()?.key).to.be.deep.equal(7);
  });
  it("remove", function () {
    tree.remove(6);
    // console.dir(tree.getRoot(), { depth: 10 });
    tree.remove(5);
    // console.dir(tree.getRoot(), { depth: 10 });
    tree.remove(15);
    // console.dir(tree.getRoot(), { depth: 10 });
    let str = ``;
    tree.inOrderTraverse((v: any) => str += `${v} `);
    expect(str).to.be.deep.equal('1 2 3 4 7 11 12 13 14 ');
  });
});