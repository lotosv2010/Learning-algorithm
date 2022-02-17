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
  protected insertNode(node: Node, key: any) {
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
  search(key: any): boolean {
    return this.searchNode(this.root, key);
  }
  private searchNode(node: Node | null, key: any): boolean {
    if(!node) return false;
    const compare = this.compareFn(key, node.key);
    if(compare === Compare.LESS_THAN) {
      return this.searchNode(node.left, key);
    } else if(compare === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }
  // 先序遍历
  preOrderTraverse(callback: Function) {
    this.preOrderTraverseNode(this.root, callback);
  }
  private preOrderTraverseNode(node: Node | null, callback: Function) {
    if(node) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }
  // 中序遍历
  inOrderTraverse(callback: Function) {
    this.inOrderTraverseNode(this.root, callback);
  }
  private inOrderTraverseNode(node: Node | null, callback: Function) {
    if(node) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }
  // 后序遍历
  postOrderTraverse(callback: Function) {
    this.postOrderTraverseNode(this.root, callback);
  }
  private postOrderTraverseNode(node: Node | null, callback: Function) {
    if(node) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }
  // 返回树中最小的值/键
  min(): Node | null{
    return this.minNode(this.root);
  }
  private minNode(node: Node | null) {
    let current = node;
    while(current && current.left) {
      current = current.left;
    }
    return current;
  }
  // 返回树中最大的值/键
  max(): Node | null {
    return this.maxNode(this.root);
  }
  private maxNode(node: Node | null): Node | null {
    let current = node;
    while(current && current.right) {
      current = current.right;
    }
    return current;
  }
  // 移除某个键
  remove(key: any) {
    this.root = this.removeNode(this.root, key);
  }
  protected removeNode(node: Node | null, key: any): Node | null {
    if(!node) return null;
    const compare = this.compareFn(key, node.key);
    if(compare === Compare.LESS_THAN) { // 键 小于 node.key
      node.left = this.removeNode(node.left, key);
      return node;
    } else if(compare === Compare.BIGGER_THAN) { // 键 大于 node.key
      node.right = this.removeNode(node.right, key);
      return node;
    } else { // 键 等于 node.key
      // 第一种情况
      if(!node.left && !node.right) {
        node = null;
        return node;
      }
      // 第二种情况
      if(!node.left) {
        node = node.right;
        return node;
      } else if(!node.right) {
        node = node.left;
        return node;
      }
      // 第三种情况
      const aux = this.minNode(node.right); // 找的右子树的最小节点
      node.key = aux?.key;
      node.right = this.removeNode(node.right, aux?.key); // 移除右子树中的最小节点
      return node;
    }
  }
}