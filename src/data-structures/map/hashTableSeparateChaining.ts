import { defaultToString } from '../../util';
import { ValuePair } from '../../models/value-pair';
import { Node } from '../../models/linked-list-models';
import HashTable from './hashTable';
import LinkedList from '../linked-list/linkedList';

export default class HashTableSeparateChaining extends HashTable {
  constructor(protected toStringFn = defaultToString) {
    super(toStringFn);
  }
  put(key: any, value: any): boolean {
    if(key != null && value != null) {
      const position = this.hashCode(key);
      if(!this.table[position]) {
        this.table[position] = new LinkedList();
      }
      this.table[position].push(new ValuePair(key, value));
      return true;
    }
    return false;
  }
  get(key: any) {
    const position = this.hashCode(key);
    const linkedList: LinkedList = this.table[position];
    if(linkedList && !linkedList.isEmpty()) {
      let current: Node = linkedList.getHead();
      while(current) {
        if(current?.element?.key === key) {
          return current?.element?.value;
        }
        current = current.next;
      }
    }
    return undefined;
  }
  remove(key: any): boolean {
    const position = this.hashCode(key);
    const linkedList: LinkedList = this.table[position];
    if(linkedList && !linkedList.isEmpty()) {
      let current: Node = linkedList.getHead();
      while(current) {
        if(current.element.key === key) {
          linkedList.remove(current.element);
          if(linkedList.isEmpty()) {
            delete this.table[position];
          }
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }
  size(): number {
    let count = 0;
    Object.values(this.table).forEach((linkedList: any) => {
      count += linkedList.size();
    });
    return count;
  }
}