import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { generate } from '../index';

describe('leetcode-118 测试', () => {
  it('杨辉三角', () => {
    const res = [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]];
    expect(generate(5)).to.be.deep.equal(res);
  });
});