import "mocha";
import { expect, assert } from "chai";
import Dictionary from "../dictionary";

describe("字典-Dictionary 测试", function () {
  const d = new Dictionary();
  it("set", function () {
    d.set('name', 'test');
    d.set('age', 18);
    d.set(1, 1);
    d.set(2, 2);
    // d.forEach((v: any, k: any) => {
    //   console.log(k, v);
    // });
    expect(d.size()).to.be.deep.equal(4);
  });
  it("has", function () {
    const res = d.has('name');
    assert.deepEqual(res, true);
  });
  it("delete", function () {
    const res = d.delete(1);
    assert.deepEqual(res, true);
  });
  it("get", function () {
    const name = d.get('name');
    assert.deepEqual(name, 'test');
  });
  it("keys", function () {
    const keys = d.keys();
    assert.deepEqual(keys, ['2', 'name', 'age']);
  });
  it("entries", function () {
    const entries = d.entries();
    assert.deepEqual(entries, [
      { key: 2, value: 2 },
      { key: 'name', value: 'test' },
      { key: 'age', value: 18 }
    ]);
  });
  it("values", function () {
    const values = d.values();
    assert.deepEqual(values, [2, 'test', 18]);
  });
  it("size", function () {
    const size = d.size();
    assert.deepEqual(size, 3);
  });
  it("isEmpty", function () {
    const isEmpty = d.isEmpty();
    assert.deepEqual(isEmpty, false);
  });
  it("toString", function () {
    const str = d.toString();
    assert.deepEqual(str, '[#2: 2], [#name: test], [#age: 18]');
  });
  it("clear", function () {
    d.clear();
    assert.deepEqual(d.size(), 0);
  });
});