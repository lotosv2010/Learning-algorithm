import "mocha";
import { expect, assert } from "chai";
import MinHeap  from "../minHeap";

describe("最小堆(MinHeap) 测试", function () {
  const h = new MinHeap();
  it("最小堆-插入", function () {
    h.insert(3);
    h.insert(2);
    h.insert(4);
    h.insert(1);
    h.insert(5);
    expect(h.get()).to.be.deep.equal([1, 2, 4, 3, 5]);
  });
  it('删除堆顶', function () {
    h.extract();
    expect(h.get()).to.be.deep.equal([2, 3, 4, 5]);
  });
  it('获取堆顶', function () {
    expect(h.peek()).to.be.deep.equal(2);
  });
  it('获取堆大小', function () {
    expect(h.size()).to.be.deep.equal(4);
  });
});