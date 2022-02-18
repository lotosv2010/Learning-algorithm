import { Compare, defaultCompare } from '../../util';

export default class MinHeap<T> {
  protected heap: T[];
  constructor(protected compareFn = defaultCompare) {
    this.heap = [];
  }
  // 获取父节点
  private getParentIndex(index: number) {
    return (index - 1) >> 1; // 取商，等价 Math.floor((index - 1) / 2)
  }
  // 获取左节点
  private getLeftIndex(index: number) {
    return index * 2 + 1;
  }
  // 获取右节点
  private getRightIndex(index: number) {
    return index * 2 + 2;
  }
  // 添加元素
  insert(value: T) {
    if(value != null) {
      this.heap.push(value);
      this.siftUp(this.heap.length - 1);
      return true;
    }
    return false;
  }
  // 上移
  private siftUp(index: number) {
    // 迭代方式
    let parent: number = this.getParentIndex(index);
    while(index > 0 && this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN) { // 当为堆顶时，停止上移
      this.swap(parent, index);
      index = parent;
      parent = this.getParentIndex(index);
    }
    // 递归方式
    // if(index === 0) return // 当为堆顶时，停止上移
    // let parent: number = this.getParentIndex(index);
    // if(this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN) {
    //   this.swap(parent, index);
    //   this.siftUp(parent);
    // }
  }
  // 下移
  private siftDown(index: number) {
    let current = index;
    let left = this.getLeftIndex(index);
    let right = this.getRightIndex(index);
    if(left < this.size() && this.compareFn(this.heap[current], this.heap[left]) === Compare.BIGGER_THAN) {
      current = left;
    }
    if(right < this.size() && this.compareFn(this.heap[current], this.heap[right]) === Compare.BIGGER_THAN) {
      current = right;
    }
    if(index !== current) {
      this.swap(index, current);
      this.siftDown(current);
    }
  }
  // 交换
  private swap(index1: number, index2: number) {
    [this.heap[index2], this.heap[index1]] = [this.heap[index1], this.heap[index2]];
  }
  // 删除堆顶
  extract() {
    if (this.isEmpty()) {
      return undefined;
    }
    if (this.size() === 1) {
      return this.heap.shift();
    }
    const removedValue = this.heap[0];
    this.heap[0] = this.heap.pop() as T;
    this.siftDown(0);
    return removedValue;
  }
  // ****
  heapify(array: T[]) {
    if (array) {
      this.heap = array;
    }
    const maxIndex = Math.floor(this.size() / 2) - 1;
    for (let i = 0; i <= maxIndex; i++) {
      this.siftDown(i);
    }
    return this.heap;
  }
  // 获取堆大小
  size() {
    return this.heap.length;
  }
  // 堆是否为空
  isEmpty() {
    return this.heap.length === 0;
  }
  // 清空堆
  clear() {
    this.heap = [];
  }
  //获取堆顶
  peek() {
    return this.isEmpty() ? undefined : this.heap[0];
  }
  // 获取堆数组
  get() {
    return this.heap;
  }
}