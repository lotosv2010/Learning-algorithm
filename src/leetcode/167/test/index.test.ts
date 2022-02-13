import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { twoSum } from '../index';

describe('leetcode-167 测试', () => {
  it('两数之和 II - 输入有序数组', () => {
    const input = [2,7,11,15];
    const target = 9;
    const res = [1,2];
    expect(twoSum(input, target)).to.be.deep.equal(res);
  });
  it('两数之和 II - 输入有序数组', () => {
    const input = [2,3,4];
    const target = 6;
    const res = [1,3];
    expect(twoSum(input, target)).to.be.deep.equal(res);
  });
  it('两数之和 II - 输入有序数组', () => {
    const input = [-1,0];
    const target = -1;
    const res = [1,2];
    expect(twoSum(input, target)).to.be.deep.equal(res);
  });
  it('两数之和 II - 输入有序数组', () => {
    const input = [5,25,75];
    const target = 100;
    const res = [2,3];
    expect(twoSum(input, target)).to.be.deep.equal(res);
  });
  it('两数之和 II - 输入有序数组', () => {
    const input = [3,24,50,79,88,150,345];
    const target = 200;
    const res = [3,6];
    expect(twoSum(input, target)).to.be.deep.equal(res);
  });
});