export default class Set {
  protected items: Record<any, any>;
  constructor() {
    this.items = {};
  }
  add(element: any) {
    if(!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }
  delete(element: any) {
    if(this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }
  has(element: any) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }
  clear() {
    this.items = {};
  }
  size() {
    return Object.keys(this.items).length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  values() {
    return Object.values(this.items);
  }
  // 并集
  union(otherSet: Set) {
    const result = new Set();
    this.values().forEach(v => result.add(v));
    otherSet.values().forEach(v => result.add(v));
    return result;
  }
  // 交集
  intersection(otherSet: Set) {
    const result = new Set();
    const smallerSet = this.size() <= otherSet.size() ? this : otherSet;
    const biggerSet = this.size() > otherSet.size() ? this : otherSet;
    smallerSet.values().forEach(v => {
      if(biggerSet.has(v)) {
        result.add(v);
      }
    });
    return result;
  }
  // 差集
  difference(otherSet: Set) {
    const result = new Set();
    this.values().forEach(v => {
      if(!otherSet.has(v)) {
        result.add(v);
      }
    });
    return result;
  }
  // 子集
  isSubsetOf(otherSet: Set) {
    if(this.size() > otherSet.size()) return false;
    let isSubset = true;
    this.values().every(v => {
      if(!otherSet.has(v)) {
        isSubset = false;
        return false;
      }
      return true;
    });
    return isSubset;
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const values = this.values();
    let objString = `${values[0]}`;
    for (let i = 1; i < values.length; i++) {
      objString = `${objString}, ${values[i].toString()}`;
    }
    return objString;
  }
}