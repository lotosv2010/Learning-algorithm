import { defaultToString } from '../../util';
import { ValuePair } from '../../models/value-pair';
import HashTable from './hashTable';

export default class HashTableLinearProbing extends HashTable {
  constructor(protected toStringFn = defaultToString) {
    super(toStringFn);
  }
  put(key: any, value: any): boolean {
    if(key != null && value != null) {
      const position = this.hashCode(key);
      if(!this.table[position]) {
        this.table[position] = new ValuePair(key, value);
      } else {
        let index = position + 1;
        while(this.table[index]) {
          index++;
        }
        this.table[index] = new ValuePair(key, value);
      }
      return true;
    }
    return false;
  }
  get(key: any) {
    const position = this.hashCode(key);
    if(this.table[position]) {
      if(this.table[position].key === key) {
        return this.table[position].value;
      }
      let index = position + 1;
      while(this.table[index] && this.table[index].key !== key) {
        index++;
      }
      if(this.table[index] && this.table[index].key === key) {
        return this.table[index].value;
      }
    }
    return undefined;
  }
  remove(key: any): boolean {
    const position = this.hashCode(key);
    if(this.table[position]) {
      if(this.table[position].key === key) {
        delete this.table[position];
        this.verifyRemoveSideEffect(key, position);
        return true;
      }
      let index = position + 1;
      while(this.table[index] && this.table[index].key !== key) {
        index++;
      }
      if(this.table[index] && this.table[index].key === key) {
        delete this.table[index];
        this.verifyRemoveSideEffect(key, index);
        return true;
      }
    }
    return false;
  }
  verifyRemoveSideEffect(key: any, removedPosition: any) {
    const hash = this.hashCode(key);
    let index = removedPosition + 1;
    while(this.table[index]) {
      const posHash = this.hashCode(this.table[index].key);
      if(posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index];
        delete this.table[index];
        removedPosition = index;
      }
      index++;
    }
  }
}