import "mocha";
import { expect, assert } from "chai";
import Stack from "../stack-array";

describe("stack-array 测试", function () {
  const stack = new Stack();
  it("添加元素", function () {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.size()).to.be.equal(3);
  });
  it("移除栈顶", function () {
    stack.pop();
    expect(stack.size()).to.be.equal(2);
  });
  it("返回栈顶的元素", function () {
    const item = stack.peek();
    expect(item).to.be.equal(2);
  });
  it("判断栈是否为空", function () {
    const isEmpty = stack.isEmpty();
    expect(isEmpty).to.be.equal(false);
  });
  it("获取栈大小", function () {
    const size = stack.size();
    expect(size).to.be.equal(2);
  });
  it("toString", function () {
    expect(stack.toString()).to.be.equal('1,2');
  });
  it("清空栈", function () {
    stack.clear();
    expect(stack.size()).to.be.equal(0);
  });
});
