import "mocha";
import { expect, assert } from "chai";
import { mergeTwoLists, ListNode } from "../leetcode";

describe("合并两个有序链表 LeetCode 测试", function () {
  it("合并两个有序链表", function () {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    const list = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))));
    expect(mergeTwoLists(list1, list2)).to.be.deep.equal(list);
  });
  it("合并两个有序链表", function () {
    const list1 = new ListNode(1);
    const list2 = new ListNode();
    const list = new ListNode(0, new ListNode(1));
    assert.deepEqual(mergeTwoLists(list1, list2), list);
  });
  it("合并两个有序链表", function () {
    const list1 = new ListNode();
    const list2 = new ListNode(0);
    const list = new ListNode(0, new ListNode(0));
    assert.deepEqual(mergeTwoLists(list1, list2), list);
  });
  it("合并两个有序链表", function () {
    const list1 = new ListNode();
    const list2 = new ListNode();
    const list = new ListNode(0, new ListNode(0));
    assert.deepEqual(mergeTwoLists(list1, list2), list);
  });
});