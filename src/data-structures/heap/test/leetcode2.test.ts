import "mocha";
import { expect, assert } from "chai";
import { mergeKLists } from "../leetcode2";

describe("合并K个升序链表 LeetCode 测试", function () {
  it("合并K个升序链表", function () {
    // 输入: lists = [[1,4,5],[1,3,4],[2,6]]
    // 输出: [1,1,2,3,4,4,5,6]
    const list: any = [
      {val: 1, next: { val: 4, next: { val: 5 }}},
      {val: 1, next: { val: 3, next: { val: 4 }}},
      {val: 2, next: { val: 6}}
    ]
    const res: any = {val: 1, next: { val: 1, next: { val: 2, next: { val:3, next: { val: 4, next: { val: 4, next: { val: 5 , next: { val:6 }}}}}}}}
    assert.deepEqual(mergeKLists(list), res);
  });
  it("合并K个升序链表", function () {
    // 输入: lists = []
    // 输出: []
    const list: any = [];
    const res: any = null;
    assert.deepEqual(mergeKLists(list), res);
  });
  it("合并K个升序链表", function () {
    // 输入: lists = [[]]
    // 输出: []
    const list: any = [{}];
    const res: any = null;
    assert.deepEqual(mergeKLists(list), res);
  });
});