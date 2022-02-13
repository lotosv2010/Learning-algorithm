import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { isPowerOfTwo } from '../index';

describe('leetcode-231 测试', () => {
  it('2 的幂', () => {
    expect(isPowerOfTwo(16)).to.be.deep.equal(true);
  });
  it('2 的幂', () => {
    expect(isPowerOfTwo(3)).to.be.deep.equal(false);
  });
});