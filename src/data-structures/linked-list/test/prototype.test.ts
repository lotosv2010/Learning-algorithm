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
  it('原型链', () => {
    const foo: any = {};
    const f: any = function(){};
    (Object.prototype as any).a = 'value a';
    (Function.prototype as any).b = 'value b';

    // console.log(foo.a);
    // console.log(foo.b);

    // console.log(f.a);
    // console.log(f.b);
    expect(foo.a).to.be.equal('value a');
    expect(foo.b).to.be.equal(undefined);
    assert.equal(f.a, 'value a');
    assert.equal(f.b, 'value b');
  })
});