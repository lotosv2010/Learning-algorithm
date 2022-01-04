// todo 二叉树的最大深度
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
interface TreeNode{
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export function maxDepth(root: TreeNode | null): number {
  return !root? 0: Math.max(maxDepth(root!.left), maxDepth(root!.right)) + 1;
};

export function maxDepth2(root: TreeNode | null): number {
  let res = 0;
  const dfs = (root: TreeNode | null, level: number) => {
    if(root) {
      if(!root.left && !root.right) { // 优化：只有节点为叶子节点时才刷新res
        res = Math.max(level, res);
      }
      dfs(root!.left, level + 1);
      dfs(root!.right, level + 1);
    }
  }
  dfs(root, 1);
  return res;
};

// todo 二叉树的最小深度