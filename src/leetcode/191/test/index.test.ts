import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { hammingWeight } from '../index';

describe('leetcode-191 测试', () => {
  it('位1的个数', () => {
    expect(hammingWeight(0o00000000000000000000000000001011)).to.be.deep.equal(3);
  });
  it('位1的个数', () => {
    expect(hammingWeight(0o00000000000000000000000010000000)).to.be.deep.equal(1);
  });
});