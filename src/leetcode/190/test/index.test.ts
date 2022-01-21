import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { reverseBits } from '../index';

describe('leetcode-190 颠倒二进制位', () => {
  it('只出现一次的数字', () => {
    expect(reverseBits(0b00000010100101000001111010011100)).to.be.deep.equal(964176192);
  });
  it('只出现一次的数字', () => {
    expect(reverseBits(0b11111111111111111111111111111101)).to.be.deep.equal(3221225471);
  });
});