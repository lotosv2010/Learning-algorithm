import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { singleNumber, singleNumber2 } from '../index';

describe('leetcode-136 测试', () => {
  it('只出现一次的数字', () => {
    expect(singleNumber([2,2,1])).to.be.deep.equal(1);
  });
  it('只出现一次的数字', () => {
    expect(singleNumber([4,1,2,1,2])).to.be.deep.equal(4);
  });
  it('只出现一次的数字', () => {
    expect(singleNumber2([2,2,1])).to.be.deep.equal(1);
  });
  it('只出现一次的数字', () => {
    expect(singleNumber2([4,1,2,1,2])).to.be.deep.equal(4);
  });
});