import "mocha";
import { expect, assert } from "chai";
import { RecentCounter } from "../leet-code";

describe("计算最近请求次数 测试", function () {
  it("3000ms内请求的次数", function () {
    const recentCounter = new RecentCounter();
    recentCounter.ping(1);     // requests = [1]，范围是 [-2999,1]，返回 1
    recentCounter.ping(100);   // requests = [1, 100]，范围是 [-2900,100]，返回 2
    recentCounter.ping(3001);  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
    // const res = recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3
    expect(recentCounter.ping(3002)).to.be.equal(3);
  });
});
