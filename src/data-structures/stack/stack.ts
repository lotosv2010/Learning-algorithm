class Stack<K, V> {
  private stack: Map<K, V>;
  constructor() {
    this.stack = new Map<K, V>();
  }
  push(val: any) {
    const key: any = this.size();
    this.stack.set(key, val);
  }
  pop() {
    const key: any = this.size() - 1;
    const result = this.stack.get(key);
    this.stack.delete(key);
    return result;
  }
  peek() {
    const key: any = this.size() - 1;
    return this.stack.get(key);
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear() {
    this.stack.clear();
  }
  size() {
    return this.stack.size;
  }
}
export default Stack;