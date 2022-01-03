import "mocha";
import { expect, assert } from "chai";
import { json, path } from "../json";

describe("使用链表指针获取JSON的节点值 测试", function () {
  it("使用链表指针获取JSON的节点值", function () {
    let p: any = json;
    path.forEach(k => {
      p = p[k]
    });
    expect(p).to.be.equal(1);
  });
});