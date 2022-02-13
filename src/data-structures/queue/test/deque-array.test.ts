import "mocha";
import { expect, assert } from "chai";
import Deque from "../deque-array";

describe("deque-array 测试", function () {
  const queue = new Deque();
  it("addFront", function () {
    queue.addFront(2);
    queue.addFront(1);
    expect(queue.toString()).to.be.deep.equal('1,2');
  });
  it("addBack", function () {
    queue.addBack(3);
    queue.addBack(4);
    expect(queue.toString()).to.be.deep.equal('1,2,3,4');
  });
  it("removeFront", function () {
    const res = queue.removeFront();
    assert.deepEqual(res, 1);
  });
  it("removeBack", function () {
    const res = queue.removeBack();
    assert.deepEqual(res, 4);
  });
  it("peekFront", function () {
    const res = queue.peekFront();
    assert.deepEqual(res, 2);
  });
  it("peekBack", function () {
    const res = queue.peekBack();
    assert.deepEqual(res, 3);
  });
  it("isEmpty", function () {
    assert.deepEqual(queue.isEmpty(), false);
  });
  it("size", function () {
    assert.deepEqual(queue.size(), 2);
  });
  it("toString", function () {
    assert.deepEqual(queue.toString(), '2,3');
  });
  it("clear", function () {
    queue.clear();
    assert.deepEqual(queue.size(), 0);
  });
});