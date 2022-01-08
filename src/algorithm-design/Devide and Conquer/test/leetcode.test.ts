import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { guessNumber, invertTree, TreeNode, isSameTree } from '../leetcode';

describe('分而治之-猜数字大小 测试', () => {
  it('猜数字大小', () => {
    expect(guessNumber(10, 6)).to.be.deep.equal(6);
  });
  it('猜数字大小', () => {
    expect(guessNumber(1000, 50)).to.be.deep.equal(50);
  });
  it('猜数字大小', () => {
    expect(guessNumber(1, 1)).to.be.deep.equal(1);
  });
  it('猜数字大小', () => {
    expect(guessNumber(2, 1)).to.be.deep.equal(1);
  });
  it('猜数字大小', () => {
    expect(guessNumber(2, 2)).to.be.deep.equal(2);
  })
});

describe('分而治之-翻转二叉树 测试', () => {
  it('翻转二叉树', () => {
    const tree = new TreeNode(
      4,
      new TreeNode(
        2,
        new TreeNode(1),
        new TreeNode(3)
      ),
      new TreeNode(
        7,
        new TreeNode(6),
        new TreeNode(9)
      )
    );
    const res = new TreeNode(
      4,
      new TreeNode(
        7,
        new TreeNode(9),
        new TreeNode(6)
      ),
      new TreeNode(
        2,
        new TreeNode(3),
        new TreeNode(1)
      )
    );
    expect(invertTree(tree)).to.be.deep.equal(res);
  });
});
describe('分而治之-相同的树 测试', () => {
  it('相同的树', () => {
    const p = new TreeNode(
      1,
      new TreeNode(
        2
      ),
      new TreeNode(
        3
      )
    );
    const q = new TreeNode(
      1,
      new TreeNode(
        2
      ),
      new TreeNode(
        3
      )
    );
    assert.equal(isSameTree(p, q), true);
  });
  it('相同的树', () => {
    const p = new TreeNode(
      1,
      new TreeNode(
        2
      )
    );
    const q = new TreeNode(
      1,
      null,
      new TreeNode(
        2,
      )
    );
    assert.equal(isSameTree(p, q), false);
  });
});