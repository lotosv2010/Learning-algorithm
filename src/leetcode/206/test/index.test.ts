import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { reverseList, ListNode } from '../index';

describe('leetcode-206 测试', () => {
  it('反转链表', () => {
    const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
    const res = new ListNode(5, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1)))));
    expect(reverseList(list)).to.be.deep.equal(res);
  });
});