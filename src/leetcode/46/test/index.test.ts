import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { permute } from '../index';

describe('leetcode-46 测试', () => {
  it('全排列', () => {
    const input = [1,2,3];
    const res = [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]];
    expect(permute(input)).to.be.deep.equal(res);
  });
});