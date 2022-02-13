import { defaultCompare, defaultEquals, Compare } from '../../util';
import { Node } from '../../models/linked-list-models';
import LinkedList from './linkedList';

export default class SortedLinkedList extends LinkedList{
  constructor(protected equalsFn = defaultEquals, protected compareFn = defaultCompare) {
    super(equalsFn);
  }
  push(element: any) {
    if (this.isEmpty()) {
      super.push(element);
    } else {
      const index = this.getIndexNextSortedElement(element);
      super.insert(element, index);
    }
  }
  insert(element: any, position: number = 1): boolean {
    if(this.isEmpty()) {
      return super.insert(element, position === 1 ? position : 1);
    }
    const index = this.getIndexNextSortedElement(element);
    return super.insert(element, index);
  }
  getIndexNextSortedElement(element: any) {
    let current: Node = this.head;
    let i = 1
    for(; i <= this.size() && current; i++) {
      const comp = this.compareFn(element, current.element);
      if(comp === Compare.LESS_THAN) {
        return i;
      }
      current = current.next;
    }
    return i;
  }
}