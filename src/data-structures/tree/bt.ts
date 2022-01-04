// todo 先序遍历
export function preOrderTraversal(tree: Record<string, any>, nodeList: Array<any>) {
  if(tree) {
    nodeList.push(tree?.value);
    preOrderTraversal(tree?.left, nodeList);
    preOrderTraversal(tree?.right, nodeList);
  }
  return nodeList;
}

// todo 中序遍历
export function inOrderTraversal(tree: Record<string, any>, nodeList: Array<any>) {
  if(tree) {
    inOrderTraversal(tree?.left, nodeList);
    nodeList.push(tree?.value);
    inOrderTraversal(tree?.right, nodeList);
  }
  return nodeList;
}

// todo 后序遍历
export function postOrderTraversal(tree: Record<string, any>, nodeList: Array<any>) {
  if(tree) {
    postOrderTraversal(tree?.left, nodeList);
    postOrderTraversal(tree?.right, nodeList);
    nodeList.push(tree?.value);
  }
  return nodeList;
}