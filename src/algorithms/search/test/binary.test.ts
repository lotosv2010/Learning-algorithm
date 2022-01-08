import { describe, it } from 'mocha';
import { expect } from 'chai';
import { binary, binary1 } from '../binary';

describe('二分搜索 测试', () => {
  it('二分搜索-递归', () => {
    const arr = [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50];
    expect(binary(arr, 48)).to.be.deep.equal(13);
    expect(binary(arr, 58)).to.be.deep.equal(-1);
  });
  it('二分搜索-非递归', () => {
    const arr = [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50];
    expect(binary1(arr, 48)).to.be.deep.equal(13);
    expect(binary1(arr, 58)).to.be.deep.equal(-1);
  })
})