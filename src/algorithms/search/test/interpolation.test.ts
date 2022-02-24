import { describe, it } from 'mocha';
import { expect } from 'chai';
import { interpolation } from '../interpolation';

describe('内插搜索 测试', () => {
  it('内插搜索', () => {
    const arr = [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50];
    expect(interpolation(arr, 48)).to.be.deep.equal(13);
    expect(interpolation(arr, 58)).to.be.deep.equal(-1);
  });
});