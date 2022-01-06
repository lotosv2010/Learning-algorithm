export class MinHeap {
  constructor(private data: Array<number> = []) {}
  // 添加元素
  push(value: number) {
    this.data.push(value);
    this.shiftUp(this.data.length - 1);
  }
  // 上移
  shiftUp(index: number) {
    if(index === 0) return; // 当为堆顶时，停止上移
    const parentIndex = this.getParentIndex(index);
    if(this.data[parentIndex] > this.data[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  // 下移
  shiftDown(index: number) {
    const leftIndex = this.getLeft(index);
    const rightIndex = this.getRight(index);
    if(this.data[leftIndex] < this.data[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if(this.data[rightIndex]< this.data[index]) {
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
    this.data[0] = this?.data?.pop() as number;
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
