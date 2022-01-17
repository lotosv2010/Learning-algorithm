import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { mergeTwoLists, ListNode } from '../index';

describe('leetcode-21 测试', () => {
  it('合并两个有序链表', () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    const res = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))));
    expect(mergeTwoLists(list1, list2)).to.be.deep.equal(res);
  });
});