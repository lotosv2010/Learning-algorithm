import "mocha";
import { expect, assert } from "chai";
import DoublyLinkedList from "../doublyLinkedList";

describe("双向链表 测试", function () {
  const doublyLinkedList = new DoublyLinkedList();
  it("push", function () {
    doublyLinkedList.push(1);
    doublyLinkedList.push(2);
    doublyLinkedList.push(3);
    doublyLinkedList.push(4);
    expect(doublyLinkedList.size()).to.be.equal(4);
  });
  it("getElementAt", function () {
    const node: any = doublyLinkedList.getElementAt(3);
    expect(node.element).to.be.equal(3);
  });
  it("removeAt", function () {
    const element: any = doublyLinkedList.removeAt(1);
    doublyLinkedList.removeAt(doublyLinkedList.size());
    expect(element).to.be.equal(1);
  });
  it("insert", function () {
    // console.log(doublyLinkedList);
    const res1: any = doublyLinkedList.insert(1, 1);
    const res2: any = doublyLinkedList.insert(22, 2);
    doublyLinkedList.insert(4, doublyLinkedList.size());
    expect(doublyLinkedList.size()).to.be.equal(5);
  });
  it("indexOf", function () {
    const index: any = doublyLinkedList.indexOf(22);
    // console.log(doublyLinkedList);
    expect(index).to.be.equal(2);
  });
  it("remove", function () {
    const element: any = doublyLinkedList.remove(22);
    // console.log(doublyLinkedList);
    expect(element).to.be.equal(22);
  });
  it("getHead", function () {
    const head: any = doublyLinkedList.getHead();
    // console.log(head, doublyLinkedList);
    expect(head.element).to.be.equal(1);
  });
  it("size", function () {
    const size = doublyLinkedList.size();
    expect(size).to.be.equal(4);
  });
  it("isEmpty", function () {
    const isEmpty = doublyLinkedList.isEmpty();
    expect(isEmpty).to.be.equal(false);
  });
  it("toString", function () {
    const str: any = doublyLinkedList.toString();
    expect(str).to.be.equal('1, 2, 3, 4');
  });
});