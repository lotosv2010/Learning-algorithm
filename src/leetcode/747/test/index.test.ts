import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { dominantIndex, dominantIndex1 } from '../index';

describe('leetcode-747 测试', () => {
  it('至少是其他数字两倍的最大数', () => {
    expect(dominantIndex([3,6,1,0])).to.be.deep.equal(1);
  });
  it('至少是其他数字两倍的最大数', () => {
    expect(dominantIndex([1,2,3,4])).to.be.deep.equal(-1);
  });
  it('至少是其他数字两倍的最大数', () => {
    expect(dominantIndex1([1])).to.be.deep.equal(0);
  });
  it('至少是其他数字两倍的最大数', () => {
    expect(dominantIndex1([0,0,3,2])).to.be.deep.equal(-1);
  });
});