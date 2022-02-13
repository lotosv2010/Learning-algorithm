export function depthFirstSearch(tree: Record<string, any>, nodeList: Array<any>): Array<any> {
  if(tree) {
    nodeList.push(tree.value);
    const children = tree.children;
    for (let i = 0; i < children?.length; i++) {
      depthFirstSearch(children[i], nodeList)
    }
  }
  return nodeList;
}