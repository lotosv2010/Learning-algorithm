class Queue {
  private queue: any[];
  constructor() {
    this.queue = [];
  }
  enqueue(element: any) {
    this.queue.push(element);
  }
  dequeue() {
    this.queue.shift();
  }
  peek() {
    return this.queue[0];
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.queue.length;
  }
  clear() {
    this.queue = [];
  }
  toString() {
    return this.queue.toString();
  }
}
export default Queue;