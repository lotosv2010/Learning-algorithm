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
// 深度优先遍历
export function minDepth(root: TreeNode | null): number {
  let res: any[] = [];
  const dfs = (root: TreeNode | null, level: number) => {
    if(root) {
      if(!root.left && !root.right) { // 优化：只有节点为叶子节点时才刷新res
        res.push(level);
      }
      dfs(root!.left, level + 1);
      dfs(root!.right, level + 1);
    }
  }
  dfs(root, 1);
  return !root? 0 : Math.min.apply(null, res);
};

// 广度优先遍历
export function minDepth2(root: TreeNode | null): number {
  const queue: Array<Array<any>> = [];
  let res = 0;
  if(root) {
    queue.unshift([root, 1]); // [节点, 层级]
    while(queue.length !== 0) { 
      const [node, level]: any = queue.shift();
      if(!node?.left && !node?.right) { // 如果是叶子节点，返回层级并停止遍历
        res = level;
        break;
      }
      node?.left && queue.push([node?.left, level + 1]);
      node?.right && queue.push([node?.right, level + 1]);
    }
  }
  return res;
}

// todo 二叉树的层序遍历
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

export function levelOrder(root: TreeNode | null): number[][] {
  const queue: Array<Array<any>> = [];
  const res:number[][]  = [];
  if(root) {
    queue.unshift([root, 0]); // [节点, 层级]
    while(queue.length !== 0) { 
      const [node, level]: any = queue.shift();
      !res[level] && (res[level] = []);
      res[level]?.push(node.val);
      node?.left && queue.push([node?.left, level + 1]);
      node?.right && queue.push([node?.right, level + 1]);
    }
  }
  return res;
};

// todo 二叉树的中序遍历
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
// 递归
export function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  const rec = (root: TreeNode | null) => {
    if(root) {
      rec(root?.left);
      res.push(root?.val);
      rec(root?.right);
    }
  }
  rec(root);
  return res;
}

// 非递归
export function inorderTraversal2(root: TreeNode | null): number[] {
  const nodeList = [];
  if(root) {
    const stack = [];
    let p: any = root;
    while(stack.length > 0 || p) {
      while(p) { // 左子树入栈
        stack.push(p);
        p = p?.left;
      }
      const node = stack.pop(); // 左子树最左叶子节点，出栈
      nodeList.push(node?.val); // 访问(根)节点
      p = node?.right; // 右子树入栈
    }
  }
  return nodeList;
};