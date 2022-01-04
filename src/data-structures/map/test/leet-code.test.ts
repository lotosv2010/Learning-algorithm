import "mocha";
import { expect, assert } from "chai";
import { intersection } from "../leet-code";

describe("字典Map LeetCode 测试", function () {
  it("两个数组的交集", function () {
    // 输入：nums1 = [1,2,2,1], nums2 = [2,2]
    // 输出：[2]
    const nums1 = [1, 2, 2, 1];
    const nums2 = [2, 2];
    expect(intersection(nums1, nums2)).to.be.deep.equal([2]);
  });
  it("两个数组的交集", function () {
    // 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    // 输出：[9,4]
    const nums1 = [4, 9, 5];
    const nums2 = [9, 4, 9, 8, 4];
    assert.deepEqual(intersection(nums1, nums2), [9, 4]);
  });
});