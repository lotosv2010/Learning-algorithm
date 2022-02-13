export function depthFirstSearch(graph: Record<string, any>, root: any, nodeList: Array<any>, visited: Set<any>): Array<any> {
  if(root) {
    nodeList.push(root);
    visited.add(root);
    graph[root].forEach((n: any) => {
      if(!visited.has(n)){
        depthFirstSearch(graph, n, nodeList, visited);
      }
    })
  }
  return nodeList;
}