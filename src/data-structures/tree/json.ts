export function dfs(json: Record<string, any>, nodeList: any[]) {
  nodeList.push(json)
  Object.keys(json).forEach(k => {
    dfs(json[k], nodeList)
  })
}