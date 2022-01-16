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
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

// 时间复杂度：O(n)
// 空间复杂度：O(n)
export class Solution {
  private list: any = [];
  constructor(head: ListNode | null) {
    while(head) {
      this.list.push(head.val);
      head = head.next;
    }
  }

  getRandom(): number {
    return this.list[Math.floor(Math.random() * this.list.length)];
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */