import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { matrixReshape } from '../index';

describe('leetcode-566 测试', () => {
  it('重塑矩阵', () => {
    const input = [[1,2],[3,4]];
    expect(matrixReshape(input, 1, 4)).to.be.deep.equal([[1,2,3,4]]);
  });
  it('重塑矩阵', () => {
    const input = [[1,2],[3,4]];
    expect(matrixReshape(input, 2, 4)).to.be.deep.equal([[1,2],[3,4]]);
  });
});