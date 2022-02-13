import "mocha";
import { expect, assert } from "chai";
import LinkedList from "../linkedList";

describe("链表 测试", function () {
  const linkedList = new LinkedList();
  it("push", function () {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    expect(linkedList.size()).to.be.equal(4);
  });
  it("getElementAt", function () {
    const node: any = linkedList.getElementAt(3);
    expect(node.element).to.be.equal(3);
  });
  it("removeAt", function () {
    const element: any = linkedList.removeAt(1);
    expect(element).to.be.equal(1);
  });
  it("insert", function () {
    // console.log(linkedList);
    const res1: any = linkedList.insert(1, 1);
    const res2: any = linkedList.insert(22, 2);
    expect(linkedList.size()).to.be.equal(5);
  });
  it("indexOf", function () {
    const index: any = linkedList.indexOf(22);
    // console.log(linkedList);
    expect(index).to.be.equal(2);
  });
  it("remove", function () {
    const element: any = linkedList.remove(22);
    // console.log(linkedList);
    expect(element).to.be.equal(22);
  });
  it("getHead", function () {
    const head: any = linkedList.getHead();
    // console.log(head, linkedList);
    expect(head.element).to.be.equal(1);
  });
  it("size", function () {
    const size = linkedList.size();
    expect(size).to.be.equal(4);
  });
  it("isEmpty", function () {
    const isEmpty = linkedList.isEmpty();
    expect(isEmpty).to.be.equal(false);
  });
  it("toString", function () {
    const str: any = linkedList.toString();
    expect(str).to.be.equal('1, 2, 3, 4');
  });
});