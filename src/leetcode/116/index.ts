/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
export class Node {
  val: number
  left: Node | null
  right: Node | null
  next: Node | null
  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
    this.next = (next===undefined ? null : next)
  }
}
export function connect(root: Node | null): Node | null {
  console.time('填充每个节点的下一个右侧节点指针');
  const queue: Array<any> = [root];
  while(queue.length) {
    const size = queue.length;
    // 遍历这一层的所有节点
    for(let i = 0; i < size ;i++) {
      const node = queue.shift();
      if(i < size - 1) {
        node.next = queue[0];
      }
      if(node?.left) {
        queue.push(node?.left)
      }
      if(node?.right) {
        queue.push(node?.right)
      }
    }
  }
  console.timeEnd('填充每个节点的下一个右侧节点指针')
  return root;
};