import DoublyLinkedList from './doublyLinkedList';

export default class StackLinkedList {
  protected stack: DoublyLinkedList;
  constructor() {
    this.stack = new DoublyLinkedList();
  }
  push(element: any) {
    this.stack.push(element);
  }
  pop() {
    if(this.stack.isEmpty()) {
      return undefined;
    }
    return this.stack.removeAt(this.size());
  }
  peek() {
    if(this.isEmpty()) {
      return undefined;
    }
    return this.stack.getElementAt(this.size())?.element;
  }
  isEmpty() {
    return this.stack.isEmpty();
  }
  clear() {
    this.stack.clear();
  }
  size() {
    return this.stack.size();
  }
  toString() {
    return this.stack.toString();
  }
}