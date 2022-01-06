import "mocha";
import { expect, assert } from "chai";
import { MinHeap } from "../index";

describe("堆(Heap) 测试", function () {
  const h = new MinHeap();
  it("最小堆-插入", function () {
    h.push(3);
    h.push(2);
    h.push(4);
    h.push(1);
    h.push(5);
    expect(h.get()).to.be.deep.equal([1, 2, 4, 3, 5]);
  });
  it('删除堆顶', function () {
    h.pop();
    expect(h.get()).to.be.deep.equal([2, 3, 4, 5]);
  });
  it('获取堆顶', function () {
    expect(h.peek()).to.be.deep.equal(2);
  });
  it('获取堆大小', function () {
    expect(h.size()).to.be.deep.equal(4);
  });
});