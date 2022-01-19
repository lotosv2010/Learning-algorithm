import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { climbStairs } from '../index';

describe('leetcode-70 测试', () => {
  it('爬楼梯', () => {
    expect(climbStairs(2)).to.be.deep.equal(2);
  });
  it('爬楼梯', () => {
    expect(climbStairs(3)).to.be.deep.equal(3);
  });
});