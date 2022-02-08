import "mocha";
import { expect, assert } from "chai";
import Queue from "../queue";

describe("queue 测试", function () {
  const queue = new Queue();
  it("可以正常入队列", function () {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.size()).to.be.deep.equal(3);
  });
  it("可以正常出队列", function () {
    queue.dequeue();
    assert.deepEqual(queue.size(), 2);
  });
  it("队列中第一个元素", function () {
    const res = queue.peek();
    assert.deepEqual(res, 2);
  });
  it("队列是否为空", function () {
    assert.deepEqual(queue.isEmpty(), false);
  });
  it("队列大小", function () {
    assert.deepEqual(queue.size(), 2);
  });
  it("toString", function () {
    assert.deepEqual(queue.toString(), '2,3');
  });
  it("清空队列", function () {
    queue.clear();
    assert.deepEqual(queue.size(), 0);
  });
});