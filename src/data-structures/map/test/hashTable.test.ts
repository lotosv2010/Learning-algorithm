import "mocha";
import { expect, assert } from "chai";
import HashTable from "../hashTable";

describe("散列表-HashTable 测试", function () {
  const hash = new HashTable();
  it("put", function () {
    hash.put('Gandalf', 'Gandalf@email.com');
    hash.put('John', 'John@email.com');
    hash.put('Tyrion', 'Tyrion@email.com');
    expect(hash.size()).to.be.deep.equal(3);
  });
  it("size", function () {
    const size = hash.size();
    assert.equal(size, 3);
  });
  it("get", function () {
    const value = hash.get('Gandalf');
    expect(value).to.be.deep.equal('Gandalf@email.com');
  });
  it("hashCode", function () {
    const hashCode = hash.hashCode('Gandalf');
    assert.equal(hashCode, 19);
  });
  it("getTable", function () {
    const res = {
      '16': { key: 'Tyrion', value: 'Tyrion@email.com' },
      '19': { key: 'Gandalf', value: 'Gandalf@email.com' },
      '29': { key: 'John', value: 'John@email.com' }
    }
    const table = hash.getTable();
    expect(table).to.be.deep.equal(res);
  });
  it("isEmpty", function () {
    const isEmpty = hash.isEmpty();
    assert.equal(isEmpty, false);
  });
  it("toString", function () {
    const str = hash.toString();
    assert.equal(str, '16 => [#Tyrion: Tyrion@email.com], 19 => [#Gandalf: Gandalf@email.com], 29 => [#John: John@email.com]');
  });
  it("remove", function () {
    const res = hash.remove('Gandalf');
    assert.equal(res, true);
  });
  it("put", function () {
    hash.clear();
    assert.equal(hash.size(), 0);
  });
});