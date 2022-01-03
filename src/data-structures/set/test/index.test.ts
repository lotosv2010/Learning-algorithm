import "mocha";
import { expect, assert } from "chai";
import { unique, has, intersection, union } from "../index";

describe("集合Set 测试", function () {
  it("去重", function () {
    const arr1 = [1, 1, 2, 2];
    const arr2 = [0, 0, 0, 0];
    const arr3 = [1, 2, 3, 4];
    expect(unique(arr1)).to.be.deep.equal([1, 2]);
    expect(unique(arr2)).to.be.deep.equal([0]);
    assert.deepEqual(unique(arr3), [1, 2, 3, 4]);
  });
  it("判断一个元素是否在集合中", function () {
    const arr = [1, 2, 3, 4, 3, 6, 7, 8, 9, 4, 0];
    expect(has(arr, 0)).to.be.equal(true);
    expect(has(arr, 5)).to.be.deep.equal(false);
    assert.equal(has(arr, 9), true);
  });
  it("求交集", function () {
    const set1 = new Set([1, 1, 2, 2]);
    const set2 = new Set([2, 3]);
    assert.deepEqual(intersection(set1, set2), new Set([2]));
  });
  it("求并集", function () {
    const set1 = new Set([1, 1, 2, 2]);
    const set2 = new Set([2, 3]);
    expect(union(set1, set2)).to.be.deep.equal(new Set([1, 2, 3]));
  });
});