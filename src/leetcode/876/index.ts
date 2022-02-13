/**
 * 给定一个头结点为 head 的非空单链表，返回链表的中间结点。
 * 如果有两个中间结点，则返回第二个中间结点。
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}
export function middleNode(head: ListNode | null): ListNode | null {
  console.time('链表的中间结点');
  let fast = head;
  let slow = head;
  while(fast && fast.next) {
    fast = fast?.next?.next;
    slow = slow!.next; 
  }
  console.timeEnd('链表的中间结点');
  return slow;
};