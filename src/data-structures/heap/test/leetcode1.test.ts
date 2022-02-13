import "mocha";
import { expect, assert } from "chai";
import { topKFrequent, topKFrequent1 } from "../leetcode1";

describe("前 K 个高频元素 LeetCode 测试", function () {
  it("前 K 个高频元素 - Map+Set", function () {
    // 输入: nums = [1,1,1,2,2,3], k = 2
    // 输出: [1,2]
    assert.deepEqual(topKFrequent1([1,1,1,2,2,3], 2), [1, 2]);
  });
  it("前 K 个高频元素 - Map+Set", function () {
    // 输入: nums = [1], k = 1
    // 输出: [1]
    assert.deepEqual(topKFrequent1([1], 1), [1]);
  });
  it("前 K 个高频元素 - 最小堆", function () {
    // 输入: nums = [1,1,1,2,2,3], k = 2
    // 输出: [1,2]
    assert.deepEqual(topKFrequent([1,1,1,2,2,3], 2), [1, 2]);
  });
  it("前 K 个高频元素 - 最小堆", function () {
    // 输入: nums = [1], k = 1
    // 输出: [1]
    assert.deepEqual(topKFrequent([1], 1), [1]);
  });
});