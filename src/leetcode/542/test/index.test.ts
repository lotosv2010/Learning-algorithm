import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { updateMatrix } from '../index';

describe('leetcode-542 测试', () => {
  it('01 矩阵', () => {
    const input = [[0,0,0],[0,1,0],[0,0,0]];
    const res = [[0,0,0],[0,1,0],[0,0,0]];
    expect(updateMatrix(input)).deep.equal(res);
  });
  it('01 矩阵', () => {
    const input = [[0,0,0],[0,1,0],[1,1,1]];
    const res = [[0,0,0],[0,1,0],[1,2,1]];
    expect(updateMatrix(input)).deep.equal(res);
  });
});