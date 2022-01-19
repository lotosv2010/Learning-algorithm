import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { rob } from '../index';

describe('leetcode-198 测试', () => {
  it('打家劫舍', () => {
    expect(rob([1, 2, 3, 1])).to.be.deep.equal(4);
  });
  it('打家劫舍', () => {
    expect(rob([2, 7, 9, 3, 1])).to.be.deep.equal(12);
  });
});