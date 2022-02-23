import { describe, it } from 'mocha';
import { expect } from 'chai';
import { merge } from '../merge';
import { defaultCompare, reverseCompare } from '../../../util';

describe('归并排序 测试', () => {
  it('归并排序-正序', () => {
    const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
    const res = [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50];
    expect(merge(arr)).to.be.deep.equal(res);
  });
  it('归并排序-倒序', () => {
    const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
    const res = [50, 48, 47, 46, 44, 38, 36, 27, 26, 19, 15, 5, 4, 3, 2];
    expect(merge(arr, reverseCompare(defaultCompare))).to.be.deep.equal(res);
  });
})