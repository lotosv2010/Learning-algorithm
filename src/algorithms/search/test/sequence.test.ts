import { describe, it } from 'mocha';
import { expect } from 'chai';
import { sequence } from '../sequence';

describe('顺序搜索 测试', () => {
  it('顺序搜索', () => {
    const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
    const res = 14;
    expect(sequence(arr, 48)).to.be.deep.equal(res);
  })
})