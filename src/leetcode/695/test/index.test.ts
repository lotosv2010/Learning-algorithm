import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { maxAreaOfIsland, maxAreaOfIsland1 } from '../index';

describe('leetcode-695 测试', () => {
  it('岛屿的最大面积', () => {
    const grid = [
      [0,0,1,0,0,0,0,1,0,0,0,0,0],
      [0,0,0,0,0,0,0,1,1,1,0,0,0],
      [0,1,1,0,1,0,0,0,0,0,0,0,0],
      [0,1,0,0,1,1,0,0,1,0,1,0,0],
      [0,1,0,0,1,1,0,0,1,1,1,0,0],
      [0,0,0,0,0,0,0,0,0,0,1,0,0],
      [0,0,0,0,0,0,0,1,1,1,0,0,0],
      [0,0,0,0,0,0,0,1,1,0,0,0,0]
    ];
    expect(maxAreaOfIsland(grid)).to.be.deep.equal(6);
  });
  it('岛屿的最大面积', () => {
    const grid = [
      [1,1,0,0,0],
      [1,1,0,0,0],
      [0,0,0,1,1],
      [0,0,0,1,1]
    ];
    expect(maxAreaOfIsland(grid)).to.be.deep.equal(4);
  });
  it('岛屿的最大面积', () => {
    const grid = [[0,1],[1,0]];
    expect(maxAreaOfIsland(grid)).to.be.deep.equal(1);
  });
  it('岛屿的最大面积', () => {
    const grid = [
      [0,0,1,0,0,0,0,1,0,0,0,0,0],
      [0,0,0,0,0,0,0,1,1,1,0,0,0],
      [0,1,1,0,1,0,0,0,0,0,0,0,0],
      [0,1,0,0,1,1,0,0,1,0,1,0,0],
      [0,1,0,0,1,1,0,0,1,1,1,0,0],
      [0,0,0,0,0,0,0,0,0,0,1,0,0],
      [0,0,0,0,0,0,0,1,1,1,0,0,0],
      [0,0,0,0,0,0,0,1,1,0,0,0,0]
    ];
    expect(maxAreaOfIsland1(grid)).to.be.deep.equal(6);
  });
  it('岛屿的最大面积', () => {
    const grid = [
      [1,1,0,0,0],
      [1,1,0,0,0],
      [0,0,0,1,1],
      [0,0,0,1,1]
    ];
    expect(maxAreaOfIsland1(grid)).to.be.deep.equal(4);
  });
  it('岛屿的最大面积', () => {
    const grid = [
      [0,1],
      [1,0]
    ];
    expect(maxAreaOfIsland1(grid)).to.be.deep.equal(1);
  });
});