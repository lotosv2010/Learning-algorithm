import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { floodFill, floodFill1 } from '../index';

describe('leetcode-733 测试', () => {
  it('图像渲染', () => {
    const image = [[1,1,1],[1,1,0],[1,0,1]] , sr = 1, sc = 1, newColor = 2;
    const res = [[2,2,2],[2,2,0],[2,0,1]]
    expect(floodFill(image, sr, sc, newColor)).to.be.deep.equal(res);
  });
  it('图像渲染', () => {
    const image = [[1,1,1],[1,1,0],[1,0,1]] , sr = 1, sc = 1, newColor = 2;
    const res = [[2,2,2],[2,2,0],[2,0,1]]
    expect(floodFill1(image, sr, sc, newColor)).to.be.deep.equal(res);
  });
});