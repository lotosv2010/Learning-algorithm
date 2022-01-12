import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { removeNthFromEnd, removeNthFromEnd1, removeNthFromEnd2, ListNode } from '../index';

describe('leetcode-19 测试', () => {
  // 长度
  it('删除链表的倒数第 N 个结点', () => {
    const input = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
    const res = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5))));
    expect(removeNthFromEnd(input, 2)).to.be.deep.equal(res);
  });
  it('删除链表的倒数第 N 个结点', () => {
    const input = new ListNode(1, new ListNode(2));
    const res = new ListNode(1);
    expect(removeNthFromEnd(input, 1)).to.be.deep.equal(res);
  });
  it('删除链表的倒数第 N 个结点', () => {
    const input = new ListNode(1);
    expect(removeNthFromEnd(input, 1)).to.be.deep.equal(null);
  });
  // 栈
  it('删除链表的倒数第 N 个结点', () => {
    const input = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
    const res = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5))));
    expect(removeNthFromEnd1(input, 2)).to.be.deep.equal(res);
  });
  it('删除链表的倒数第 N 个结点', () => {
    const input = new ListNode(1, new ListNode(2));
    const res = new ListNode(1);
    expect(removeNthFromEnd1(input, 1)).to.be.deep.equal(res);
  });
  it('删除链表的倒数第 N 个结点', () => {
    const input = new ListNode(1);
    expect(removeNthFromEnd1(input, 1)).to.be.deep.equal(null);
  });
  // removeNthFromEnd2
  it('删除链表的倒数第 N 个结点', () => {
    const input = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
    const res = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5))));
    expect(removeNthFromEnd2(input, 2)).to.be.deep.equal(res);
  });
  it('删除链表的倒数第 N 个结点', () => {
    const input = new ListNode(1, new ListNode(2));
    const res = new ListNode(1);
    expect(removeNthFromEnd2(input, 1)).to.be.deep.equal(res);
  });
  it('删除链表的倒数第 N 个结点', () => {
    const input = new ListNode(1);
    expect(removeNthFromEnd2(input, 1)).to.be.deep.equal(null);
  });
});