import LinkedList from './linkedList';
import { defaultEquals } from '../../util';
import { Node } from '../../models/linked-list-models';

export default class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }
  push(element: any): void {
    const node = new Node(element);
    let current: Node;
    if(this.head == null) { // 链表为空的情况
      this.head = node;
    } else {
      current = this.head;
      while(current.next) { // 遍历获取最后一项
        current = current.next;
      }
      current.next = node; // 将其next赋为新元素，建立链接
    }
    node.next = this.head; // 将新元素的next赋为链表头，建立链接
    this.count++;
  }
  insert(element: any, position: number): boolean {
    // 检查越界值
    if(position > 0 && position <= this.size() + 1) {
      const node = new Node(element);
      let current = this.head;
      // 插入的是第一项的情况
      if(position === 1) {
        if(this.head == null) {
          this.head = node;
          node.next = this.head;
        } else {
          node.next = current;
          current = this.getElementAt(this.size());
          this.head = node;
          current.next = this.head;
        }
      } else {
        const previous: any = this.getElementAt(position - 1);
        const current = previous?.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }
  removeAt(position: number) {
    // 检查越界值
    if(position > 0 && position <= this.size()) {
      let current = this.head;
      // 移除的是第一项的情况
      if(position === 1) {
        if(this.size() === 1) {
          this.head = undefined;
        } else {
          const removed = this.head;
          const tail: any = this.getElementAt(this.size());
          this.head = this.head.next;
          tail.next = this.head;
          current = removed;
        }
      } else {
        const previous: any = this.getElementAt(position - 1);
        current = previous?.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
  }
  toString() {
    if(this.head == null) return '';
    let res = `${this.head.element}`;
    let current:Node = this.head.next;
    let count = 1;
    while(current && count < this.size()) {
      res += `, ${current.element}`
      current = current.next;
      count++;
    }
    return res;
  }
}