class Queue<K, V> {
  private queue: Map<K, V>;
  private end: number;
  private start: number;
  constructor() {
    this.queue = new Map();
    this.end = 0;
    this.start = 0;
  }
  enqueue(element: any) {
    const key: any = this.end++;
    this.queue.set(key, element);
  }
  dequeue() {
    const key: any = this.start++;
    const res = this.queue.get(key);
    this.queue.delete(key);
    return res;
  }
  peek() {
    const key: any = this.start;
    return this.queue.get(key);
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.queue.size;
  }
  clear() {
    this.queue.clear();
    this.start = 0;
    this.end = 0;
  }
  toString() {
    return Array.from(this.queue.values()).toString();
  }
}
export default Queue;