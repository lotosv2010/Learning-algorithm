import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { reverseString } from '../index';

describe('leetcode-344 测试', () => {
  it('反转字符串', () => {
    const input = ["h","e","l","l","o"];
    const res = ["o","l","l","e","h"];
    reverseString(input);
    expect(input).to.be.deep.equal(res);
  });
  it('反转字符串', () => {
    const input = ["H","a","n","n","a","h"];
    const res = ["h","a","n","n","a","H"];
    reverseString(input);
    expect(input).to.be.deep.equal(res);
  });
});