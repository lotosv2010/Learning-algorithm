export function breadthFirstSearch(graph: Record<string, any>, root: any, nodeList: Array<any>, visited: Set<any>): Array<any> {
  const queue = []; // 新建一个队列
  if(root) {
    queue.unshift(root);
    visited.add(root);
    while(queue.length !== 0) { // 重复二、三步
      const node = queue.shift(); // 队头出队
      nodeList.push(node); // 访问队头
      graph[node].forEach((n: any) => {
        if(!visited.has(n)){
          queue.push(n); // 把队头的没访问过的相邻节点依次入队
          visited.add(n);
        }
      });
    }
  }
  return nodeList;
}