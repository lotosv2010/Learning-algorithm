/**
 * 时间复杂度：O(m * logk)
 * 间复杂度：O(k)
 */
export function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
  console.time('查找和最小的K对数字');
  const heap = new MaxHeap();
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const item = [nums1[i], nums2[j]]
      heap.push(item);
      if(heap.size() > k) {
        heap.pop();
      }
      if (heap.size() === k && item[0] + item[1] >= heap.peek()[0] + heap.peek()[1]) break
    }
    if (heap.size() === k && nums1[i] + nums2[0] >= heap.peek()[0] + heap.peek()[1]) break
  }
  const res = heap.get();
  console.timeEnd('查找和最小的K对数字');
  return res;
};

class MaxHeap {
  constructor(private data: Array<any> = []) {}
  // 添加元素
  push(value: any) {
    this.data.push(value);
    this.shiftUp(this.size() - 1);
  }
  // 上移
  shiftUp(index: number) {
    if(index === 0) return; // 当为堆顶时，停止上移
    const parentIndex = this.getParentIndex(index);
    if(this.data[parentIndex] && this.compare(this.data[parentIndex], this.data[index])) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  // 下移
  shiftDown(index: number) {
    const leftIndex =  this.getLeft(index);
    const rightIndex = this.getRight(index);
    if (
      this.data[leftIndex] &&
      this.compare(this.data[index], this.data[leftIndex])
    ) {
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }
    if (
      this.data[rightIndex] &&
      this.compare(this.data[index], this.data[rightIndex])
    ) {
      this.swap(rightIndex, index)
      this.shiftDown(rightIndex)
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
    [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]]
  }
  // 删除堆顶
  pop() {
    if (this.size() === 1) return this.data.pop()
    this.data[0] = this.data.pop()
    this.shiftDown(0)
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
  // 比较
  compare(a:number[], b: number[]) {
    // console.log(a, b)
    return a[0] + a[1] < b[0] + b[1];
  }
}