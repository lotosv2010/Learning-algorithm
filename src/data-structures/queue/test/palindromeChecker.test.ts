import "mocha";
import { expect, assert } from "chai";
import palindromeChecker from "../palindromeChecker";

describe("回文 测试", function () {
  it("回文", function () {
    assert.equal(palindromeChecker('level'), true);
  });
  it("回文", function () {
    assert.equal(palindromeChecker('a'), true);
  });
  it("回文", function () {
    assert.equal(palindromeChecker('abc'), false);
  });
});