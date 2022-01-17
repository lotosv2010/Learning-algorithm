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
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}
// 时间复杂度：O(n)
// 空间复杂度：O(1)

export function reverseList(head: ListNode | null): ListNode | null {
  console.time('反转链表');
  let pre = head;
  let current = null;
  while(pre) {
    const temp = pre.next;
    pre.next = current;
    current = pre;
    pre = temp;
  }
  console.timeEnd('反转链表');
  return current;
}
