import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { minimumTotal } from '../index';

describe('leetcode-120 测试', () => {
  it('三角形最小路径和', () => {
    const triangle = [[2],[3,4],[6,5,7],[4,1,8,3]];
    expect(minimumTotal(triangle)).to.be.deep.equal(11);
  });
  it('三角形最小路径和', () => {
    const triangle = [[-10]];
    expect(minimumTotal(triangle)).to.be.deep.equal(-10);
  });
});