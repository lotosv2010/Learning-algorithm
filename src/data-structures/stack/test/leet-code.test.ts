import "mocha";
import { expect, assert } from "chai";
import { isValid } from "../leet-code";

describe("有效的括号 测试", function () {
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
