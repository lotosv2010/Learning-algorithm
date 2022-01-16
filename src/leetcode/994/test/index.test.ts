import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { orangesRotting } from '../index';

describe('leetcode-994 测试', () => {
  it('腐烂的橘子', () => {
    const input = [[2,1,1],[1,1,0],[0,1,1]];
    expect(orangesRotting(input)).equal(4);
  });
  it('腐烂的橘子', () => {
    const input = [[2,1,1],[0,1,1],[1,0,1]];
    expect(orangesRotting(input)).equal(-1);
  });
  it('腐烂的橘子', () => {
    const input = [[0,2]];
    expect(orangesRotting(input)).equal(0);
  });
});