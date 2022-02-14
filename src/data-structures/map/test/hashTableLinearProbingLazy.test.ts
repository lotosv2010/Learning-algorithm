import "mocha";
import { expect, assert } from "chai";
import HashTableLinearProbingLazy from "../hashTableLinearProbingLazy";

describe("散列表-HashTableLinearProbingLazy 测试", function () {
  const hash = new HashTableLinearProbingLazy();
  it("put", function () {
    hash.put('Ygritte', 'ygritte@email.com');
    hash.put('Jonathan', 'jonathan@email.com');
    hash.put('Jamie', 'jamie@email.com');
    hash.put('Jack', 'jack@email.com');
    hash.put('Jasmine', 'jasmine@email.com');
    hash.put('Jake', 'jake@email.com');
    hash.put('Nathan', 'nathan@email.com');
    hash.put('Athelstan', 'athelstan@email.com');
    hash.put('Sue', 'sue@email.com');
    hash.put('Aethelwulf', 'aethelwulf@email.com');
    hash.put('Sargeras', 'sargeras@email.com');
    expect(hash.size()).to.be.deep.equal(11);
  });
  it("size", function () {
    const size = hash.size();
    assert.equal(size, 11);
  });
  it("get", function () {
    const value = hash.get('Jonathan');
    expect(value).to.be.deep.equal('jonathan@email.com');
  });
  it("hashCode", function () {
    const hashCode = hash.hashCode('Jonathan');
    assert.equal(hashCode, 5);
  });
  it("isEmpty", function () {
    const isEmpty = hash.isEmpty();
    assert.equal(isEmpty, false);
  });
  it("toString", function () {
    const str = hash.toString();
    assert.equal(str, `4 => [#Ygritte: ygritte@email.com], 5 => [#Jonathan: jonathan@email.com], 6 => [#Jamie: jamie@email.com], 7 => [#Jack: jack@email.com], 8 => [#Jasmine: jasmine@email.com], 9 => [#Jake: jake@email.com], 10 => [#Nathan: nathan@email.com], 11 => [#Athelstan: athelstan@email.com], 12 => [#Sue: sue@email.com], 13 => [#Aethelwulf: aethelwulf@email.com], 14 => [#Sargeras: sargeras@email.com]`);
  });
  it("remove", function () {
    const res = hash.remove('Jonathan');
    assert.equal(res, true);
  });
  it("clear", function () {
    hash.clear();
    assert.equal(hash.size(), 0);
  });
});