import { describe, it } from 'mocha';
import { expect } from 'chai';
import { shuffle } from '../shuffle';

describe('随机算法 测试', () => {
  it('随机算法', () => {
    const arr = [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50];
    shuffle(arr)
    // console.log(shuffle(arr));
    // console.log(shuffle(arr));
  });
});