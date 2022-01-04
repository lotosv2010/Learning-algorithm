// ● 新建一个队列，把根节点入队
// ● 把队头出队并访问
// ● 把队头的 children 依次入队
// ● 重复二、三步，直到队列为空
export function breadthFirstSearch(tree: Record<string, any>, nodeList: Array<any>): Array<any> {
  const queue = []; // 新建一个队列
  if(tree) {
    queue.unshift(tree);
    while(queue.length !== 0) { // 重复二、三步
      const node = queue.shift(); // 队头出队
      nodeList.push(node?.value); // 访问队头
      const children: any = node?.children;
      for (let i = 0; i < children?.length; i++) {
        queue.push(children[i]); // 队头的 children 依次入对
      }
    }
  }
  return nodeList;
}