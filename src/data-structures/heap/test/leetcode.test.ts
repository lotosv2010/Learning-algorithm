import "mocha";
import { expect, assert } from "chai";
import { findKthLargest } from "../leetcode";

describe("数组中的第K个最大元素 LeetCode 测试", function () {
  it("数组中的第K个最大元素", function () {
    // 输入: [3,2,1,5,6,4] 和 k = 2
    // 输出: 5
    expect(findKthLargest([3,2,1,5,6,4], 2)).to.be.deep.equal(5);
  });
  it("数组中的第K个最大元素", function () {
    // 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
    // 输出: 4
    expect(findKthLargest([3,2,3,1,2,4,5,5,6], 4)).to.be.deep.equal(4);
  });
});