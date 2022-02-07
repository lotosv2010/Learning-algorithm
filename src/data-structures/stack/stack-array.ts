class Stack {
  private stack: Array<any>;
  constructor() {
    this.stack = []
  }
  push(val: any) {
    this.stack.push(val);
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.size() - 1]
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear() {
    this.stack = [];
  }
  size() {
    return this.stack.length;
  }
}

export default Stack;