import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { findContentChildren, maxProfit } from '../leetcode';

describe('贪心算法-分发饼干 测试', () => {
  it('分发饼干', () => {
    expect(findContentChildren([1,2,3], [1,1])).to.be.equal(1);
  });
  it('分发饼干', () => {
    expect(findContentChildren([1, 2], [1, 2, 3])).to.be.equal(2);
  });
});

describe('贪心算法-买卖股票的最佳时机-II 测试', () => {
  it('买卖股票的最佳时机 II', () => {
    expect(maxProfit([7,1,5,3,6,4])).to.be.equal(7);
  });
  it('买卖股票的最佳时机 II', () => {
    expect(maxProfit([1,2,3,4,5])).to.be.equal(4);
  });
  it('买卖股票的最佳时机 II', () => {
    expect(maxProfit([7,6,4,3,1])).to.be.equal(0);
  });
});
