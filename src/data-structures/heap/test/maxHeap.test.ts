import "mocha";
import { expect, assert } from "chai";
import MaxHeap  from "../MaxHeap";

describe("最大堆(MaxHeap) 测试", function () {
  const h = new MaxHeap();
  it("最大堆-插入", function () {
    h.insert(3);
    h.insert(2);
    h.insert(4);
    h.insert(1);
    h.insert(5);
    expect(h.get()).to.be.deep.equal([5, 4, 3, 1, 2]);
  });
  it('删除堆顶', function () {
    h.extract();
    expect(h.get()).to.be.deep.equal([4, 2, 3, 1]);
  });
  it('获取堆顶', function () {
    expect(h.peek()).to.be.deep.equal(4);
  });
  it('获取堆大小', function () {
    expect(h.size()).to.be.deep.equal(4);
  });
});