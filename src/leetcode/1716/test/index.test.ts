import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { totalMoney } from '../index';

describe('leetcode-1716 测试', () => {
  it('计算力扣银行的钱', () => {
    expect(totalMoney(4)).equal(10);
  });
  it('计算力扣银行的钱', () => {
    expect(totalMoney(10)).equal(37);
  });
  it('计算力扣银行的钱', () => {
    expect(totalMoney(20)).equal(96);
  });
  it('计算力扣银行的钱', () => {
    expect(totalMoney(1000)).equal(74926);
  });
});