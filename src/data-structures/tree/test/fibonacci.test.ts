import "mocha";
import { expect, assert } from "chai";
import { fibonacciIterative, fibonacci, fibonacciMemoization } from "../fibonacci";

describe("斐波那契数列 测试", function () {
  // 0、1、1、2、3、5、8、13、21、34
  it("迭代", function () {
    expect(fibonacciIterative(9)).to.be.deep.equal(34);
  });
  it("递归", function () {
    assert.equal(fibonacci(5), 5);
  });
  it("记忆", function () {
    assert.equal(fibonacciMemoization(5), 5);
  });
});