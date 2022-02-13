/**
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
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
// 长度
// 时间复杂度：O(n)
// 空间复杂度：O(1)
export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  console.time('删除链表的倒数第 N 个结点');
  let p: any = head;
  let l = 0;
  while(p) {
    p = p.next;
    l++;
  }
  const dummy = new ListNode(0, head);
  p = dummy;
  for(let i = 1; i < l - n + 1; i++) {
    p = p.next;
  }
  p.next = p.next.next;
  console.timeEnd('删除链表的倒数第 N 个结点');
  return dummy.next;
};
// 栈
// 时间复杂度：O(n)
// 空间复杂度：O(n)
export function removeNthFromEnd1(head: ListNode | null, n: number): ListNode | null {
  console.time('删除链表的倒数第 N 个结点');
  let dummy: any = new ListNode(0, head);
  let p = dummy;
  let stack = [];
  while(p) {
    stack.push(p);
    p = p.next;
  }
  for(let i = 0; i < n; i++) {
    stack.pop();
  }
  stack[stack.length-1].next = stack[stack.length-1].next.next;
  console.timeEnd('删除链表的倒数第 N 个结点');
  return dummy.next;
};

// 双指针
// 时间复杂度：O(n)
// 空间复杂度：O(1)
export function removeNthFromEnd2(head: ListNode | null, n: number): ListNode | null {
  console.time('删除链表的倒数第 N 个结点');
  let dummy: any = new ListNode(0, head);
  let left = dummy;
  let right = dummy;
  while(n >= 0) {
    right = right.next;
    n--;
  }
  while(right) {
    right = right.next;
    left = left.next;
  }
  left.next = left.next.next;
  console.timeEnd('删除链表的倒数第 N 个结点');
  return dummy.next;
};
