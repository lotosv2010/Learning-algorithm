import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { countVowelPermutation } from '../index';

describe('leetcode-1220 测试', () => {
  it('统计元音字母序列的数目', () => {
    expect(countVowelPermutation(1)).equal(5);
  });
  it('统计元音字母序列的数目', () => {
    expect(countVowelPermutation(2)).equal(10);
  });
  it('统计元音字母序列的数目', () => {
    expect(countVowelPermutation(5)).equal(68);
  });
  it('统计元音字母序列的数目', () => {
    expect(countVowelPermutation(144)).equal(18208803);
  });
});