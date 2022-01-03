import "mocha";
import { expect, assert } from "chai";
import { deleteNode, reverseList, addTwoNumbers, deleteDuplicates, hasCycle, ListNode } from "../leet-code";

describe("链表 测试", function () {
  it("删除链表中的节点", function () {
    // [4,5,1,9]
    const listNode4 = new ListNode(9);
    const listNode3 = new ListNode(1, listNode4);
    const listNode2 = new ListNode(5, listNode3);
    const listNode1 = new ListNode(4, listNode2);
    deleteNode(listNode2);
    // [4,1,9]
    expect(listNode1.val).to.be.equal(4);
    expect(listNode1.next?.val).to.be.equal(1);
    expect(listNode1.next?.next?.val).to.be.equal(9);
  });
  it("反转链表", function () {
    // [1,2,3,4,5]
    const listNode5 = new ListNode(5);
    const listNode4 = new ListNode(4, listNode5);
    const listNode3 = new ListNode(3, listNode4);
    const listNode2 = new ListNode(2, listNode3);
    const listNode1 = new ListNode(1, listNode2);

    // [1,2,3,4,5]
    const res: any = reverseList(listNode1);
    expect(res.val).to.be.equal(5);
    expect(res.next?.val).to.be.equal(4);
    expect(res.next?.next?.val).to.be.equal(3);
    expect(res.next?.next?.next?.val).to.be.equal(2);
    expect(res.next?.next?.next?.next?.val).to.be.equal(1);
  });
  it("两数相加", function () {
    // [2,4,3]
    // [5,6,4]
    const list1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const list2 = new ListNode(5, new ListNode(6, new ListNode(4)));

    // [7,0,8]
    const res: any = addTwoNumbers(list1, list2);
    assert.equal(res.val, 7);
    assert.equal(res.next.val, 0);
    assert.equal(res.next.next.val, 8);
  });
  it("删除排序链表中的重复元素", function () {
    // [1,1,2,3,3]
    const list = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));

    // [1,2,3]
    const res: any = deleteDuplicates(list);
    assert.equal(res.val, 1);
    assert.equal(res.next.val, 2);
    assert.equal(res.next.next.val, 3);
  });
  it("环形链表", function () {
    // head = [3,2,0,-4], pos = 1
    const nodeList4: any = new ListNode(-4)
    const list = new ListNode(3, new ListNode(2, new ListNode(0, nodeList4)));
    nodeList4.next = list.next;
    const res: any = hasCycle(list);
    assert.equal(res, true);
    // head = [3,2,0,-4], pos = -1
    const list2 = new ListNode(3, new ListNode(2, new ListNode(0, new ListNode(-4))));
    const res2: any = hasCycle(list2);
    assert.equal(res2, false);
  });
});
