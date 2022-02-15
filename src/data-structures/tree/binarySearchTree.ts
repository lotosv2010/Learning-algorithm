import { defaultCompare, Compare } from '../../util';
import { Node } from '../../models/node';

export default class BinarySearchTree {
  protected root: Node | null;
  constructor(protected compareFn = defaultCompare) {
    this.root = null; // Node 类型的根节点
  }
  // 插入一个键
  insert(key: any) {
    if(!this.root) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }
  private insertNode(node: Node, key: any) {
    if(this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if(!node.left) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if(!node.right) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }
  // 返回跟节点
  getRoot() {
    return this.root;
  }
  // 查找一个键
  search(key: any) {}
  // 先序遍历
  preOrderTraverse() {}
  // 中序遍历
  inOrderTraverse() {}
  // 后序遍历
  postOrderTraverse() {}
  // 返回树中最小的值/键
  min(){}
  // 返回树中最大的值/键
  max() {}
  // 移除某个键
  remove(key: any) {}
}