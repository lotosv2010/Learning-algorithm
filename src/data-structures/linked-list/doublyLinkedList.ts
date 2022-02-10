import { defaultEquals } from '../../util';
import { DoublyNode } from '../../models/linked-list-models';
import LinkedList from './linkedList';

export default class DoublyLinkedList extends LinkedList{
  protected tail: any;
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }
  push(element: any) {
    const node = new DoublyNode(element);
    let current: DoublyNode;
    if(this.head == null) { // 链表为空的情况
      this.head = node;
      this.tail = node;
    } else {
      current = this.tail;
      current.next = node; // 将其next赋为新元素，建立链接
      node.prev = current;
      this.tail = node;
    }
    this.count++;
  }
  insert(element: any, position: number) {
    // 检查越界值
    if(position > 0 && position <= this.count) {
      const node = new DoublyNode(element);
      // 插入的是第一项的情况
      if(position === 1) {
        if(this.head == null) {
          this.head = node;
          this.tail = node;
        } else {
          const current: DoublyNode = this.head;
          node.next = current;
          current.prev = node;
          this.head = node;
        }
      } else if(position === this.size()) { // 插入的是最后一项的情况
        // this.push(element);
        const current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        const previous: any = this.getElementAt(position - 1);
        const current: DoublyNode = previous?.next;
        node.next = current;
        previous.next = node;
        node.prev = previous;
        current.prev = node;
      }
      this.count++;
      return true;
    }
    return false;
  }
  removeAt(position: number) {
    // 检查越界值
    if(position > 0 && position <= this.count) {
      let current: DoublyNode = this.head;
      // 移除的是第一项的情况
      if(position === 1) {
        this.head = current.next;
        if(this.size() === 1) { // 如果只有一项，更新tail
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      } else if(position === this.size()) { // 移除的是最后一项的情况
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        const previous: any = this.getElementAt(position - 1);
        current = previous?.next;
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
  getTail() {
    return this.tail;
  }
  clear() {
    super.clear();
    this.tail = undefined;
  }
  inverseToString() {
    if (this.tail == null) {
      return '';
    }
    let objString = `${this.tail.element}`;
    let previous = this.tail.prev;
    while (previous != null) {
      objString = `${objString},${previous.element}`;
      previous = previous.prev;
    }
    return objString;
  }
}