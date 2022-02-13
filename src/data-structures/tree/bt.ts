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

// todo 先序遍历-非递归
export function preOrderTraversal2(tree: Record<string, any>, nodeList: Array<any>) {
  if(tree) {
    const stack = [];
    stack.push(tree); // 根节点入栈
    while(stack.length > 0) {
      const node = stack.pop(); // （根)节点出栈
      nodeList.push(node?.value); // 访问(根)节点
      node?.right && stack.push(node?.right); // 右子树入栈
      node?.left && stack.push(node?.left); // 左子树入栈
    }
  }
  return nodeList;
}

// todo 中序遍历-非递归
export function inOrderTraversal2(tree: Record<string, any>, nodeList: Array<any>) {
  if(tree) {
    const stack = [];
    let p = tree;
    while(stack.length > 0 || p) {
      while(p) { // 左子树入栈
        stack.push(p);
        p = p?.left;
      }
      const node = stack.pop(); // 左子树最左叶子节点，出栈
      nodeList.push(node?.value); // 访问(根)节点
      p = node?.right; // 右子树入栈
    }
  }
  return nodeList;
}

// todo 后序遍历-非递归
// 左 --> 右 --> 根
// 先：根 --> 左 --> 右 反转 右 --> 左 --> 根
export function postOrderTraversal2(tree: Record<string, any>, nodeList: Array<any>) {
  if(tree) {
    const stack = [];
    stack.push(tree); // 根节点入栈
    while(stack.length > 0) {
      const node = stack.pop(); // （根)节点出栈
      nodeList.push(node?.value); // 访问(根)节点，此处的顺序是变形后的先序遍历，根 --> 右 --> 左
      node?.left && stack.push(node?.left); // 左子树入栈
      node?.right && stack.push(node?.right); // 右子树入栈
    }
  }
  return nodeList.reverse(); // 最后将变形后的先序遍历的结果 根 --> 右 --> 左，反转一次，得到 左 --> 右 --> 根
}