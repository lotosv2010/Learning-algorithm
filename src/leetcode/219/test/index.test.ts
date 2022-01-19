import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { containsNearbyDuplicate } from '../index';

describe('leetcode-219 测试', () => {
  it('存在重复元素 II', () => {
    const input = [1,2,3,1];
    expect(containsNearbyDuplicate(input, 3)).to.be.deep.equal(true);
  });
  it('存在重复元素 II', () => {
    const input = [1,2,3,1,2,3];
    expect(containsNearbyDuplicate(input, 2)).to.be.deep.equal(false);
  });
});