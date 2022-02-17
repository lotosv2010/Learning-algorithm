import "mocha";
import { expect, assert } from "chai";
import RedBlackTree from "../redBlackTree";
import { RedBlackNode, Colors } from '../../../models/redBlackNode';

describe("红黑树-RedBlackTree 测试", function () {
  const tree = new RedBlackTree();
  it('insert', () => {
    let node;
    tree.insert(1);
    assertNode(tree.getRoot() as RedBlackNode, 1, Colors.BLACK);

    tree.insert(2);
    assertNode(tree.getRoot() as RedBlackNode, 1, Colors.BLACK);
    assertNode(tree.getRoot()?.right as RedBlackNode, 2, Colors.RED);

    tree.insert(3);
    assertNode(tree.getRoot() as RedBlackNode, 2, Colors.BLACK);
    assertNode(tree.getRoot()?.right as RedBlackNode, 3, Colors.RED);
    assertNode(tree.getRoot()?.left as RedBlackNode, 1, Colors.RED);

    tree.insert(4);
    assertNode(tree.getRoot() as RedBlackNode, 2, Colors.BLACK);
    assertNode(tree.getRoot()?.left as RedBlackNode, 1, Colors.BLACK);
    assertNode(tree.getRoot()?.right as RedBlackNode, 3, Colors.BLACK);
    assertNode(tree.getRoot()?.right?.right as RedBlackNode, 4, Colors.RED);

    tree.insert(5);
    assertNode(tree.getRoot() as RedBlackNode, 2, Colors.BLACK);
    assertNode(tree.getRoot()?.left as RedBlackNode, 1, Colors.BLACK);
    node = tree.getRoot()?.right as RedBlackNode;
    assertNode(node, 4, Colors.BLACK);
    assertNode(node.left as RedBlackNode, 3, Colors.RED);
    assertNode(node.right as RedBlackNode, 5, Colors.RED);

    tree.insert(6);
    assertNode(tree.getRoot() as RedBlackNode, 2, Colors.BLACK);
    assertNode(tree.getRoot()?.left as RedBlackNode, 1, Colors.BLACK);
    node = tree.getRoot()?.right as RedBlackNode;
    assertNode(node, 4, Colors.RED);
    assertNode(node.left as RedBlackNode, 3, Colors.BLACK);
    assertNode(node.right as RedBlackNode, 5, Colors.BLACK);
    assertNode(node.right?.right as RedBlackNode, 6, Colors.RED);

    tree.insert(7);
    assertNode(tree.getRoot() as RedBlackNode, 2, Colors.BLACK);
    assertNode(tree.getRoot()?.left as RedBlackNode, 1, Colors.BLACK);
    node = tree.getRoot()?.right as RedBlackNode;
    assertNode(node, 4, Colors.RED);
    assertNode(node.left as RedBlackNode, 3, Colors.BLACK);
    assertNode(node.right as RedBlackNode, 6, Colors.BLACK);
    assertNode(node.right?.right as RedBlackNode, 7, Colors.RED);
    assertNode(node.right?.left as RedBlackNode, 5, Colors.RED);

    tree.insert(8);
    assertNode(tree.getRoot() as RedBlackNode, 4, Colors.BLACK);
    node = tree.getRoot()?.left as RedBlackNode;
    assertNode(node, 2, Colors.RED);
    assertNode(node.left as RedBlackNode, 1, Colors.BLACK);
    assertNode(node.right as RedBlackNode, 3, Colors.BLACK);
    node = tree.getRoot()?.right as RedBlackNode;
    assertNode(node, 6, Colors.RED);
    assertNode(node.left as RedBlackNode, 5, Colors.BLACK);
    assertNode(node.right as RedBlackNode, 7, Colors.BLACK);
    assertNode(node.right?.right as RedBlackNode, 8, Colors.RED);

    tree.insert(9);
    assertNode(tree.getRoot() as RedBlackNode, 4, Colors.BLACK);
    node = tree.getRoot()?.left as RedBlackNode;
    assertNode(node, 2, Colors.RED);
    assertNode(node.left as RedBlackNode, 1, Colors.BLACK);
    assertNode(node.right as RedBlackNode, 3, Colors.BLACK);
    node = tree.getRoot()?.right as RedBlackNode;
    assertNode(node, 6, Colors.RED);
    assertNode(node.left as RedBlackNode, 5, Colors.BLACK);
    assertNode(node.right as RedBlackNode, 8, Colors.BLACK);
    assertNode(node.right?.left as RedBlackNode, 7, Colors.RED);
    assertNode(node.right?.right as RedBlackNode, 9, Colors.RED);

    tree.insert(10);
    assertNode(tree.getRoot() as RedBlackNode, 4, Colors.BLACK);
    node = tree.getRoot()?.left as RedBlackNode;
    assertNode(node, 2, Colors.BLACK);
    assertNode(node.left as RedBlackNode, 1, Colors.BLACK);
    assertNode(node.right as RedBlackNode, 3, Colors.BLACK);
    node = tree.getRoot()?.right as RedBlackNode;
    assertNode(node, 6, Colors.BLACK);
    assertNode(node.left as RedBlackNode, 5, Colors.BLACK);
    assertNode(node.right as RedBlackNode, 8, Colors.RED);
    assertNode(node.right?.left as RedBlackNode, 7, Colors.BLACK);
    assertNode(node.right?.right as RedBlackNode, 9, Colors.BLACK);
    assertNode(node.right?.right?.right as RedBlackNode, 10, Colors.RED);

  });

  function assertNode(node: RedBlackNode, key: number, color: Colors) {
    expect(node.color).to.equal(color);
    expect(node.key).to.equal(key);
  }
});