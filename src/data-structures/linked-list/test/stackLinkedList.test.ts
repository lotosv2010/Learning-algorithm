import "mocha";
import { expect, assert } from "chai";
import StackLinkedList from "../stackLinkedList";

describe("StackLinkedList 测试", function () {
  const stackLinkedList = new StackLinkedList();
  it("push", function () {
    stackLinkedList.push(1);
    stackLinkedList.push(2);
    stackLinkedList.push(3);
    stackLinkedList.push(4);
    expect(stackLinkedList.size()).to.be.equal(4);
  });
  it("pop", function () {
    const element: any = stackLinkedList.pop();
    expect(element).to.be.equal(4);
  });
  it("peek", function () {
    const element: any = stackLinkedList.peek();
    expect(element).to.be.equal(3);
  });
  it("size", function () {
    const size = stackLinkedList.size();
    expect(size).to.be.equal(3);
  });
  it("isEmpty", function () {
    const isEmpty = stackLinkedList.isEmpty();
    expect(isEmpty).to.be.equal(false);
  });
  it("toString", function () {
    const str: any = stackLinkedList.toString();
    expect(str).to.be.equal('1, 2, 3');
  });
  it("clear", function () {
    stackLinkedList.clear();
    expect(stackLinkedList.size()).to.be.equal(0);
  });
});