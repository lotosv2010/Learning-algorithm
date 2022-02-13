class Deque<K, V> {
  private deque: Map<K, V>;
  private start: number;
  private end: number;
  constructor() {
    this.deque = new Map();
    this.start = 0;
    this.end = 0;
  }
  addFront(element: any) {
    if(this.isEmpty()) {
      this.addBack(element);
    } else if(this.start > 0)  {
      const key: any = --this.start;
      this.deque.set(key, element);
    } else {
      for (let i: any = this.end; i > 0; i--) {
        const k: any = i - 1;
        const v: any = this.deque.get(k)
        this.deque.set(i, v);
      }
      this.end++;
      const key: any = this.start = 0;
      this.deque.set(key, element);
    } 
  }
  addBack(element: any) {
    const key: any = this.end;
    this.deque.set(key, element);
    this.end++;
  }
  removeFront() {
    if(this.size() === 0) return undefined;
    const key: any = this.start++;
    const res = this.deque.get(key);
    this.deque.delete(key);
    return res;
  }
  removeBack() {
    if(this.size() === 0) return undefined;
    const key: any = --this.end;
    const res = this.deque.get(key);
    this.deque.delete(key);
    return res;
  }
  peekFront() {
    if(this.size() === 0) return undefined;
    const key: any = this.start;
    return this.deque.get(key);
  }
  peekBack() {
    if(this.size() === 0) return undefined;
    const key: any = --this.end;
    return this.deque.get(key);
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.deque.size;
  }
  clear() {
    this.deque.clear();
  }
  toString() {
    return Array.from(this.deque.values()).toString();
  }
}
export default Deque;
