export class ValuePair {
  constructor(public key: any, public value: any) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

export class ValuePairLazy extends ValuePair {
  constructor(public key: any, public value: any, public isDeleted = false) {
    super(key, value);
    this.key = key;
    this.value = value;
    this.isDeleted = isDeleted;
  }
}