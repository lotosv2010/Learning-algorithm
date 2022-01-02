import "mocha";
import { expect, assert } from "chai";
import { deleteNode, listNode2, listNode1 } from "../leet-code";

describe("删除链表中的节点 测试", function () {
  it("删除节点5", function () {
    // [4,5,1,9]
    deleteNode(listNode2);
    // [4,1,9]
    expect(listNode1.val).to.be.equal(4);
    expect(listNode1.next?.val).to.be.equal(1);
    expect(listNode1.next?.next?.val).to.be.equal(9);
  });
});
