import { describe, it } from 'mocha';
import { expect, assert } from 'chai';
import { mergeTrees, TreeNode } from '../index';

describe('leetcode-617 测试', () => {
  it('合并二叉树', () => {
    const tree1 = new TreeNode(1, new TreeNode(3, new TreeNode(5)), new TreeNode(2));
    const tree2 = new TreeNode(2, new TreeNode(1, null, new TreeNode(4)), new TreeNode(3, null, new TreeNode(7)));
    const res = new TreeNode(3, new TreeNode(4, new TreeNode(5), new TreeNode(4)), new TreeNode(5, null, new TreeNode(7)));
    expect(mergeTrees(tree1, tree2)).deep.equal(res);
  });
});