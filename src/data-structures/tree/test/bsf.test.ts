import "mocha";
import { expect, assert } from "chai";
import { breadthFirstSearch } from "../bfs";

describe("树 Tree 测试", function () {
  it("广度优先遍历", function () {
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
    breadthFirstSearch(tree, nodeList);
    expect(nodeList).to.be.deep.equal(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
  });
});