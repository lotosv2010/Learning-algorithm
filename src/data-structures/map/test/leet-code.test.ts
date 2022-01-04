import "mocha";
import { expect, assert } from "chai";
import { intersection, isValid, twoSum } from "../leet-code";

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

describe("有效的括号(Map方式) LeetCode 测试", function () {
  it("左括号必须用相同类型的右括号闭合", function () {
    expect(isValid('({[]})')).to.be.equal(true);
  });
  it("括号必须以正确的顺序闭合", function () {
    assert.equal(isValid('(()()())'), true);
  });
  it("括号个数不匹配", function () {
    assert.equal(isValid('(()()()'), false);
  });
  it("括号类型不匹配", function () {
    assert.equal(isValid('(()()()]'), false);
  });
});

describe("两数之和(Map) LeetCode 测试", function () {
  it("两个数组的交集", function () {
    // 输入：nums = [2,7,11,15], target = 9
    // 输出：[0,1]
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(nums, target)).to.be.deep.equal([0, 1]);
  });
  it("两个数组的交集", function () {
    // 输入：nums = [3, 2, 4], target = 6
    // 输出：[1, 2]
    const nums = [3, 2, 4];
    const target = 6;
    expect(twoSum(nums, target)).to.be.deep.equal([1, 2]);
  });
  it("两个数组的交集", function () {
    // 输入：nums = [3, 3], target = 6
    // 输出：[0,1]
    const nums = [3, 3];
    const target = 6;
    expect(twoSum(nums, target)).to.be.deep.equal([0, 1]);
  });
});