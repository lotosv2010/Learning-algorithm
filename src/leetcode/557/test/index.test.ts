import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { reverseWords } from '../index';

describe('leetcode-557 测试', () => {
  it('反转字符串中的单词 III', () => {
    const input = "Let's take LeetCode contest";
    const res = "s'teL ekat edoCteeL tsetnoc";
    expect(reverseWords(input)).to.be.deep.equal(res);
  });
});