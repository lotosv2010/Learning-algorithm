import "mocha";
import { expect, assert } from "chai";
import { kSmallestPairs } from "../index";

describe("leetcode-373 测试", function () {
  it("查找和最小的K对数字", function () {
    const nums1 = [1,7,11]
    const nums2 = [2,4,6]
    expect(kSmallestPairs(nums1, nums2, 3)).to.be.deep.equal([ [ 1, 6 ], [ 1, 2 ], [ 1, 4 ] ]);
  });
  it('查找和最小的K对数字', function () {
    const nums1 = [1,1,2];
    const nums2 = [1,2,3];
    expect(kSmallestPairs(nums1, nums2, 2)).to.be.deep.equal([ [ 1, 1 ], [ 1, 1 ] ]);
  });
  it('查找和最小的K对数字', function () {
    const nums1 = [0,0,0,0,0,2,2,2,2];
    const nums2 = [-3,22,35,56,76];
    const res = [[0,35],[2,22],[0,35],[0,22],[2,22],[0,22],[0,35],[2,-3],[2,-3],[2,22],[2,22],[0,-3],[0,22],[0,22],[0,35],[0,-3],[0,-3],[2,-3],[2,-3],[0,22],[0,-3],[0,-3]];
    expect(kSmallestPairs(nums1, nums2, 22)).to.be.deep.equal(res);
  });
});