import { describe, it } from 'mocha';
import { expect } from 'chai';
import { insertion } from '../insertion';

describe('插入排序 测试', () => {
  it('插入排序', () => {
    const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
    const res = [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50];
    expect(insertion(arr)).to.be.deep.equal(res);
  })
})