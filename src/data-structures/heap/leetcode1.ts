// todo 前 K 个高频元素
class MinHeap {
  constructor(private data: Array<Record<string, number>> = []) {}
  // 添加元素
  push(value: Record<string, number>) {
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
    this.data[0] = this?.data?.pop() as Record<string, number>;
    this.shiftDown(0);
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
// Map+Set
// 时间复杂度：O(n * log n)，不符合题目要求
// 空间复杂度：O(n)
export function topKFrequent1(nums: number[], k: number): number[] {
  const map = new Map();
  const res = [...new Set(nums)];
  nums.forEach(n => {
    if(map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  });
  // console.log(Array.from(map).sort((a, b) => b[1] - a[1]).slice(0, k).map(n => n[0]))
  return res.sort((a, b) => map.get(b) - map.get(a)).slice(0, k);
};

// 最小堆
// 时间复杂度：O(n * log k)
// 空间复杂度：O(n)
export function topKFrequent(nums: number[], k: number): number[] {
  const heap = new MinHeap();
  const map = new Map();
  nums.forEach(n => {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  });
  map.forEach((val, key) => {
    heap.push({ val, key });
    if(heap.size() > k) {
      heap.pop();
    }
  });
  return heap.get().map((h: any) => h.key).sort();
}