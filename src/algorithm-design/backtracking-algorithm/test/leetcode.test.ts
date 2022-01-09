import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { permute, subsets } from '../leetcode';

describe('回溯算法-全排列 测试', () => {
  it('全排列', () => {
    const input = [1,2,3];
    const res = [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]];
    expect(permute(input)).to.be.deep.equal(res);
  });
  it('全排列', () => {
    const input = [0,1];
    const res = [[0,1],[1,0]];
    expect(permute(input)).to.be.deep.equal(res);
  });
  it('全排列', () => {
    const input = [1];
    const res = [[1]];
    expect(permute(input)).to.be.deep.equal(res);
  });
});

describe('回溯算法-子集 测试', () => {
  it('子集', () => {
    const input = [1,2,3];
    const res = [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]];
    expect(subsets(input)).to.be.deep.equal(res);
  });
  it('子集', () => {
    const input = [0];
    const res = [[],[0]];
    expect(subsets(input)).to.be.deep.equal(res);
  });
});