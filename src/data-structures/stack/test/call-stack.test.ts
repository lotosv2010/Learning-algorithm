import "mocha";
import { expect, assert } from "chai";
import { func1 } from "../call-stack";

describe("函数调用堆栈 测试", function () {
  it("函数调用顺序为321", function () {
    const res = func1();
    expect(res).to.be.equal('func3func2func1');
  });
});