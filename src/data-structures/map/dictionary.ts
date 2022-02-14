import { defaultToString } from '../../util';
import { ValuePair } from '../../models/value-pair';

export default class Dictionary{
  protected table: any;
  constructor(protected toStringFn = defaultToString) {
    this.table = {};
  }
  clear() {
    this.table = {};
  }
  delete(key: any) {
    if(this.has(key)) {
      const strKey = this.toStringFn(key);
      delete this.table[strKey]
      return true;
    }
    return false;
  }
  entries() {
    return Object.values(this.table);
  }
  forEach(callback: Function) {
    const entries = this.entries();
    for (let i = 0; i < entries.length; i++) {
      const { key, value }: any = entries[i];
      const result = callback(value, key);
      // if(!result) break;
    }
  }
  get(key: any) {
    const strKey = this.toStringFn(key);
    const valuePair: ValuePair = this.table[strKey];
    return valuePair == null ? undefined : valuePair.value;
  }
  has(key: any) {
    return Object.prototype.hasOwnProperty.call(this.table, this.toStringFn(key));
  }
  keys() {
    return Object.keys(this.table);
  }
  set(key: any, value: any) {
    if(key != null && value != null) {
      const strKey = this.toStringFn(key);
      this.table[strKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }
  size() {
    return this.keys().length;
  }
  values() {
    return this.entries().map(({value}: any) => value);
  }
  isEmpty() {
    return this.size() === 0;
  }
  toString() {
    if(this.isEmpty()) return '';
    const valuePair: ValuePair[] = this.entries() as ValuePair[];
    let res = `${valuePair[0].toString()}`;
    for (let i = 1; i < valuePair.length; i++) {
      res = `${res}, ${valuePair[i].toString()}`;
    }
    return res;
  }
}