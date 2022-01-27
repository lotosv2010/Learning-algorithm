import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { countValidWords } from '../index';

describe('leetcode-2047 测试', () => {
  it('句子中的有效单词数', () => {
    expect(countValidWords('cat and  dog')).equal(3);
  });
  it('句子中的有效单词数', () => {
    expect(countValidWords('!this  1-s b8d!')).equal(0);
  });
  it('句子中的有效单词数', () => {
    expect(countValidWords('alice and  bob are playing stone-game10')).equal(5);
  });
  it('句子中的有效单词数', () => {
    expect(countValidWords('!')).equal(1);
  });
  it('句子中的有效单词数', () => {
    expect(countValidWords('a')).equal(1);
  });
});