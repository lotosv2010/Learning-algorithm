import "mocha";
import { expect, assert } from "chai";
import { depthFirstSearch } from "../dfs";

describe("树 Tree 测试", function () {
  it("深度优先遍历", function () {
    const tree = {
      value: 'a',
      children: [
        {
          value: 'b',
          children: [
            {
              value: 'd'
            },
            {
              value: 'e'
            }
          ]
        },
        {
          value: 'c',
          children: [
            {
              value: 'f'
            },
            {
              value: 'g'
            }
          ]
        }
      ],
    };
    const nodeList: Array<any> = [];
    depthFirstSearch(tree, nodeList);
    expect(nodeList).to.be.deep.equal(['a', 'b', 'd', 'e', 'c', 'f', 'g']);
  });
});