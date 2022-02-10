import { defaultEquals } from '../../util';
import { Node } from '../../models/linked-list-models';

export default class LinkedList {
  protected head: any;
  protected count: number;
  constructor(protected equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
  }
  push(element: any) {
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
    this.count++;
  }
  insert(element: any, position: number) {
    // 检查越界值
    if(position > 0 && position <= this.count + 1) {
      const node = new Node(element);
      // 插入的是第一项的情况
      if(position === 1) {
        const current = this.head;
        node.next = current;
        this.head = node;
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
  getElementAt(index: number) {
    // 检查越界值
    if(index > 0 && index <= this.count) {
      let current: Node = this.head;
      for (let i = 1; i < index && current; i++) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }
  remove(element: any) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }
  indexOf(element: any) {
    let current: Node = this.head;
    for (let i = 1; i <= this.count && current; i++){
      if(this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
  removeAt(position: number) {
    // 检查越界值
    if(position > 0 && position <= this.count) {
      let current: Node = this.head;
      // 移除的是第一项的情况
      if(position === 1) {
        this.head = current.next;
      } else {
        const previous: any = this.getElementAt(position - 1);
        current = previous?.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
  isEmpty() {
    return this.count === 0;
  }
  size() {
    return this.count;
  }
  getHead() {
    return this.head;
  }
  clear() {
    this.head = undefined;
    this.count = 0;
  }
  toString() {
    if(this.head == null) return '';
    let res = `${this.head.element}`;
    let current:Node = this.head.next;
    while(current) {
      res += `, ${current.element}`
      current = current.next;
    }
    return res;
  }
}