import "mocha";
import { expect, assert } from "chai";
import Set from "../set";

describe("Set 测试", function () {
  const set = new Set();
  it("add", function () {
    set.add(1);
    set.add(2);
    set.add(3);
    assert.deepEqual(set.size(), 3);
  });
  it("has", function () {
    const res = set.has(3);
    assert.equal(res, true);
  });
  it("size", function () {
    const size = set.size();
    assert.deepEqual(size, 3);
  });
  it("values", function () {
    const values = set.values();
    expect(values).to.be.deep.equal([1, 2, 3]);
  });
  it("toString", function () {
    const values = set.toString();
    expect(values).to.be.deep.equal('1, 2, 3');
  });
  it("union", function () {
    const otherSet = new Set();
    otherSet.add(3);
    otherSet.add(4);
    otherSet.add(5);
    const res = set.union(otherSet);
    expect(res.values()).to.be.deep.equal([1,2,3,4,5]);
  });
  it("intersection", function () {
    const otherSet = new Set();
    otherSet.add(2);
    otherSet.add(3);
    otherSet.add(4);
    otherSet.add(5);
    const res = set.intersection(otherSet);
    expect(res.values()).to.be.deep.equal([2,3]);
  });
  it("difference", function () {
    const otherSet = new Set();
    otherSet.add(2);
    otherSet.add(3);
    otherSet.add(4);
    otherSet.add(5);
    const res = set.difference(otherSet);
    expect(res.values()).to.be.deep.equal([1]);
  });
  it("isSubsetOf", function () {
    const otherSet = new Set();
    otherSet.add(1);
    otherSet.add(2);
    otherSet.add(3);
    otherSet.add(4);
    const res = set.isSubsetOf(otherSet);
    expect(res).to.be.deep.equal(true);
  });
  it("delete", function () {
    const res = set.delete(3);
    expect(res).to.be.deep.equal(true);
  });
  it("clear", function () {
    set.clear();
    expect(set.size()).to.be.deep.equal(0);
  });
});