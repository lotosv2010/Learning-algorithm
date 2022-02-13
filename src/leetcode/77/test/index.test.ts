import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { combine } from '../index';

describe('leetcode-77 测试', () => {
  it('组合', () => {
    const res = [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ];
    expect(combine(4, 2)).to.be.deep.equal(res);
  });
});