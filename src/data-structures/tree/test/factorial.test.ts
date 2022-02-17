import "mocha";
import { expect, assert } from "chai";
import { factorialIterative, factorial } from "../factorial";

describe("数的阶乘 测试", function () {
  it("迭代", function () {
    expect(factorialIterative(5)).to.be.deep.equal(120);
  });
  it("递归", function () {
    assert.equal(factorial(5), 120);
  });
});