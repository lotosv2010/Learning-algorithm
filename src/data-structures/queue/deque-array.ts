class Deque {
  private deque: any[];
  constructor() {
    this.deque = [];
  }
  addFront(element: any) {
    this.deque.unshift(element)
  }
  addBack(element: any) {
    this.deque.push(element);
  }
  removeFront() {
    return this.deque.shift();
  }
  removeBack() {
    return this.deque.pop();
  }
  peekFront() {
    return this.deque[0];
  }
  peekBack() {
    return this.deque[this.size() - 1]
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.deque.length;
  }
  clear() {
    this.deque = [];
  }
  toString() {
    return this.deque.toString();
  }
}
export default Deque;
