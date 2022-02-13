import { describe, it } from 'mocha';
import { expect } from 'chai';
import { guessNumber } from '../leetcode';

describe('猜数字大小 测试', () => {
  it('猜数字大小', () => {
    expect(guessNumber(10, 6)).to.be.deep.equal(6);
  });
  it('猜数字大小', () => {
    expect(guessNumber(1000, 50)).to.be.deep.equal(50);
  });
  it('猜数字大小', () => {
    expect(guessNumber(1, 1)).to.be.deep.equal(1);
  });
  it('猜数字大小', () => {
    expect(guessNumber(2, 1)).to.be.deep.equal(1);
  });
  it('猜数字大小', () => {
    expect(guessNumber(2, 2)).to.be.deep.equal(2);
  })
});