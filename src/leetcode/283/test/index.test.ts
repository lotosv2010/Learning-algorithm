import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { moveZeroes } from '../index';

describe('leetcode-283 测试', () => {
  it('移动零', () => {
    const input = [0,1,0,3,12];
    const res = [1,3,12,0,0];
    expect(moveZeroes(input)).to.be.deep.equal(res);
  });
  
});