import "mocha";
import { expect, assert } from "chai";
import { spy } from "sinon";
import testFunc from "../index";

describe("testFunc 测试", function () {
  it("可以正常累加", function () {
    const mockCallback = spy();

    const work = testFunc(mockCallback);
    work();
    work();
    work();

    expect(mockCallback.callCount).to.be.equal(3);
    expect(mockCallback.args).to.be.deep.equal([[0], [1], [2]]);
  });
});
