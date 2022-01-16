import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { ListNode, Solution } from '../index';

describe('leetcode-382 测试', () => {
  it('链表随机节点', () => {
    const list = new ListNode(1, new ListNode(2, new ListNode(3)))
    const solution = new Solution(list);
    let res = []
    const s1 = solution.getRandom(); // 返回 1
    const s2 = solution.getRandom(); // 返回 3
    const s3 = solution.getRandom(); // 返回 2
    const s4 = solution.getRandom(); // 返回 2
    const s5 = solution.getRandom(); // 返回 3
    res = [s1, s2, s3, s4, s5];
    expect(res).to.be.deep.equal(res);
  });
});