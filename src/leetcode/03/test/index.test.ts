import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { lengthOfLongestSubstring } from '../index';

describe('leetcode-3 测试', () => {
  it('无重复字符的最长子串', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).to.be.deep.equal(3);
  });
  it('无重复字符的最长子串', () => {
    expect(lengthOfLongestSubstring('bbbbb')).to.be.deep.equal(1);
  });
  it('无重复字符的最长子串', () => {
    expect(lengthOfLongestSubstring('pwwkew')).to.be.deep.equal(3);
  });
  it('无重复字符的最长子串', () => {
    expect(lengthOfLongestSubstring('')).to.be.deep.equal(0);
  });
});