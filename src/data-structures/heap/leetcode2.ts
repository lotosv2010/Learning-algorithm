// todo 合并K个升序链表
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

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

class MinHeap {
  constructor(private data: Array<ListNode> = []) {}
  // 添加元素
  push(value: ListNode) {
    this.data.push(value);
    this.shiftUp(this.data.length - 1);
  }
  // 上移
  shiftUp(index: number) {
    if(index === 0) return; // 当为堆顶时，停止上移
    const parentIndex = this.getParentIndex(index);
    if(this.data[parentIndex]?.val > this.data[index]?.val) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  // 下移
  shiftDown(index: number) {
    const leftIndex = this.getLeft(index);
    const rightIndex = this.getRight(index);
    if(this.data[leftIndex]?.val < this.data[index]?.val) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if(this.data[rightIndex]?.val< this.data[index]?.val) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
  // 获取父节点
  getParentIndex(index: number) {
    return (index - 1) >> 1; // 取商，等价 Math.floor((index - 1) / 2)
  }
  // 获取左节点
  getLeft(index: number) {
    return index * 2 + 1;
  }
  // 获取右节点
  getRight(index: number) {
    return index * 2 + 2;
  }
  // 交换
  swap(i1: number, i2: number) {
    // const temp = this.data[i1];
    // this.data[i1] = this.data[i2];
    // this.data[i2] = temp;
    [this.data[i2], this.data[i1]] = [this.data[i1], this.data[i2]]
  }
  // 删除堆顶
  pop() {
    if(this.size() === 1) return this.data.shift();
    const top = this.data[0];
    this.data[0] = this?.data?.pop() as ListNode;
    this.shiftDown(0);
    return top;
  }
  //获取堆顶
  peek() {
    return this.size() > 0 ? this.data[0] : null;
  }
  // 获取堆大小
  size() {
    return this.data.length;
  }
  // 获取堆数组
  get() {
    return this.data;
  }
}
export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const res = new ListNode(0);
  const heap = new MinHeap();
  let p: any = res;
  lists.forEach((l) => {
    if(l && l.val) heap.push(l);
  })
  while(heap.size()) {
    const n = heap.pop();
    p.next = n;
    p = p.next;
    if(n?.next) heap.push(n.next);
  }
  return res.next;
};