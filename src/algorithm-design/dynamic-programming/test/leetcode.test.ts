import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { climbStairs, climbStairs2, rob, rob2 } from '../leetcode';

describe('动态规划-爬楼梯 测试', () => {
  it('爬楼梯', () => {
    expect(climbStairs(2)).to.be.equal(2);
  });
  it('爬楼梯', () => {
    expect(climbStairs(3)).to.be.equal(3);
  });
  it('爬楼梯', () => {
    assert.equal(climbStairs(45), 1836311903);
  });
  it('爬楼梯', () => {
    expect(climbStairs2(2)).to.be.equal(2);
  });
  it('爬楼梯', () => {
    expect(climbStairs2(3)).to.be.equal(3);
  });
  it('爬楼梯', () => {
    assert.equal(climbStairs2(45), 1836311903);
  });
});

describe('动态规划-打家劫舍 测试', () => {
  it('打家劫舍', () => {
    expect(rob([1,2,3,1])).to.be.equal(4);
  });
  it('打家劫舍', () => {
    expect(rob([2,7,9,3,1])).to.be.equal(12);
  });
  it('打家劫舍', () => {
    assert.equal(rob2([1,2,3,1]), 4);
  });
  it('打家劫舍', () => {
    expect(rob2([2,7,9,3,1])).to.be.equal(12);
  });
});