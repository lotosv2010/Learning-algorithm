import "mocha";
import { expect, assert } from "chai";
import { spy } from "sinon";
import stack from "../index";

describe("栈 测试", function () {
  it("可以正常入栈", function () {
    stack.push(1);
    stack.push(2);
    expect(stack).to.be.deep.equal([1, 2]);
  });
  it("可以正常出栈", function () {
    stack.pop();
    assert.deepEqual(stack, [1]);
  });
});
