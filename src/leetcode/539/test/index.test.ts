import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { findMinDifference } from '../index';

describe('leetcode-539 测试', () => {
  it('最小时间差', () => {
    const timePoints = ["23:59","00:00"];
    expect(findMinDifference(timePoints)).to.be.deep.equal(1);
  });
});