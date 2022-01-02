// 删除链表中的节点
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify it in-place instead.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}
// [4,5,1,9]
const listNode4 = new ListNode(9);
export const listNode3 = new ListNode(1, listNode4);
export const listNode2 = new ListNode(5, listNode3);
export const listNode1 = new ListNode(4, listNode2);

export function deleteNode(root: ListNode | null): void {
  root!.val = root!.next!.val;
  root!.next = root!.next!.next; 
};