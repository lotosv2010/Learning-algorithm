import "mocha";
import { expect, assert } from "chai";
import { isNumber, isNumber1, pacificAtlantic } from "../leet-code";

describe("有效数字(Graph)-图 LeetCode 测试", function () {
  it("有效数字", function () {
    // 输入：s = "0"
    // 输出：true
    const s = '1E9';
    expect(isNumber(s)).to.be.deep.equal(true);
  });
  it("有效数字", function () {
    // 输入：s = "e"
    // 输出：false
    const s = 'e';
    expect(isNumber(s)).to.be.deep.equal(false);
  });
  it("有效数字", function () {
    // 输入：s = "."
    // 输出：false
    const s = '.';
    expect(isNumber(s)).to.be.deep.equal(false);
  });
  it("有效数字", function () {
    // 输入：s = ".1"
    // 输出：true
    const s = '.1';
    expect(isNumber(s)).to.be.deep.equal(true);
  });
  it("有效数字", function () {
    // 输入：s = "1 a"
    // 输出：false
    const s = '1 a';
    expect(isNumber(s)).to.be.deep.equal(false);
  });
});
describe("有效数字(Graph)-正则表达式 LeetCode 测试", function () {
  it("有效数字", function () {
    // 输入：s = "0"
    // 输出：true
    const s = '0';
    expect(isNumber1(s)).to.be.deep.equal(true);
  });
  it("有效数字", function () {
    // 输入：s = "e"
    // 输出：false
    const s = 'e';
    expect(isNumber1(s)).to.be.deep.equal(false);
  });
  it("有效数字", function () {
    // 输入：s = "."
    // 输出：false
    const s = '.';
    expect(isNumber1(s)).to.be.deep.equal(false);
  });
  it("有效数字", function () {
    // 输入：s = ".1"
    // 输出：true
    const s = '.1';
    expect(isNumber1(s)).to.be.deep.equal(true);
  });
  it("有效数字", function () {
    // 输入：s = "1a"
    // 输出：false
    const s = '1a';
    expect(isNumber1(s)).to.be.deep.equal(false);
  });
});
describe("太平洋大西洋水流问题 LeetCode 测试", function () {
  it("太平洋大西洋水流问题", function () {
    const heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]];
    const res = [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]];
    expect(pacificAtlantic(heights)).to.be.deep.equal(res);
  });
});