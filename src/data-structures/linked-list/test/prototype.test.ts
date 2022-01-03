import "mocha";
import { expect, assert } from "chai";
import { instanceOf } from "../prototype";

describe("原型链 测试", function () {
  it("instanceof 的原理", function () {
    expect(instanceOf([], Array)).to.be.equal(true);
    expect(instanceOf([], Object)).to.be.equal(true);
    assert.equal(instanceOf({}, Object), true);
    assert.equal(instanceOf(1, Number), true);
  });
});