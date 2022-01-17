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

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  console.time('合并两个有序链表');
  const list = new ListNode(-1);
  let p = list;
  while(list1 && list2) {
    if(list1.val < list2.val) {
      p.next = list1;
      list1 = list1.next;
    } else {
      p.next = list2;
      list2 = list2.next;
    }
    p = p.next;
  }
  p.next = list1 || list2;
  console.timeEnd('合并两个有序链表');
  return list.next;
}
