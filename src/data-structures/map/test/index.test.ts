import "mocha";
import { expect, assert } from "chai";
import { set, del, update, has, get, clear } from "../index";

describe("字典Map 测试", function () {
  it("增", function () {
    const map = new Map();
    expect(set(map, 'name', 'test')).to.be.deep.equal(new Map([['name', 'test']]));
  });
  it("删", function () {
    const map: Map<string, any> = new Map<string, any>([['name', 'test'], ['age', 18]]);
    assert.deepEqual(del(map, 'name'), new Map([['age', 18]]));
    clear(map)
    expect(map.size).to.be.deep.equal(0);
  });
  it("改", function () {
    const map: Map<string, any> = new Map<string, any>([['age', 18]]);
    assert.deepEqual(update(map, 'age', 28), new Map([['age', 28]]));
  });
  it("查", function () {
    const map: Map<string, any> = new Map<string, any>([['name', 'test'], ['age', 18]]);
    assert.deepEqual(has(map, 'name'), true);
    assert.deepEqual(has(map, 'age'), true);
    assert.deepEqual(has(map, 'height'), false);
    expect(get(map, 'name')).to.be.equal('test');
    expect(get(map, 'age')).to.be.equal(18);
  });
});