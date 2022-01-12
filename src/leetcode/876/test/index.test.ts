import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { middleNode, ListNode } from '../index';

describe('leetcode-876 测试', () => {
  it('链表的中间结点', () => {
    const input = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
    const res = new ListNode(3, new ListNode(4, new ListNode(5)));
    expect(middleNode(input)).to.be.deep.equal(res);
  });
});