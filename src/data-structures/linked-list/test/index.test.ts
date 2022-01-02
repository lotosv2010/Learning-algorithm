import "mocha";
import { expect, assert } from "chai";
import linkedList, { c, d, ILink } from "../index";

describe("链表 测试", function () {
  it("可以正常遍历链表", function () {
    let p: any = linkedList;
    let res: any[] = [];
    while(p) {
      res.push(p.data); 
      p = p.next;
    }
    expect(res).to.be.deep.equal(['a', 'b', 'c', 'd']);
  });
  it("可以正常插入元素", function () {
    // 插入 e 节点
    const e: ILink = { data: 'e' };
    c.next = e;
    e.next = d;
    assert.deepEqual(linkedList.next?.next?.next, e);
  });
  it("可以正常删除元素", function () {
    // 删除 e 节点
    c.next = d;
    assert.deepEqual(linkedList.next?.next?.next, d);
  });
});