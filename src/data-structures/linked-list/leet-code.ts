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

// todo 两数相加
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

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const res = new ListNode(0);
  let p1: any = l1;
  let p2: any = l2;
  let pr: any = res;
  let carry = 0;
  while(p1 || p2) {
    const val1 = p1?.val || 0;
    const val2 = p2?.val || 0;
    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    pr.next = new ListNode(sum % 10);
    if(p1) p1 = p1.next;
    if(p2) p2 = p2.next;
    pr = pr.next;
  }
  if(carry) { // 最后一位进一的情况
    pr.next = new ListNode(carry);
  }
  return res.next;
};