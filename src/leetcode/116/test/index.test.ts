import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { connect, Node } from '../index';

describe('leetcode-116 测试', () => {
  it('填充每个节点的下一个右侧节点指针', () => {
    const input = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, new Node(6), new Node(7)));
    const res = connect(input);
    expect(connect(input)).to.be.deep.equal(res);
  });
});