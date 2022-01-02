import "mocha";
import { expect, assert } from "chai";
import queue from "../index";

describe("队列 测试", function () {
  it("可以正常入队列", function () {
    queue.push(1);
    queue.push(2);
    expect(queue).to.be.deep.equal([1, 2]);
  });
  it("可以正常出队列", function () {
    queue.shift();
    assert.deepEqual(queue, [2]);
  });
});