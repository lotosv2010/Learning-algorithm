import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { letterCasePermutation } from '../index';

describe('leetcode-784 测试', () => {
  it('字母大小写全排列', () => {
    const S = "a1b2";
    const res = ["a1b2", "a1B2", "A1b2", "A1B2"];
    expect(letterCasePermutation(S)).to.be.deep.equal(res);
  });
});