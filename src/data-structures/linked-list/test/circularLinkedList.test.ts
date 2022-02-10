import "mocha";
import { expect, assert } from "chai";
import CircularLinkedList from "../circularLinkedList";

describe("循环链表 测试", function () {
  const circularLinkedList = new CircularLinkedList();
  it("push", function () {
    circularLinkedList.push(2);
    expect(circularLinkedList.size()).to.be.equal(1);
  });
  
  it("insert", function () {
    const res1: any = circularLinkedList.insert(1, 1);
    const res2: any = circularLinkedList.insert(3, circularLinkedList.size() + 1);
    const res3: any = circularLinkedList.insert(4, circularLinkedList.size() + 1);
    // console.log(circularLinkedList)
    expect(circularLinkedList.size()).to.be.equal(4);
  });
  it("getElementAt", function () {
    const node: any = circularLinkedList.getElementAt(3);
    expect(node.element).to.be.equal(3);
  });
  it("removeAt", function () {
    const element: any = circularLinkedList.removeAt(1);
    expect(element).to.be.equal(1);
  });
  it("indexOf", function () {
    const index: any = circularLinkedList.indexOf(4);
    // console.log(circularLinkedList);
    expect(index).to.be.equal(3);
  });
  it("remove", function () {
    const element: any = circularLinkedList.remove(4);
    // console.log(circularLinkedList);
    expect(element).to.be.equal(4);
  });
  it("getHead", function () {
    const head: any = circularLinkedList.getHead();
    // console.log(head, circularLinkedList);
    expect(head.element).to.be.equal(2);
  });
  it("size", function () {
    const size = circularLinkedList.size();
    expect(size).to.be.equal(2);
  });
  it("isEmpty", function () {
    const isEmpty = circularLinkedList.isEmpty();
    expect(isEmpty).to.be.equal(false);
  });
  it("toString", function () {
    const str: any = circularLinkedList.toString();
    expect(str).to.be.equal('2, 3');
  });
});