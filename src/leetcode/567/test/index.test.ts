import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { checkInclusion, checkInclusion1 } from '../index';

describe('leetcode-567 测试', () => {
  it('字符串的排列', () => {
    const s1 = "ab", s2 = "eidbaooo";
    expect(checkInclusion(s1, s2)).to.be.deep.equal(true);
  });
  it('字符串的排列', () => {
    const s1 = "ab", s2 = "eidboaoo";
    expect(checkInclusion(s1, s2)).to.be.deep.equal(false);
  });
  it('字符串的排列', () => {
    const s1 = "ab", s2 = "eidbaooo";
    expect(checkInclusion1(s1, s2)).to.be.deep.equal(true);
  });
  it('字符串的排列', () => {
    const s1 = "ab", s2 = "eidboaoo";
    expect(checkInclusion1(s1, s2)).to.be.deep.equal(false);
  });
});