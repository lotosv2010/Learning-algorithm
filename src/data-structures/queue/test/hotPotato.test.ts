import "mocha";
import { expect, assert } from "chai";
import hotPotato from "../hotPotato";

describe("击鼓传花游戏 测试", function () {
  it("击鼓传花游戏", function () {
    const names = ['john', 'jack', 'camila', 'ingrid', 'carl'];
    const result = hotPotato(names, 7);
    // console.log(result);
    assert.equal(result.winner, 'john');
  });
});