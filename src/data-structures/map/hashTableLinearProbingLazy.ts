import { defaultToString } from '../../util';
import { ValuePairLazy } from '../../models/value-pair';
import HashTable from './hashTable';

export default class HashTableLinearProbingLazy extends HashTable {
  constructor(protected toStringFn = defaultToString) {
    super(toStringFn);
  }
  put(key: any, value: any) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      if (!this.table[position] || (this.table[position] && this.table[position].isDeleted)) {
        this.table[position] = new ValuePairLazy(key, value);
      } else {
        let index = position + 1;
        while (this.table[index] && !this.table[position].isDeleted) {
          index++;
        }
        this.table[index] = new ValuePairLazy(key, value);
      }
      return true;
    }
    return false;
  }
  get(key: any) {
    const position = this.hashCode(key);
    if (this.table[position]) {
      if (this.table[position].key === key && !this.table[position].isDeleted) {
        return this.table[position].value;
      }
      let index = position + 1;
      while (this.table[index] && (this.table[index].key !== key || this.table[index].isDeleted)) {
        if (this.table[index].key === key && this.table[index].isDeleted) {
          return undefined;
        }
        index++;
      }
      if (this.table[index] && this.table[index].key === key && !this.table[index].isDeleted) {
        return this.table[index].value;
      }
    }
    return undefined;
  }
  remove(key: any) {
    const position = this.hashCode(key);
    if (this.table[position]) {
      if (this.table[position].key === key && !this.table[position].isDeleted) {
        this.table[position].isDeleted = true;
        return true;
      }
      let index = position + 1;
      while (this.table[index] && (this.table[index].key !== key || this.table[index].isDeleted)) {
        index++;
      }
      if (this.table[index] && this.table[index].key === key && !this.table[index].isDeleted) {
        this.table[index].isDeleted = true;
        return true;
      }
    }
    return false;
  }
  size() {
    let count = 0;
    Object.values(this.table).forEach((valuePair: any) => {
      count += valuePair.isDeleted === true ? 0 : 1;
    });
    return count;
  }
}