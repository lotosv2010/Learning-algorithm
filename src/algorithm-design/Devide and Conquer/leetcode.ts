// todo 猜数字大小
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

function guess(n: number, pick: number) {
  return pick > n ? 1 : pick < n ? -1 : 0;
}

export function guessNumber(n: number, pick: number): any {
  console.time('猜数字大小');
  const rec: any = (start: number, end: number) => {
    if(start> end) return; // 递归结束
    let middle = Math.floor((start + end) / 2);
    const res = guess(middle, pick);
    if(res === 0) {
      console.timeEnd('猜数字大小');
      return middle
    } else if (res === 1) {
      return rec(middle + 1, end);
    } else if(res === -1) {
      return rec(start, middle - 1)
    }
  }
  return rec(0, n);
};

// todo 翻转二叉树
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

 export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

export function invertTree(root: TreeNode | null): TreeNode | null {
  if(!root) return null;
  return new TreeNode(
    root.val,
    invertTree(root.right),
    invertTree(root.left)
  );
};

// todo 相同的树
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

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if(!p && !q) return true;
  if(
    p && q && // p 和 q 同时存在
    p?.val === q?.val && // 根节点相同
    isSameTree(p.left, q.left) && // 左子树相同
    isSameTree(p.right, q.right) // 右子树相同
  ) {
    return true;
  }
  return false;
};