import { defaultToString } from '../../util';
import { ValuePair } from '../../models/value-pair';

export default class HashTable {
  protected table: any;
  constructor(protected toStringFn = defaultToString) {
    this.table = {};
  }
  loseHashCode(key: any) {
    if(typeof key === 'number') {
      return key;
    }
    const tableKey: string = this.toStringFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }
  djb2HashCode(key: any) {
    const tableKey = this.toStringFn(key);
    let hash = 5381;
    for (let i = 0; i < tableKey.length; i++) {
      hash = (hash * 33) + tableKey.charCodeAt(i);
    }
    return hash % 1013;
  } 
  hashCode(key: any) {
    return this.loseHashCode(key);
  }
  put(key: any, value: any) {
    if(key != null && value != null) {
      const position = this.hashCode(key);
      this.table[position] = new ValuePair(key, value);
      return true;
    }
    return false;
  }
  get(key: any) {
    const hash = this.hashCode(key);
    const valuePair: ValuePair = this.table[hash];
    return (valuePair && valuePair?.value) || undefined;
  }
  remove(key: any) {
    const hash = this.hashCode(key);
    const valuePair: ValuePair = this.table[hash];
    if(valuePair) {
      delete this.table[hash];
      return true;
    }
    return false;
  }
  getTable() {
    return this.table;
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return Object.keys(this.table).length;
  }
  clear() {
    this.table = {};
  }
  toString() {
    if(this.isEmpty()) return '';
    const keys = Object.keys(this.table);
    let res = `${keys[0]} => ${this.table[keys[0]].toString()}`;
    for (let i =1; i < keys.length; i++) {
      res = `${res}, ${keys[i]} => ${this.table[keys[i]].toString()}`
    }
    return res;
  }
}