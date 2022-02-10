import "mocha";
import { expect, assert } from "chai";
import SortedLinkedList from "../sortedLinkedList";

describe("有序链表 测试", function () {
  const sortedLinkedList = new SortedLinkedList();
  it("push", function () {
    sortedLinkedList.push(2);
    sortedLinkedList.push(1);
    expect(sortedLinkedList.size()).to.be.equal(2);
  });
  it("getElementAt", function () {
    const node: any = sortedLinkedList.getElementAt(2);
    expect(node.element).to.be.equal(2);
  });
  it("insert", function () {
    const res1: any = sortedLinkedList.insert(11, 1);
    const res2: any = sortedLinkedList.insert(22, 2);
    // console.log(sortedLinkedList);
    expect(sortedLinkedList.size()).to.be.equal(4);
  });
  it("indexOf", function () {
    const index: any = sortedLinkedList.indexOf(22);
    // console.log(sortedLinkedList);
    expect(index).to.be.equal(4);
  });
  it("removeAt", function () {
    const element: any = sortedLinkedList.removeAt(1);
    expect(element).to.be.equal(1);
  });
  
  it("remove", function () {
    const element: any = sortedLinkedList.remove(22);
    // console.log(sortedLinkedList);
    expect(element).to.be.equal(22);
  });
  it("getHead", function () {
    const head: any = sortedLinkedList.getHead();
    // console.log(head, sortedLinkedList);
    expect(head.element).to.be.equal(2);
  });
  it("size", function () {
    const size = sortedLinkedList.size();
    expect(size).to.be.equal(2);
  });
  it("isEmpty", function () {
    const isEmpty = sortedLinkedList.isEmpty();
    expect(isEmpty).to.be.equal(false);
  });
  it("toString", function () {
    const str: any = sortedLinkedList.toString();
    expect(str).to.be.equal('2, 11');
  });
});