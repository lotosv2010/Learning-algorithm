// todo 删除链表中的节点
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
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

export function deleteNode(root: ListNode | null): void {
  root!.val = root!.next!.val;
  root!.next = root!.next!.next; 
};

// todo 反转链表
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

export function reverseList(head: ListNode | null): ListNode | null {
  let pre = head;
  let current = null;
  while(pre) {
    const tmp = pre.next;
    pre.next = current;
    current = pre;
    pre = tmp;
  }
  return current;
};