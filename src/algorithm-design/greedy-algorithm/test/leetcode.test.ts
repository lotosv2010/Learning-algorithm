import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { findContentChildren } from '../leetcode';

describe('贪心算法-分发饼干 测试', () => {
  it('分发饼干', () => {
    expect(findContentChildren([1,2,3], [1,1])).to.be.equal(1);
  });
  it('分发饼干', () => {
    expect(findContentChildren([1, 2], [1, 2, 3])).to.be.equal(2);
  });
});
